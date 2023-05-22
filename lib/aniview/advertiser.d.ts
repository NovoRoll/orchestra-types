import { PriceException } from "./common";
export interface Advertiser {
    email?: string;
    accountingFeeId?: string;
    trackers?: Array<{
        e: string;
        t: number;
        url: string;
        offset: unknown;
        tsp: number;
    }>;
    frequencyCap?: {
        frequency: number;
        servingMode: unknown;
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
        propagateToDemand?: boolean;
    };
    adstxt?: {
        advertisers: unknown;
        fileURL: unknown;
        tabName: unknown;
        fileMapping?: {
            approved: {
                value: string;
                keyMap: Array<unknown>;
            };
            domain: {
                value: string;
                keyMap: Array<unknown>;
            };
        };
        lines?: Array<unknown>;
    };
    hasLimit?: boolean;
    limit: unknown;
    limitAllChannels?: boolean;
    targeting?: {
        domain?: {
            list: Array<string>;
            excludeEmptyDomain: boolean;
            inclusion: boolean;
        };
        geography: {
            isCountryView: boolean;
            excludeUnknownGeo: boolean;
            inclusion: boolean;
            list: Array<string>;
        };
        geographyZip: {
            isCountryView: boolean;
            excludeUnknownGeo: boolean;
            inclusion: boolean;
            list: Array<unknown>;
        };
        geographyCoor: {
            isCountryView: boolean;
            excludeUnknownGeo: boolean;
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
            custom: Array<Array<{
                heightOp: string;
                widthOp: string;
                widthValue: number;
                heightValue: number;
            }>>;
            inclusion: boolean;
            list: Array<string>;
        };
        targetPlatform: unknown;
        dow?: {
            list: Array<{
                day: number;
                startHour: number;
                endHour: number;
            }>;
            inclusion: boolean;
        };
        adtxt: unknown;
        customRules: unknown;
        idfa: Array<unknown>;
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
        bot?: boolean;
    };
    priceException?: PriceException;
    playerSettings?: {
        tagTimeout: unknown;
        optimizedTimeout: unknown;
        nc: boolean;
        maxRPM: unknown;
        vi?: number;
    };
    thirdPartyCost?: {
        type: number;
        enabled?: boolean;
        value: number;
        subtractionType: number;
    };
    macro: unknown;
    ownerType?: number;
    supplyChain?: {
        enabled: boolean;
        asi?: string;
        sid?: string;
    };
    bo?: {
        s: unknown;
        h: unknown;
        l: unknown;
        opd: unknown;
    };
    status: number;
    name?: string;
    description?: string;
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
    iUpdatedAt?: number;
    createdBy: string;
    updatedBy: string;
    senderInstance?: {
        _id: {
            $oid: string;
        };
        name: string;
        status: number;
        type: number;
        createdAt: number;
        updatedAt: number;
        customerId: string;
        description: unknown;
        email: string;
    };
    meField?: string;
    senderInstanceStatus?: number;
    senderRelationship?: number;
    receiverRelationship: unknown;
    receiverInstance?: {
        _id: {
            $oid: string;
        };
        name: string;
        status: number;
        type: number;
        createdAt: number;
        updatedAt: number;
        customerId: string;
        email?: string;
        description: unknown;
    };
    receiverInstanceStatus?: number;
    myInstance?: {
        _id: {
            $oid: string;
        };
        name: string;
        status: number;
        type: number;
        createdAt: number;
        updatedAt: number;
        customerId: string;
        description: unknown;
        email: string;
    };
    myStatus?: number;
    myRelationship: unknown;
    affiliateInstance?: {
        _id: {
            $oid: string;
        };
        name: string;
        status: number;
        type: number;
        createdAt: number;
        updatedAt: number;
        customerId: string;
        email?: string;
        description: unknown;
    };
    affiliateStatus?: number;
    myAdstxt: unknown;
}
