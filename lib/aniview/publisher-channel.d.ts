export interface PublisherChannel {
  instanceId: string;
  optimized: unknown;
  optModel: unknown;
  optModelV: unknown;
  accounting: unknown;
  revShare: unknown;
  ivt: unknown;
  fp: unknown;
  sid: unknown;
  nlasid: unknown;
  adSources: [
    {
      id: string;
      priority: number;
    }
  ];
  trackers: unknown;
  impcoc: unknown;
  environment: unknown;
  adTxt: unknown;
  ovrdPbSchain: unknown;
  ovrdParSchain: unknown;
  syncChannel: unknown;
  type: number;
  optData: unknown;
  publisher: unknown;
  playerSettings: unknown;
  maxrun: number;
  maximp: number;
  interval: number;
  custom: unknown;
  minRpm: number;
  limitAdvertisers: unknown;
  limitAdvertisersList: unknown;
  adstxt: unknown;
  timeoutMs: unknown;
  enableMbq: boolean;
  mbq: unknown;
  prp: unknown;
  status: number;
  name: string;
  description: string;
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
}
