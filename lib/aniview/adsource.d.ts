import { PriceException } from "./common";

export interface AdSource {
  cpm?: number;
  averageCpm?: number;
  cpr: any;
  fpOptimization?: boolean;
  haCpm: unknown;
  flight?: {
    isScheduled: boolean;
    startDate?: number;
    endDate?: number;
    pViewValue?: {
      startDate: string;
      endDate: string;
    };
  };
  servingMode?: number;
  requestsPerDay: {
    limit?: number;
    hasLimit?: boolean;
    servingMode?: number;
    frequency: unknown;
    totalSent?: number;
    lastDailyUpdate?: number;
    lastDailyInit?: number;
    advancedCappingRules?: {
      conditions: Array<unknown>;
      conditionType: string;
    };
  };
  optimizationSettings?: {
    hasLimit?: boolean;
    minFr: number;
    limit: number;
    timeFrame?: number;
    denyRatio?: number;
  };
  impressionCap: {
    frequency?: number;
    servingMode: unknown;
    sum: unknown;
    lastDailyUpdate?: number;
    lastMonthlyUpdate?: number;
    lastDailyInit?: number;
    lastMonthlyInit?: number;
    totalCompleted?: number;
    dailyCompleted?: number;
    monthlyCompleted?: number;
    advancedCappingRules?: {
      conditions: Array<unknown>;
      conditionType: string;
    };
    propagateToDemand?: boolean;
  };
  targeting?: {
    domain?: {
      list: Array<string>;
      excludeEmptyDomain: boolean;
      inclusion: boolean;
    };
    geography: {
      isCountryView: boolean;
      excludeUnknownGeo?: boolean;
      inclusion?: boolean;
      list: Array<string>;
    };
    geographyZip?: {
      isCountryView?: boolean;
      excludeUnknownGeo?: boolean;
      inclusion: boolean;
      list: Array<unknown>;
    };
    geographyCoor?: {
      isCountryView?: boolean;
      excludeUnknownGeo?: boolean;
      inclusion: boolean;
      list: Array<unknown>;
    };
    device: unknown;
    os?: {
      inclusion: boolean;
      list: Array<string>;
    };
    tag: unknown;
    playerSize?: {
      custom?: Array<
        Array<{
          heightOp: string;
          widthOp: string;
          widthValue?: number;
          heightValue?: number;
        }>
      >;
      inclusion: boolean;
      list: Array<string>;
    };
    targetPlatform: unknown;
    dow: unknown;
    adtxt: unknown;
    customRules: unknown;
    idfa?: Array<unknown>;
    euConsent?: {
      inclusion: boolean;
    };
    ccpa: unknown;
    buyeruid: unknown;
    euConsentRtb: unknown;
    slot: unknown;
    placement?: {
      inclusion: boolean;
      excludeUnknown: boolean;
    };
    customTargeting: unknown;
  };
  source?: {
    type: number;
    url: string;
    clickThroughUrl: unknown;
    platform?: number;
    platformId: unknown;
    mode: unknown;
    videos?: Array<{
      type: number;
      url: string;
      id: unknown;
      name: string;
      clickThroughUrl: string;
      viewability: number;
      duration: number;
      width: unknown;
      height: unknown;
      bitrate: unknown;
    }>;
    environment?: number;
    mimes?: Array<string>;
    frameworks?: Array<number>;
    bidder: unknown;
    protocols?: Array<number>;
    at?: number;
    test?: number;
    tmax?: number;
    protoVersion?: string;
    placement?: number;
    prebid?: {
      unit?: number;
      platform?: number;
      environment?: number;
      customJSON?: boolean;
      videoContext?: string;
      accountId?: number;
      delDomain?: string;
      zoneId: unknown;
      position: unknown;
      size_id?: number;
      siteId: unknown;
      placementId?: string;
      publisherId: unknown;
      placementKey: unknown;
      endpointId: unknown;
      adSlot?: string;
      skippable: unknown;
      skipAfter: unknown;
      secure: unknown;
      placement?: number;
      domain: unknown;
      pageId?: number;
      formatId?: number;
      ckId: unknown;
      supplyCode: unknown;
      adCode: unknown;
      adUnitId: unknown;
      videoId: unknown;
      channelId: unknown;
      appId: unknown;
      playbackMethod?: number;
      url: unknown;
      seatId?: string;
      targetingUUID: unknown;
      adTagId: unknown;
      tagId?: string;
      startDelay?: number;
      maxDuration?: number;
      inventoryCode: unknown;
      networkId: unknown;
      mid: unknown;
      key: unknown;
      adspaceId: unknown;
      host: unknown;
      tappxkey: unknown;
      endpoint: unknown;
      aid: unknown;
      slotKey: unknown;
      testMode: unknown;
      org: unknown;
      asi: unknown;
      id: unknown;
      pid: unknown;
      site: unknown;
      organizationId: unknown;
      adUnitElementId: unknown;
      pagetype: unknown;
      env: unknown;
      category: unknown;
      subcategory: unknown;
      postBid: unknown;
      forceBid: unknown;
      pos: unknown;
      dcn: unknown;
      supplySourceId: unknown;
      account: unknown;
      location: unknown;
      format: unknown;
    };
    prebidServer: unknown;
    platformLink?: {
      buyerCompunknownId: unknown;
      playerId: unknown;
      adBreakType: unknown;
      partnerId: unknown;
      category: unknown;
      impId: unknown;
    };
    rtb?: {
      maxbitrate?: number;
      instl?: number;
      skip?: number;
      dnt?: number;
      rtbGap: unknown;
      siteId?: string;
      tagId: unknown;
      zoneId: unknown;
      accountId: unknown;
      sizeId: unknown;
      playbackMethod?: number;
      provider?: number;
      providerPubId?: string;
      providerPubId2: unknown;
      cookieSyncId: unknown;
      tokens: unknown;
      groupId: unknown;
      custom: unknown;
      privateAuction?: number;
      proxyRequest?: boolean;
      deals: unknown;
      inventoryId: unknown;
      maxDuration?: number;
      ext?: {
        bidder: unknown;
      };
      publisher?: {
        id?: string;
      };
    };
    cookieSync: unknown;
    floorPriceType?: number;
    prioritizeFP?: boolean;
    useAppSiteTitle?: boolean;
  };
  provider?: number;
  advertiserId?: string;
  ownerPublisherId: unknown;
  useAdvertiserTargeting?: boolean;
  accountingFeeId: unknown;
  type: number;
  fr?: number;
  playerSettings?: {
    loop: unknown;
    optimizedTimeout?: boolean;
    realACpm: unknown;
    fp?: number;
    tagTimeout?: number;
    maxRPM?: number;
    vpp: unknown;
    mips?: number;
    mrqs?: number;
    wsec: unknown;
    noSsl?: boolean;
    vi?: number;
    frvi: unknown;
    nc?: boolean;
    sdk4?: boolean;
    ops: unknown;
    impCountOn: unknown;
    vit?: number;
    vibd: unknown;
    vitd: unknown;
    prvi: unknown;
    vpm?: number;
    cycleFreq: unknown;
    timeSpan: unknown;
    completionRate: unknown;
    noCb: unknown;
    viewabilityThreshold: unknown;
    impwt: unknown;
    impwc: unknown;
    impwr: unknown;
  };
  trackers: Array<unknown>;
  flags: unknown;
  ivt: {
    prebid?: {
      active: boolean;
      action: unknown;
      level: unknown;
      supplier: number;
      sampling: unknown;
    };
    postbids: Array<unknown>;
  };
  environment?: number;
  optData: unknown;
  dailyData?: {
    fr: number;
    requests: number;
    impressions: number;
  };
  frequencyCap?: {
    frequency: number;
    servingMode: number;
    sum: number;
    lastDailyUpdate: unknown;
    lastMonthlyUpdate: unknown;
    lastDailyInit: unknown;
    lastMonthlyInit: unknown;
    totalCompleted: unknown;
    dailyCompleted: unknown;
    monthlyCompleted: unknown;
    advancedCappingRules?: {
      conditions: Array<unknown>;
      conditionType: unknown;
    };
    propagateToDemand?: boolean;
  };
  tpp?: {
    tppId?: number;
    provider?: number;
    sync?: boolean;
    tppAsid?: string;
    tppRecordId?: string;
  };
  priceException?: PriceException;
  isOno?: boolean;
  ownerType?: number;
  thirdPartyCost?: {
    type?: number;
    enabled: unknown;
    value?: number;
    subtractionType?: number;
  };
  pm?: {
    supply: unknown;
    demand: unknown;
  };
  ignoreNetworkConnectionFloorPrice?: boolean;
  ignorePartnerConnectionFloorPrice?: boolean;
  blockingAttributes?: {
    categories: Array<unknown>;
    advertisers: Array<unknown>;
    applications: Array<unknown>;
  };
  status: number;
  name: string;
  description: unknown;
  publisherId: string;
  restoreFrom: unknown;
  adsourceOriginId: unknown;
  lastAuditTrailId: unknown;
  id: unknown;
  _id: {
    $oid: string;
  };
  createdAt: number;
  updatedAt: number;
  iUpdatedAt: number;
  createdBy: string;
  updatedBy: string;
  supplyFrequencyCap?: {
    frequency: number;
    servingMode: number;
    sum: number;
    lastDailyUpdate: unknown;
    lastMonthlyUpdate: unknown;
    lastDailyInit: unknown;
    lastMonthlyInit: unknown;
    totalCompleted: unknown;
    dailyCompleted: unknown;
    monthlyCompleted: unknown;
    advancedCappingRules: {
      conditions: Array<unknown>;
      conditionType: unknown;
    };
    propagateToDemand: boolean;
  };
  supplyFloorPrice: unknown;
  origin: unknown;
  originConnectionType?: number;
  originPublisherId?: string;
  floorPrice: unknown;
  accounting?: {
    type: number;
    enabled: unknown;
    value: number;
    max: unknown;
    cutModel: unknown;
  };
  dTargeting: unknown;
  supplyImpressionCap?: {
    frequency: number;
    servingMode: number;
    sum: number;
    lastDailyUpdate: number;
    lastMonthlyUpdate: number;
    lastDailyInit: unknown;
    lastMonthlyInit: unknown;
    totalCompleted: unknown;
    dailyCompleted: unknown;
    monthlyCompleted: unknown;
    advancedCappingRules: unknown;
    propagateToDemand: unknown;
  };
  dTrackers: unknown;
  supplyRequestsPerDay?: {
    limit: number;
    hasLimit: boolean;
    servingMode: unknown;
    frequency: unknown;
    totalSent: number;
    lastDailyUpdate: unknown;
    lastDailyInit: unknown;
    advancedCappingRules: {
      conditions: Array<unknown>;
      conditionType: string;
    };
  };
}
