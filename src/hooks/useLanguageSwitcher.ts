import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language,
  );

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
  };
};

export default useLanguageSwitcher;
