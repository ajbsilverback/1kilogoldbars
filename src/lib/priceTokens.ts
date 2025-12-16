/**
 * Dynamic Price Token System
 * 
 * Allows FAQ/content authors to use tokens like {{CAPITAL_REQUIREMENT}} 
 * instead of hard-coded dollar amounts. Tokens are replaced with live
 * values from the pricing API at render time.
 * 
 * IMPORTANT: This system is designed to be reusable across sites.
 * To adapt for a different product, only change siteConfig.ts - 
 * the tokens and content remain the same.
 */

import { ProductSpotSummary } from "./monexSpot";

/**
 * Configuration for price display
 */
export interface PriceTokenConfig {
  /** Premium band percentage for range calculations (default 5%) */
  premiumBandPercent?: number;
  /** Rounding increment in dollars (default 100) */
  roundingIncrement?: number;
}

const DEFAULT_CONFIG: Required<PriceTokenConfig> = {
  premiumBandPercent: 5,
  roundingIncrement: 100,
};

/**
 * Rounds a number to the nearest increment
 */
function roundToNearest(value: number, increment: number): number {
  return Math.round(value / increment) * increment;
}

/**
 * Formats a price value for display (e.g., "~$132,500")
 */
function formatPrice(value: number, prefix: string = "~"): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
  return `${prefix}${formatted}`;
}

/**
 * Token types supported by the system
 */
export type PriceTokenType = 
  | "CAPITAL_REQUIREMENT"           // ~$132,500 (ask price rounded)
  | "CAPITAL_REQUIREMENT_RANGE"     // ~$126,000–$139,000 (ask ± premium band)
  | "CAPITAL_REQUIREMENT_PLUS"      // ~$132,500+ (ask rounded with plus)
  | "LIQUIDITY_THRESHOLD"           // ~$132,500+ (same as plus, for liquidity context)
  | "KILO_PRICE"                    // ~$87,000 (kilo bar ask price)
  | "SPOT_PRICE"                    // ~$2,700 (spot price per oz)
  | "ONE_OZ_PRICE"                  // ~$2,800 (1 oz bar at ~5% premium)
  | "ONE_OZ_PRICE_RANGE"            // ~$2,700–$2,900 (1 oz price range)
  | "TEN_OZ_PRICE"                  // ~$28,000 (10 oz bar at ~3% premium)
  | "TEN_OZ_PRICE_RANGE"            // ~$27,000–$29,000 (10 oz price range)
  | "BREAKEVEN_AMOUNT"              // ~$2,600 (3% of kilo price for break-even)
  | "MULTI_KILO_VALUE";             // ~$260,000 (3 kilo bars value)

/**
 * Regex pattern to match tokens in strings
 * Matches: {{TOKEN_NAME}}
 */
const TOKEN_PATTERN = /\{\{(CAPITAL_REQUIREMENT|CAPITAL_REQUIREMENT_RANGE|CAPITAL_REQUIREMENT_PLUS|LIQUIDITY_THRESHOLD|KILO_PRICE|SPOT_PRICE|ONE_OZ_PRICE|ONE_OZ_PRICE_RANGE|TEN_OZ_PRICE|TEN_OZ_PRICE_RANGE|BREAKEVEN_AMOUNT|MULTI_KILO_VALUE)\}\}/g;

/**
 * Troy ounces in a kilo bar
 */
const TROY_OUNCES_PER_KILO = 32.1507;

/**
 * Resolves a single token to its display value
 */
export function resolveToken(
  tokenType: PriceTokenType,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  const { premiumBandPercent, roundingIncrement } = { ...DEFAULT_CONFIG, ...config };

  // If no price data available, return a sensible fallback
  if (!priceData || priceData.ask <= 0) {
    return "current market price";
  }

  const askPrice = priceData.ask; // Kilo bar ask price
  const roundedAsk = roundToNearest(askPrice, roundingIncrement);
  
  // Derive spot price per oz from kilo bar price (removing ~2% premium)
  const spotPricePerOz = askPrice / TROY_OUNCES_PER_KILO / 1.02;
  const roundedSpot = roundToNearest(spotPricePerOz, 50); // Round to nearest $50

  switch (tokenType) {
    case "CAPITAL_REQUIREMENT":
    case "KILO_PRICE":
      return formatPrice(roundedAsk);

    case "CAPITAL_REQUIREMENT_RANGE": {
      const lowBound = roundToNearest(askPrice * (1 - premiumBandPercent / 100), roundingIncrement);
      const highBound = roundToNearest(askPrice * (1 + premiumBandPercent / 100), roundingIncrement);
      return `${formatPrice(lowBound)}–${formatPrice(highBound).replace("~", "")}`;
    }

    case "CAPITAL_REQUIREMENT_PLUS":
    case "LIQUIDITY_THRESHOLD":
      return `${formatPrice(roundedAsk)}+`;

    case "SPOT_PRICE":
      return formatPrice(roundedSpot);

    case "ONE_OZ_PRICE": {
      // 1 oz bar at ~5% premium
      const oneOzPrice = roundToNearest(spotPricePerOz * 1.05, 50);
      return formatPrice(oneOzPrice);
    }

    case "ONE_OZ_PRICE_RANGE": {
      // 1 oz bars typically range from spot+3% to spot+8%
      const oneOzLow = roundToNearest(spotPricePerOz * 1.03, 50);
      const oneOzHigh = roundToNearest(spotPricePerOz * 1.08, 50);
      return `${formatPrice(oneOzLow)}–${formatPrice(oneOzHigh).replace("~", "")}`;
    }

    case "TEN_OZ_PRICE": {
      // 10 oz bar at ~3% premium
      const tenOzPrice = roundToNearest(spotPricePerOz * 10 * 1.03, 100);
      return formatPrice(tenOzPrice);
    }

    case "TEN_OZ_PRICE_RANGE": {
      // 10 oz bars typically range from spot+2% to spot+4%
      const tenOzLow = roundToNearest(spotPricePerOz * 10 * 1.02, 100);
      const tenOzHigh = roundToNearest(spotPricePerOz * 10 * 1.04, 100);
      return `${formatPrice(tenOzLow)}–${formatPrice(tenOzHigh).replace("~", "")}`;
    }

    case "BREAKEVEN_AMOUNT": {
      // 3% of kilo price for break-even calculation
      const breakeven = roundToNearest(askPrice * 0.03, 100);
      return formatPrice(breakeven);
    }

    case "MULTI_KILO_VALUE": {
      // Value of 3 kilo bars (for "a few kilo bars" references)
      const multiValue = roundToNearest(askPrice * 3, 1000);
      return formatPrice(multiValue) + "+";
    }

    default:
      return "current market price";
  }
}

/**
 * Replaces all tokens in a string with their resolved values
 * 
 * @param text - The string containing tokens (e.g., "Costs {{CAPITAL_REQUIREMENT}}")
 * @param priceData - The fetched price data (or null if unavailable)
 * @param config - Optional configuration for formatting
 * @returns The string with all tokens replaced
 */
export function replaceTokens(
  text: string,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  return text.replace(TOKEN_PATTERN, (match, tokenType: PriceTokenType) => {
    return resolveToken(tokenType, priceData, config);
  });
}

/**
 * Checks if a string contains any price tokens
 */
export function hasTokens(text: string): boolean {
  TOKEN_PATTERN.lastIndex = 0; // Reset regex state
  return TOKEN_PATTERN.test(text);
}

/**
 * Gets all tokens found in a string
 */
export function findTokens(text: string): PriceTokenType[] {
  const tokens: PriceTokenType[] = [];
  let match;
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[1] as PriceTokenType);
  }
  return tokens;
}




