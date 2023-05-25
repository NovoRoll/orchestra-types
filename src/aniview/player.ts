import { BreakingAdsMode } from "./common";

export enum PlayerType {
  OUTSTREAM = 1,
  INSTREAM = 2,
}

export enum PlayerStatus {
  ACTIVE = 1,
  ARCHIVED = 2,
}

export enum PlayerOverrideFunction {
  Unique = "unique",
  FindWin = "findWin",
  PostCreate = "postCreate",
  Retry = "retry",
  Create = "create",
  Position = "position",
  Load = "load",
  PostStart = "postStart",
  GetAttr = "getAttr",
  Start = "start",
  PreRun = "preRun",
  Run = "run",
  Target = "target",
  Track = "track",
  FetchContent = "fetchContent",
  Init = "init",
}

export interface PlayerOverrideFunctionConfig {
  value: string;
  isActive: boolean;
}

export type PlayerOverrideFunctions = {
  selected: number[];
} & Record<PlayerOverrideFunction, PlayerOverrideFunctionConfig>;

export interface PlayerSettings {
  template: string;
  tabletAsDesktop: unknown;
  channel: string;
  publisher: string;
  position: {
    type: unknown;
    value: unknown;
    posCounter: unknown;
    useDifferent: unknown;
    posType?: boolean;
  };
  posDfp1x1?: boolean;
  overrideFunctions: PlayerOverrideFunctions;
  overrideExtensions: unknown;
  gpid?: string;
  ref1?: unknown;
  contentPlayerBaseURI?: string;
  adPlayerBaseURI?: string;
}

export type Player = OutstreamPlayer | InstreamPlayer;

export interface PlayerConfig {
  targeting: {
    domain: unknown;
    geography: unknown;
    geographyZip: unknown;
    geographyCoor: unknown;
    device: unknown;
    os: unknown;
    tag: unknown;
    playerSize: unknown;
    targetPlatform: number;
    dow: unknown;
    adtxt: unknown;
    customRules: unknown;
    idfa: unknown;
    euConsent: unknown;
    ccpa: unknown;
    buyeruid: unknown;
    euConsentRtb: unknown;
    slot: unknown;
    placement: unknown;
    customTargeting: unknown;
    bot: unknown;
  };
  playerTag: {
    template: string;
    tabletAsDesktop: unknown;
    channel: string;
    publisher: unknown;
    position: {
      type?: number;
      value?: string;
      posCounter?: number;
      useDifferent: boolean;
      posType: boolean;
    };
    posDfp1x1: boolean;
    overrideFunctions: PlayerOverrideFunctions;
    overrideExtensions: unknown;
    gpid: unknown;
    ref1: unknown;
    contentPlayerBaseURI: unknown;
    adPlayerBaseURI: unknown;
  };
  abTest: string;
  sp: number;
  customTemplate: unknown;
}

export interface OutstreamPlayer {
  id: unknown;
  _id: {
    $oid: string;
  };
  createdAt: number;
  updatedAt: number;
  iUpdatedAt: number;
  createdBy: string;
  updatedBy: string;
  status: PlayerStatus;
  name: string;
  description: unknown;
  publisherId: string;
  restoreFrom: unknown;
  adsourceOriginId: unknown;
  lastAuditTrailId: unknown;
  production?: PlayerSettings;
  staging?: PlayerSettings;
  configsArray: unknown;
  configs?: PlayerConfig[];
  configsInternal: unknown;
  type: PlayerType.OUTSTREAM;
  usage?: { [key: string]: number };
  isDeployed: boolean;
  isSessionIdEnabled: unknown;
  customTemplate: unknown;
}

export interface InstreamPlayer {
  id?: string;
  _id: {
    $oid: string;
  };
  createdAt: number;
  updatedAt: number;
  iUpdatedAt: number;
  createdBy: string;
  updatedBy: string;
  status: PlayerStatus;
  name: string;
  description?: string;
  publisherId: string;
  restoreFrom: unknown;
  adsourceOriginId?: string;
  lastAuditTrailId?: string;
  production?: PlayerSettings;
  staging?: PlayerSettings;
  configsArray: unknown;
  configs?: PlayerConfig[];
  configsInternal: unknown;
  type: PlayerType.INSTREAM;
  usage?: { [key: string]: number };
  isDeployed: boolean;
  isSessionIdEnabled?: boolean;
  customTemplate?: unknown;
  content: {
    type: number;
    cmsType?: unknown;
    cmsId?: unknown;
    cmsSyndicationId?: unknown;
    contents?: {
      duration: number;
      name: string;
      url: string;
      fallbackUrl?: string;
      clickThroughUrl?: string;
      thumbnailUrl: string;
      type: number;
    }[];
    firstPrerollSlotEnable?: boolean;
    firstPrerollSlot?: unknown;
    commonSlots: unknown[];
    order?: number;
    randomFrom?: number;
    tagContent?: unknown;
    breakingAdsMode?: BreakingAdsMode;
    breakingAds?: number;
  };
}
