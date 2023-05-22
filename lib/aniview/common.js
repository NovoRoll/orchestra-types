"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizingMethod =
  exports.BreakingAdsMode =
  exports.PayingMethodType =
    void 0;
var PayingMethodType;
(function (PayingMethodType) {
  PayingMethodType[(PayingMethodType["RevShare"] = 0)] = "RevShare";
  PayingMethodType[(PayingMethodType["FixedCpm"] = 1)] = "FixedCpm";
})(
  (PayingMethodType =
    exports.PayingMethodType || (exports.PayingMethodType = {})),
);
var BreakingAdsMode;
(function (BreakingAdsMode) {
  BreakingAdsMode[(BreakingAdsMode["SLOT"] = 1)] = "SLOT";
  BreakingAdsMode[(BreakingAdsMode["BREAKING_ADS"] = 2)] = "BREAKING_ADS";
})(
  (BreakingAdsMode = exports.BreakingAdsMode || (exports.BreakingAdsMode = {})),
);
var ResizingMethod;
(function (ResizingMethod) {
  ResizingMethod[(ResizingMethod["SCALE"] = 1)] = "SCALE";
  ResizingMethod[(ResizingMethod["FIXED"] = 2)] = "FIXED";
})((ResizingMethod = exports.ResizingMethod || (exports.ResizingMethod = {})));
//# sourceMappingURL=common.js.map
