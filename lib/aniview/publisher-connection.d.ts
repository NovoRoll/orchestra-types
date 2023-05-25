import { Accounting, PriceException } from "./common";
export interface PublisherConnection {
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
    priceException?: PriceException;
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
    accounting: Accounting;
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
