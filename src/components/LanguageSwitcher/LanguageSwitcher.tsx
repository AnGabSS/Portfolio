"use client";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { getUserLocale } from "@/services/locale";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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

  useEffect(() => {
    handleLanguageChange("en-US");
  }, []);

  return (
    <Select onValueChange={handleLanguageChange} defaultValue="en-US">
      <SelectTrigger className="w-[180px] bg-black opacity-50 p-2 rounded-xl border-black">
        <SelectValue
          placeholder={`${renderLocaleWithFlag(locale)} ${t(locale)}`}
        />
      </SelectTrigger>
      <SelectContent className="bg-black opacity-50 p-2 rounded-xl border-black">
        {Object.values(LOCALES).map((loc) => (
          <SelectItem key={loc} value={loc}>
            {`${renderLocaleWithFlag(loc)} ${t(loc)}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
