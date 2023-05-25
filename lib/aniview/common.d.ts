export declare enum PayingMethodType {
  RevShare = 0,
  FixedCpm = 1,
}
export interface PriceException {
  max?: unknown;
  type?: PayingMethodType;
  enabled?: boolean;
  value?: number;
  cutModel?: number;
}
export interface Accounting {
  type: PayingMethodType;
  enabled?: null;
  value: number;
  max?: null;
  cutModel?: null;
}
export declare enum BreakingAdsMode {
  SLOT = 1,
  BREAKING_ADS = 2,
}
export declare enum ResizingMethod {
  SCALE = 1,
  FIXED = 2,
}
