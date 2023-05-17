export interface AniviewDataResponse<T> {
    data: T[];
    meta: {
        total: number;
    };
}
export interface AniviewSupplyChannel {
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
export declare enum AniviewPayingMethodType {
    RevShare = 0,
    FixedCpm = 1
}
export interface AniviewPriceException {
    max?: unknown;
    type?: AniviewPayingMethodType;
    enabled?: boolean;
    value?: number;
    cutModel?: number;
}
export interface AniviewAccounting {
    type: AniviewPayingMethodType;
    enabled?: null;
    value: number;
    max?: null;
    cutModel?: null;
}
export interface AniviewAdSource {
    cpm?: number;
    averageCpm?: number;
    cpr: unknown;
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
            custom?: Array<Array<{
                heightOp: string;
                widthOp: string;
                widthValue?: number;
                heightValue?: number;
            }>>;
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
    priceException?: AniviewPriceException;
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
export interface AniviewDomain {
    _id: {
        $oid: string;
    };
    asid: boolean;
    name: string;
    publisherId: string;
    createdAt: number;
    totalHosts: number;
}
export interface AniviewDomainList {
    _id: {
        $oid: string;
    };
    hosts: string[];
    asid: boolean;
    status: number;
    name: string;
    publisherId: string;
    createdAt: number;
    updatedAt: number;
    totalHosts: number;
}
export interface AniviewAdvertiser {
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
    priceException?: AniviewPriceException;
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
export interface AniviewPublisher {
    id: string;
    name: string;
    email?: string;
    description?: string;
    status: number;
    createdAt: number;
    updatedAt: number;
    channelPublisher: unknown;
    seller: {
        id?: string;
        name?: string;
        type?: string;
        domain?: string;
    };
    accounting: {
        type: number;
        fee: number;
        revShare: number;
    };
}
export interface AniviewPublisherConnection {
    id?: null;
    _id: {
        $oid: string;
    };
    createdAt: number;
    updatedAt: number;
    iUpdatedAt?: number;
    createdBy: string;
    updatedBy: string;
    status: number;
    name: string;
    description?: string;
    publisherId: {
        _id: {
            $oid: string;
        };
        name: string;
        status: number;
        type: number;
        createdAt: number;
        updatedAt: number;
        customerId: string;
        email: string;
    };
    restoreFrom?: null;
    adsourceOriginId?: null;
    lastAuditTrailId?: null;
    cpm: number;
    averageCpm?: null;
    cpr?: null;
    fpOptimization?: boolean;
    haCpm?: null;
    flight: {
        isScheduled: boolean;
        startDate: number;
        endDate: number;
        pViewValue: {
            startDate: string;
            endDate: string;
        };
    };
    servingMode: number;
    requestsPerDay: {
        limit: number;
        hasLimit: boolean;
        servingMode: number;
        frequency?: null;
        totalSent: number;
        lastDailyUpdate: number;
        lastDailyInit: number;
        advancedCappingRules?: {
            conditions?: unknown[];
            conditionType?: string;
        };
    };
    optimizationSettings?: {
        hasLimit?: boolean;
        minFr?: number;
        limit?: number;
        timeFrame?: number;
        denyRatio?: number;
    };
    impressionCap: {
        frequency: number;
        servingMode?: null;
        sum: number;
        lastDailyUpdate: number;
        lastMonthlyUpdate: number;
        lastDailyInit: number;
        lastMonthlyInit: number;
        totalCompleted: number;
        dailyCompleted: number;
        monthlyCompleted: number;
        advancedCappingRules?: {
            conditions?: unknown[];
            conditionType?: string;
        };
        propagateToDemand?: boolean;
    };
    targeting?: null;
    source: {
        type: number;
        url?: string;
        clickThroughUrl?: null;
        platform?: null;
        platformId?: null;
        mode?: null;
        videos?: unknown[];
        environment?: null;
        mimes?: null;
        frameworks?: null;
        bidder?: null;
        protocols?: null;
        at?: null;
        test?: null;
        tmax?: null;
        protoVersion?: null;
        placement?: null;
        prebid?: {
            unit?: null;
            platform?: null;
            environment?: null;
            customJSON?: boolean;
            videoContext?: null;
            accountId?: null;
            delDomain?: null;
            zoneId?: number;
            position?: null;
            size_id?: null;
            siteId?: null;
            placementId?: string;
            publisherId?: null;
            placementKey?: null;
            endpointId?: null;
            adSlot?: null;
            skippable?: null;
            skipAfter?: null;
            secure?: null;
            placement?: null;
            domain?: null;
            pageId?: null;
            formatId?: null;
            ckId?: null;
            supplyCode?: null;
            adCode?: null;
            adUnitId?: null;
            videoId?: null;
            channelId?: null;
            appId?: null;
            playbackMethod?: null;
            url?: null;
            seatId?: null;
            targetingUUID?: null;
            adTagId?: null;
            tagId?: null;
            startDelay?: null;
            maxDuration?: null;
            inventoryCode?: null;
            networkId?: null;
            mid?: null;
            key?: null;
            adspaceId?: null;
            host?: null;
            tappxkey?: null;
            endpoint?: null;
            aid?: null;
            slotKey?: null;
            testMode?: null;
            org?: null;
            asi?: null;
            id?: null;
            pid?: null;
            site?: null;
            organizationId?: null;
            adUnitElementId?: null;
            pagetype?: null;
            env?: null;
            category?: null;
            subcategory?: null;
            postBid?: null;
            forceBid?: null;
            pos?: null;
            dcn?: null;
            supplySourceId?: null;
            account?: null;
            location?: null;
            format?: null;
            groupId?: null;
            sectionId?: null;
            linearity?: null;
            owner?: null;
            code?: null;
            uid?: null;
            randomKey?: string;
            invCode?: string;
            member?: string;
        };
        prebidServer?: null;
        platformLink?: {
            buyerCompunknownId?: null;
            playerId?: null;
            adBreakType?: null;
            partnerId?: null;
            category?: null;
            impId?: null;
        };
        rtb?: {
            maxbitrate?: null;
            instl?: null;
            skip?: null;
            dnt?: null;
            rtbGap?: null;
            siteId?: null;
            tagId?: null;
            zoneId?: null;
            accountId?: null;
            sizeId?: null;
            playbackMethod?: null;
            provider?: null;
            providerPubId?: null;
            providerPubId2?: null;
            cookieSyncId?: null;
            tokens?: null;
            groupId?: null;
            custom?: null;
            privateAuction?: null;
            proxyRequest?: boolean;
            deals?: null;
            inventoryId?: null;
            maxDuration?: null;
            ext?: null;
            publisher?: {
                id?: null;
            };
            rwdd?: null;
        };
        cookieSync?: null;
        floorPriceType?: number;
        prioritizeFP?: boolean;
        prioritizeConnFP?: boolean;
        useAppSiteTitle?: boolean;
        adomain?: null;
    };
    provider?: number;
    advertiserId?: null;
    ownerPublisherId?: string;
    useAdvertiserTargeting?: boolean;
    accountingFeeId?: null;
    type: number;
    fr?: null;
    playerSettings: {
        loop?: null;
        optimizedTimeout?: boolean;
        realACpm?: null;
        fp?: number;
        tagTimeout?: number;
        maxRPM?: number;
        gamMaxRPM?: null;
        vpp?: null;
        mips?: number;
        mrqs?: number;
        wsec?: null;
        noSsl?: boolean;
        vi?: number;
        frvi?: null;
        nc?: boolean;
        sdk4?: boolean;
        ops?: null;
        impCountOn?: null;
        vit?: number;
        vibd?: null;
        vitd?: null;
        prvi?: null;
        vpm?: number;
        cycleFreq?: null;
        timeSpan?: null;
        completionRate?: null;
        noCb?: null;
        viewabilityThreshold?: null;
        impwt?: null;
        impwc?: null;
        impwr?: null;
        dealKV?: null;
        dealVi?: null;
        lidr?: null;
        maxParallelBid?: number;
        fply?: null;
        pxsec?: null;
        flidr?: null;
        gl?: null;
    };
    trackers?: null;
    flags?: null;
    ivt: {
        prebid?: {
            active: boolean;
            action?: null;
            level?: null;
            supplier: number;
            sampling?: null;
        };
        postbids?: unknown[];
    };
    environment?: number;
    optData?: null;
    dailyData?: null;
    frequencyCap?: {
        frequency?: number;
        servingMode?: number;
        sum?: number;
        lastDailyUpdate?: null;
        lastMonthlyUpdate?: null;
        lastDailyInit?: null;
        lastMonthlyInit?: null;
        totalCompleted?: null;
        dailyCompleted?: null;
        monthlyCompleted?: null;
        advancedCappingRules?: {
            conditions?: unknown[];
            conditionType?: null;
        };
        propagateToDemand?: boolean;
    };
    tpp?: {
        tppId?: null;
        provider?: number;
        sync?: boolean;
        tppAsid?: null;
        tppRecordId?: string;
        lastSync?: null;
        status?: null;
        errorReason?: null;
    };
    priceException?: AniviewPriceException;
    isOno?: boolean;
    ownerType?: number;
    thirdPartyCost?: {
        type?: null;
        enabled?: null;
        value?: null;
        subtractionType?: null;
    };
    pm?: {
        supply?: number;
        demand?: null;
    };
    bo?: {
        s?: null;
        h?: null;
        l?: null;
        opd?: null;
    };
    ignoreNetworkConnectionFloorPrice?: boolean;
    ignorePartnerConnectionFloorPrice?: boolean;
    blockingAttributes?: null;
    prp?: {
        prs?: unknown[];
        mm?: null;
        cmm?: null;
    };
    fts?: unknown[];
    origin: string;
    originConnectionType?: number;
    originPublisherId: string;
    floorPrice: number;
    accounting: AniviewAccounting;
    dTargeting: {
        domain?: {
            inclusion: boolean;
            list?: unknown[];
            excludeEmptyDomain: boolean;
        };
        geography: {
            inclusion?: boolean;
            list?: string[];
            isCountryView: boolean;
            excludeUnknownGeo?: boolean;
        };
        geographyZip?: {
            inclusion: boolean;
            list?: unknown[];
            isCountryView?: boolean;
            excludeUnknownGeo?: boolean;
        };
        geographyCoor?: {
            inclusion: boolean;
            list?: unknown[];
            isCountryView?: boolean;
            excludeUnknownGeo?: boolean;
        };
        device?: null;
        os?: {
            inclusion: boolean;
            list?: unknown[];
        };
        tag?: null;
        playerSize?: null;
        targetPlatform?: null;
        dow?: null;
        adtxt?: null;
        customRules?: null;
        idfa?: unknown[] | {
            inclusion?: null;
        };
        euConsent?: null;
        ccpa?: null;
        buyeruid?: null;
        euConsentRtb?: null;
        slot?: null;
        placement?: {
            inclusion: boolean;
            excludeUnknown: boolean;
        };
        customTargeting?: null;
        bot?: boolean;
    };
    supplyImpressionCap: {
        frequency?: null;
        servingMode?: null;
        sum?: null;
        lastDailyUpdate?: null;
        lastMonthlyUpdate?: null;
        lastDailyInit?: null;
        lastMonthlyInit?: null;
        totalCompleted?: null;
        dailyCompleted?: null;
        monthlyCompleted?: null;
        advancedCappingRules?: null;
        propagateToDemand?: null;
    };
    dTrackers?: unknown[];
    supplyRequestsPerDay: {
        limit?: null;
        hasLimit?: null;
        servingMode?: null;
        frequency?: null;
        totalSent?: null;
        lastDailyUpdate?: null;
        lastDailyInit?: null;
        advancedCappingRules?: null;
    };
}
export declare enum DIMENSION {
    PUBLISHER_CHANNEL_ID = "pcid",
    PUBLISHER_CHANNEL_NAME = "pcidName",
    CHANNEL_ID = "ncid",
    CHANNEL_NAME = "ncidName",
    CHANNEL_CREATION_DATE = "ncidCreatedAt",
    CHANNEL_STATUS = "ncidStatus",
    AD_SOURCE_ID = "nasid",
    AD_SOURCE_NAME = "nasidName",
    AD_SOURCE_PROVIDER = "nasidProvider",
    TPP_ENTITY_ID = "tppAsid",
    AD_SOURCE_STATUS = "nasidStatus",
    AD_SOURCE_CREATION_DATE = "nasidCreatedAt",
    COUNTRY = "coun",
    DAILY = "daily"
}
export declare enum METRIC {
    INVENTORY = "inventory",
    REQUEST = "request",
    REVENUE = "revenue",
    CPM = "ncpm",
    VIEWABILITY = "avgViewability",
    PLAYER_LOADED = "playerLoaded",
    STUDIO_NO_POS = "sNoPos",
    TOTAL_COST = "totalCost",
    IMPRESSION = "impression"
}
export declare enum FORMAT {
    JSON = "json",
    CSV = "csv"
}
export interface RequestReportParameters {
    startDate: number;
    endDate: number;
    dimensions: DIMENSION[];
    metrics: METRIC[];
    format: FORMAT;
    query?: unknown;
}
export interface CreateDomainListAniviewResponse {
    _id: {
        $oid: string;
    };
    hosts: string[];
    asid: boolean;
    status: number;
    name: string;
    publisherId: string;
    createdAt: number;
    updatedAt: number;
    totalHosts: number;
}
export interface AniviewPublisherChannel {
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
//# sourceMappingURL=aniview.types.d.ts.map