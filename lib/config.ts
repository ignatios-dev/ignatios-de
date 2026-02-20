import fs from "fs";
import path from "path";

interface SiteConfig {
  site: {
    title: string;
    description: string;
  };
  home: {
    heading: string;
    emptyMessage: string;
  };
  category: {
    backToOverview: string;
    emptyMessage: string;
    postCountSingular: string;
    postCountPlural: string;
  };
  blog: {
    backButton: string;
  };
  dateFormat: {
    locale: string;
    options: {
      year: string;
      month: string;
      day: string;
    };
  };
  dateFormatShort: {
    locale: string;
    options: {
      year: string;
      month: string;
      day: string;
    };
  };
}

let cachedConfig: SiteConfig | undefined = undefined;

export function getSiteConfig(): SiteConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  const configDir = path.join(process.cwd(), "config");
  const configPath = path.join(configDir, "site.json");

  // Lade Konfiguration
  cachedConfig = JSON.parse(fs.readFileSync(configPath, "utf8")) as SiteConfig;

  return cachedConfig;
}


