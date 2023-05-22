export interface SupplyChannel {
    instanceId: string;
    optimized: boolean;
    optModel: unknown;
    optModelV: unknown;
    accounting?: {
        type: number;
        enabled: unknown;
        value?: number;
        max: unknown;
        cutModel: unknown;
    };
    revShare: number;
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
    fp: number;
    sid: unknown;
    nlasid: unknown;
    adSources: Array<{
        id: string;
        priority: number;
    }>;
    trackers?: Array<unknown>;
    impcoc: unknown;
    environment?: number;
    adTxt: boolean;
    ovrdPbSchain: boolean;
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
    publisher: unknown;
    playerSettings: unknown;
    maxrun: unknown;
    maximp: unknown;
    interval: unknown;
    custom: unknown;
    minRpm: number;
    limitAdvertisers: boolean;
    limitAdvertisersList?: Array<unknown>;
    adstxt: unknown;
    timeoutMs: unknown;
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
}
