"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerOverrideFunction =
  exports.PlayerStatus =
  exports.PlayerType =
    void 0;
var PlayerType;
(function (PlayerType) {
  PlayerType[(PlayerType["OUTSTREAM"] = 1)] = "OUTSTREAM";
  PlayerType[(PlayerType["INSTREAM"] = 2)] = "INSTREAM";
})((PlayerType = exports.PlayerType || (exports.PlayerType = {})));
var PlayerStatus;
(function (PlayerStatus) {
  PlayerStatus[(PlayerStatus["ACTIVE"] = 1)] = "ACTIVE";
  PlayerStatus[(PlayerStatus["ARCHIVED"] = 2)] = "ARCHIVED";
})((PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {})));
var PlayerOverrideFunction;
(function (PlayerOverrideFunction) {
  PlayerOverrideFunction["Unique"] = "unique";
  PlayerOverrideFunction["FindWin"] = "findWin";
  PlayerOverrideFunction["PostCreate"] = "postCreate";
  PlayerOverrideFunction["Retry"] = "retry";
  PlayerOverrideFunction["Create"] = "create";
  PlayerOverrideFunction["Position"] = "position";
  PlayerOverrideFunction["Load"] = "load";
  PlayerOverrideFunction["PostStart"] = "postStart";
  PlayerOverrideFunction["GetAttr"] = "getAttr";
  PlayerOverrideFunction["Start"] = "start";
  PlayerOverrideFunction["PreRun"] = "preRun";
  PlayerOverrideFunction["Run"] = "run";
  PlayerOverrideFunction["Target"] = "target";
  PlayerOverrideFunction["Track"] = "track";
  PlayerOverrideFunction["FetchContent"] = "fetchContent";
  PlayerOverrideFunction["Init"] = "init";
})(
  (PlayerOverrideFunction =
    exports.PlayerOverrideFunction || (exports.PlayerOverrideFunction = {})),
);
//# sourceMappingURL=player.js.map
