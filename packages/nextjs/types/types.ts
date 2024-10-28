export interface BorderRadiusConfig {
  "button-lg-primary": string;
  "button-lg-secondary": string;
  "button-lg-tertiary": string;
  "button-md-primary": string;
  "button-md-secondary": string;
  "button-md-tertiary": string;
  container: string;
  input: string;
  "menu-sm": string;
  "menu-lg": string;
  modal: string;
}

export interface FontConfig {
  caption: string;
  "body-small": string;
  "body-medium": string;
  "body-large": string;
  "heading-small": string;
  "heading-medium": string;
  "heading-large": string;
}

export interface FontWeightConfig {
  caption: string;
  "body-small": string;
  "body-medium": string;
  "body-large": string;
  "heading-small": string;
  "heading-medium": string;
  "heading-large": string;
}

export interface FontFamilyConfig {
  "squid-main": string;
}

export interface BoxShadowConfig {
  container: string;
}

export interface ColorConfig {
  "grey-100": string;
  "grey-200": string;
  "grey-300": string;
  "grey-400": string;
  "grey-500": string;
  "grey-600": string;
  "grey-700": string;
  "grey-800": string;
  "grey-900": string;
  "royal-300": string;
  "royal-400": string;
  "royal-500": string;
  "royal-600": string;
  "royal-700": string;
  "status-positive": string;
  "status-negative": string;
  "status-partial": string;
  "highlight-700": string;
  "animation-bg": string;
  "animation-text": string;
  "button-lg-primary-bg": string;
  "button-lg-primary-text": string;
  "button-lg-secondary-bg": string;
  "button-lg-secondary-text": string;
  "button-lg-tertiary-bg": string;
  "button-lg-tertiary-text": string;
  "button-md-primary-bg": string;
  "button-md-primary-text": string;
  "button-md-secondary-bg": string;
  "button-md-secondary-text": string;
  "button-md-tertiary-bg": string;
  "button-md-tertiary-text": string;
  "input-bg": string;
  "input-placeholder": string;
  "input-text": string;
  "input-selection": string;
  "menu-bg": string;
  "menu-text": string;
  "menu-backdrop": string;
  "modal-backdrop": string;
}

export interface ThemeConfig {
  borderRadius: BorderRadiusConfig;
  fontSize: FontConfig;
  fontWeight: FontWeightConfig;
  fontFamily: FontFamilyConfig;
  boxShadow: BoxShadowConfig;
  color: ColorConfig;
}

export interface InitialAssetConfig {
  address: string;
  chainId: string;
}

export interface InitialAssetsConfig {
  from: InitialAssetConfig;
}

export interface TitlesConfig {
  swap: string;
  settings: string;
  wallets: string;
  tokens: string;
  chains: string;
  history: string;
  transaction: string;
  allTokens: string;
  destination: string;
  depositAddress: string;
  seimetamask: string;
}

export interface PriceImpactWarningsConfig {
  warning: number;
  critical: number;
}

export interface AppConfig {
  integratorId: string;
  theme: ThemeConfig;
  themeType: "dark" | "light";
  apiUrl: string;
  priceImpactWarnings: PriceImpactWarningsConfig;
  initialAssets: InitialAssetsConfig;
  companyName?: string;
  infiniteApproval?: boolean;
  enableExpress?: boolean;
  comingSoonChainIds?: number[];
  titles?: TitlesConfig;
  environment?: string;
  showOnRampLink?: boolean;
  defaultTokens?: string[];
}
