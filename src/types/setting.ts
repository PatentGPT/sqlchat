export type Locale = "en" | "zh";

export type Theme = "light" | "dark" | "system";

export interface OpenAIApiConfig {
  key: string;
  endpoint: string;
}

export interface Setting {
  locale: Locale;
  theme: Theme;
  openAIApiConfig: OpenAIApiConfig;
}
