"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverrideFunction = exports.PlayerStatus = exports.PlayerType = void 0;
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["OUTSTREAM"] = 1] = "OUTSTREAM";
    PlayerType[PlayerType["INSTREAM"] = 2] = "INSTREAM";
})(PlayerType = exports.PlayerType || (exports.PlayerType = {}));
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["ACTIVE"] = 1] = "ACTIVE";
    PlayerStatus[PlayerStatus["ARCHIVED"] = 2] = "ARCHIVED";
})(PlayerStatus = exports.PlayerStatus || (exports.PlayerStatus = {}));
var OverrideFunction;
(function (OverrideFunction) {
    OverrideFunction["Unique"] = "unique";
    OverrideFunction["FindWin"] = "findWin";
    OverrideFunction["PostCreate"] = "postCreate";
    OverrideFunction["Retry"] = "retry";
    OverrideFunction["Create"] = "create";
    OverrideFunction["Position"] = "position";
    OverrideFunction["Load"] = "load";
    OverrideFunction["PostStart"] = "postStart";
    OverrideFunction["GetAttr"] = "getAttr";
    OverrideFunction["Start"] = "start";
    OverrideFunction["PreRun"] = "preRun";
    OverrideFunction["Run"] = "run";
    OverrideFunction["Target"] = "target";
    OverrideFunction["Track"] = "track";
    OverrideFunction["FetchContent"] = "fetchContent";
    OverrideFunction["Init"] = "init";
})(OverrideFunction = exports.OverrideFunction || (exports.OverrideFunction = {}));
//# sourceMappingURL=player.js.map