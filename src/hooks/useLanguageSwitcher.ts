import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language,
  );
  const [language, setLanguage] = useState([
    {
      lng: "ENG",
      active: true,
      code: "en",
    },
    {
      lng: "CHI(简化)",
      active: false,
      code: "zhTW",
    },
    {
      lng: "CHI(传统的)",
      active: false,
      code: "zhCN",
    },
  ]);

  const handleLanguageChange = (index: number, lng: string) => {
    handleValueChange(lng);
    setLanguage(
      language.map((data, idx) => {
        return idx === index
          ? { ...data, active: true }
          : { ...data, active: false };
      }),
    );
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const handleValueChange = (value: string) => {
    setSelectedLanguage(value);
    handleChangeLanguage(value);
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    selectedLanguage,
    handleValueChange,
    language,
    handleLanguageChange,
  };
};

export default useLanguageSwitcher;
