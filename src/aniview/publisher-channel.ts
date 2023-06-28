export enum PublisherChannelStatus {
  ACTIVE = 1,
  ARCHIVED = 2,
}

export interface PublisherChannel {
  instanceId: string;
  optimized: boolean;
  optModel: unknown;
  optModelV: unknown;
  accounting?: {
    type: number;
    enabled: unknown;
    value: number;
    max: unknown;
    cutModel: unknown;
  };
  revShare?: number;
  ivt?: {
    prebid?: {
      active: boolean;
      action: unknown;
      level: unknown;
      supplier: number;
      sampling: unknown;
    };
    postbids: unknown[];
  };
  fp?: number;
  sid?: string;
  nlasid: unknown;
  adSources: {
    id: string;
    priority: number;
  }[];
  trackers?: unknown[];
  impcoc: unknown;
  environment?: number;
  adTxt: boolean;
  ovrdPbSchain?: boolean;
  ovrdParSchain?: boolean;
  syncChannel: unknown;
  type?: number;
  optData?: {
    fr: number;
    request: number;
    opportunity: number;
    impression: number;
    inventory: number;
  };
  publisher?: string;
  playerSettings: unknown;
  maxrun: number;
  maximp: number;
  interval: number;
  custom: unknown;
  minRpm?: number;
  limitAdvertisers?: boolean;
  isSessionIdEnabled: unknown;
  limitAdvertisersList?: unknown[];
  adstxt: unknown;
  timeoutMs: unknown;
  enableMbq?: boolean;
  mbq?: number;
  prp?: {
    prs: unknown[];
    mm?: number;
    cmm?: number;
  };
  status: PublisherChannelStatus;
  name: string;
  description: string;
  publisherId: string;
  restoreFrom?: string;
  creativeType: number;
  adsourceOriginId: unknown;
  lastAuditTrailId?: string;
  id: unknown;
  _id: {
    $oid: string;
  };
  createdAt: number;
  updatedAt: number;
  iUpdatedAt: number;
  createdBy: string;
  updatedBy: string;
}
