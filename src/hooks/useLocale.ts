// /src/utils/useLocale.js
import enMessages from "../messages/en-US.json";
import ptMessages from "../messages/pt-BR.json";

export function useLocale(locale: string) {
  let messages = {};

  if (locale === "pt") {
    messages = ptMessages;
  } else {
    messages = enMessages;
  }

  return {
    locale,
    messages,
  };
}
