export interface AdvancedStyleConfig {
  transparentWidget: boolean;
}

export interface StyleConfig {
  neutralContent: string;
  baseContent: string;
  base100: string;
  base200: string;
  base300: string;
  error: string;
  warning: string;
  success: string;
  primary: string;
  secondary: string;
  secondaryContent: string;
  neutral: string;
  roundedBtn: string;
  roundedCornerBtn: string;
  roundedBox: string;
  roundedDropDown: string;
  displayDivider?: boolean; // Optional property for showing divider
  advanced?: AdvancedStyleConfig; // Optional advanced styling configuration

  // New properties from theme
  "content-100": string;
  "content-200": string;
  "content-300": string;
  "content-400": string;
  "content-500": string;
  "content-600": string;
  "content-700": string;
  "content-800": string;
  "content-900": string;
  "accent-300": string;
  "accent-400": string;
  "accent-500": string;
  "accent-700": string;
  "status-positive": string;
  "status-negative": string;
  "status-warning": string;
  "highlight-700": string;
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
  companyName: string;
  // style: StyleConfig;
  // slippage: number;
  infiniteApproval: boolean;
  enableExpress: boolean;
  apiUrl: string;
  comingSoonChainIds: number[];
  titles: TitlesConfig;
  priceImpactWarnings: PriceImpactWarningsConfig;
  environment: string;
  showOnRampLink: boolean;
  defaultTokens: string[];
  styleType: string;
}
