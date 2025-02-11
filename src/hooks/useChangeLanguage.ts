"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useTransition } from "react";

export function useChangeLanguage() {
  const [isPending, startTransition] = useTransition();

  function changeLanguage(language: "en-US" | "pt-BR") {
    const locale = language as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return { changeLanguage, isPending };
}
