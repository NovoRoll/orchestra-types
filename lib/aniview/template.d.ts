import { BreakingAdsMode, ResizingMethod } from "./common";
export interface Template<T extends TemplateContent> {
  id: unknown;
  _id: {
    $oid: string;
  };
  createdAt: number;
  updatedAt: number;
  iUpdatedAt: number;
  createdBy: string;
  updatedBy: string;
  status: number;
  name: string;
  description: string;
  publisherId: string;
  restoreFrom: unknown;
  adsourceOriginId: unknown;
  lastAuditTrailId: unknown;
  type: number;
  playerVersion: unknown;
  production: T;
  staging: T;
  isDeployed: boolean;
}
export type TemplateContent =
  | OutstreamTemplateContent
  | InstreamTemplateContent;
export interface InstreamTemplateContent {
  performance: {
    loop?: boolean;
    autoPlay?: boolean;
    startVolume?: number;
    playOnView?: boolean;
    playOnViewPerc?: number;
    autoSkipEnabled?: boolean;
    autoSkip: {
      time?: number;
      timeout?: number;
    };
    startModeEnabled?: boolean;
    startMode?: {
      playOnView?: boolean;
      hidden?: boolean;
      openAnim?: boolean;
      showPlayer?: boolean;
      noFloat?: boolean;
      playButtonDelay?: number;
    };
    autoContinue?: boolean;
  };
  appearance: {
    floating?: {
      position?: number;
      right?: number;
      bottom?: number;
      top?: number;
      left?: number;
      size?: number;
      closeButton?: boolean;
      floatOnImp?: boolean;
      floatOnBottom?: boolean;
      floatOnView?: boolean;
      fullWidth?: {
        textSize?: number;
        textFont?: string;
        textColor?: string;
        backgroundColor?: string;
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      };
      resizingMethod?: ResizingMethod;
      width?: number;
      height?: number;
    };
    sticky?: {
      position?: number;
      right?: number;
      bottom?: number;
      top?: number;
      left?: number;
      fullWidth?: {
        textSize?: number;
        textFont?: string;
        textColor?: string;
        backgroundColor?: string;
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      };
    };
    playerMode?: number;
    captionBgColor?: string;
    adLabel: {
      text?: string;
    };
    maxzindex?: number;
    openAnim?: boolean;
    showPlayer?: boolean;
    customcss?: string;
    width?: number;
    height?: number;
    maxWidth?: number;
    minHeight?: number;
    showPlaylistGallery?: boolean;
    infinite?: boolean;
    locateBelow?: boolean;
    showEntryTitles?: boolean;
    showPlaylist?: boolean;
    showPlaylistButton?: boolean;
    playlistPlacement?: number;
    showPlaylistItemTitle?: boolean;
  };
  controls: {
    showVolumeControl?: boolean;
    volumeControlVertical?: boolean;
    showDuration?: boolean;
    moveXSec?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    showBigPrevNext?: boolean;
    showBigPrevNextOnPause?: boolean;
    showBigPlay?: boolean;
    showPauseButton?: boolean;
    showBigPlayOnPause?: boolean;
    showReplay?: boolean;
    soundButtonPosition?: number;
    durationPosition?: number;
    xSec?: number;
    showTitle?: boolean;
    titlePosition?: number;
    showFullScreen?: boolean;
    soundButton?: boolean;
    timelineMode?: string;
    adsControlPositioning?: string;
    pauseButton?: boolean;
    skip?: boolean;
    skipTimer?: number;
    skipText?: string;
    closeButton?: boolean;
    closeButtonStyle?: {
      outside?: boolean;
      position?: number;
      left?: number;
      right?: number;
      overlayMargin?: number;
    };
  };
  logo: {
    logo?: boolean;
    customLogo?: {
      customLogoEnabled?: boolean;
      link?: string;
      clickthrough?: string;
      text?: string;
      width?: number;
      height?: number;
      top?: number;
    };
    hideLogoOnAd?: boolean;
  };
  advanced: {
    playerDelay?: number;
    waitForConsent?: boolean;
    spinner?: number;
    hideGuiTimeout?: number;
    syncVolume?: boolean;
    noPauseOnClickthrough?: boolean;
    themeColor?: unknown;
  };
  extensions: {
    passbackpriority?: boolean;
    noPassbackOnImp?: boolean;
    passbackUrl?: {
      passbackUrlEnabled?: boolean;
      nofloat?: boolean;
      width?: number;
      height?: number;
      url?: string;
      enableScript?: boolean;
      script?: string;
      color?: string;
      fullHtml?: string;
    };
    noXPassback?: boolean;
    preloader?: {
      type: number;
    };
  };
  content: {
    type: number;
    cmsType: string;
    cmsId: string;
    cmsSyndicationId: unknown;
    contents: unknown[];
    firstPrerollSlotEnable?: boolean;
    firstPrerollSlot: unknown;
    commonSlots: unknown;
    order?: number;
    randomFrom?: number;
    tagContent: unknown;
    breakingAdsMode?: BreakingAdsMode;
    breakingAds?: number;
  };
  mobile: {
    showBigPlay?: boolean;
    showBigPlayOnPause?: boolean;
    showBigPrevNext?: boolean;
    showPauseButton?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    showFullScreen?: boolean;
    hideGuiTimeout?: boolean;
  };
  adConfig: {
    soundButton?: boolean;
    pauseButton?: boolean;
    startAdOnView?: boolean;
    startAdOnViewPerc?: number;
    logo?: boolean;
    skip?: boolean;
    skipText?: string;
    skipTimer?: number;
    errorLimit?: number;
    vastRetry?: number;
    waterfallCallFrequency?: number;
    reqOnView?: boolean;
    tabInView?: boolean;
    reqTabOnView?: boolean;
    timelineMode?: string;
    adsControlPositioning?: string;
    startmidroll?: number;
  };
}
export interface OutstreamTemplateContent {
  performance: {
    loop?: boolean;
    autoPlay?: boolean;
    errorLimit?: number;
    maxImp?: number;
    maxRun?: number;
    midrolltime?: number;
    vastRetry?: number;
    startOnView?: boolean;
    pauseOnUnseen?: boolean;
    pauseOnBlur?: boolean;
    reqOnView?: boolean;
    autoContinue?: boolean;
    tabInView?: boolean;
    playOnView?: boolean;
    playOnViewPerc?: number;
  };
  appearance: {
    floating?: {
      position?: number;
      right?: number;
      bottom?: number;
      top?: number;
      left?: number;
      size?: number;
      closeButton?: boolean;
      floatOnImp?: boolean;
      floatOnBottom?: boolean;
      floatOnView?: boolean;
      fullWidth?: {
        textSize?: number;
        textFont?: string;
        textColor?: string;
        backgroundColor?: string;
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      };
      resizingMethod?: ResizingMethod;
      width?: number;
      height?: number;
    };
    sticky?: {
      position?: number;
      right?: number;
      bottom?: number;
      top?: number;
      left?: number;
      fullWidth?: {
        textSize?: number;
        textFont?: string;
        textColor?: string;
        backgroundColor?: string;
        top?: number;
        bottom?: number;
        right?: number;
        left?: number;
      };
    };
    playerMode?: number;
    captionBgColor?: string;
    adLabel: {
      text?: string;
    };
    maxzindex?: number;
    openAnim?: boolean;
    showPlayer?: boolean;
    customcss?: string;
    width?: number;
    height?: number;
    maxWidth?: number;
    minHeight?: number;
  };
  controls: {
    timelineMode?: string;
    adsControlPositioning?: string;
    pauseButton?: boolean;
    skip?: boolean;
    skipTimer?: number;
    skipText?: string;
    closeButton?: boolean;
    closeButtonStyle: {
      outside?: boolean;
      position?: number;
      left?: number;
      right?: number;
      overlayMargin?: number;
    };
  };
  logo: {
    logo?: boolean;
    customLogo?: {
      customLogoEnabled?: boolean;
      link?: string;
      clickthrough?: string;
      text?: string;
      width?: number;
      height?: number;
      top?: number;
    };
    hideLogoOnAd?: boolean;
  };
  advanced: {
    playerDelay?: number;
    waitForConsent?: boolean;
    midrolldelay?: number;
    startaddelay?: number;
    startdelay?: number;
    startmidroll?: number;
    autoPlayContent?: boolean;
    closeevent?: boolean;
    showpreloader?: boolean;
    showPos?: boolean;
    hideInitPreloader?: boolean;
    lastFrame?: boolean;
    nohideIframe?: boolean;
    inViewRatio?: number;
  };
  extensions: {
    passbackpriority?: boolean;
    noPassbackOnImp?: boolean;
    passbackUrl?: {
      passbackUrlEnabled?: boolean;
      nofloat?: boolean;
      width?: number;
      height?: number;
      url?: string;
      enableScript?: boolean;
      script?: string;
      color?: string;
      fullHtml?: string;
    };
    noXPassback?: boolean;
    preloader?: {
      type: number;
    };
  };
}
