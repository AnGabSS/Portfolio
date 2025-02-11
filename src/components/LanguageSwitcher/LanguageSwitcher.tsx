"use client";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { getUserLocale } from "@/services/locale";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const LOCALES = {
  EN: "en-US",
  PT: "pt-BR",
} as const;

type Locale = (typeof LOCALES)[keyof typeof LOCALES];

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useState<Locale>("en-US");
  const t = useTranslations("languageSwitcher");
  const { changeLanguage } = useChangeLanguage();

  useEffect(() => {
    const fetchLocale = async () => {
      const userLocale = await getUserLocale();
      if (userLocale in LOCALES) {
        setLocale(userLocale as Locale);
      }
    };
    fetchLocale();
  }, []);

  const renderLocaleWithFlag = (locale: Locale): string => {
    const flags: Record<Locale, string> = {
      [LOCALES.EN]: "🇬🇧",
      [LOCALES.PT]: "🇧🇷",
    };
    return flags[locale] || "";
  };

  const handleLanguageChange = (newLocale: Locale): void => {
    changeLanguage(newLocale);
    setLocale(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {`${renderLocaleWithFlag(locale)} ${t(locale)}`}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.values(LOCALES).map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => handleLanguageChange(loc)}>
            {`${renderLocaleWithFlag(loc)} ${t(loc)}`}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
