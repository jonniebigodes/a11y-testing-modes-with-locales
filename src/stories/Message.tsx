import React from "react";
import { useTranslation } from "react-i18next";
import "./Message.css";

interface MessageProps {
  className?: string;
}

export const Message: React.FC<MessageProps> = ({ className = "" }) => {
  const { t, i18n } = useTranslation();

  // Check if current language is Arabic for RTL support
  const isRTL = i18n.language === "ar" || i18n.language.startsWith("ar-");

  return (
    <div className={`message ${className}`} dir={isRTL ? "rtl" : "ltr"}>
      <p className="message-text">{t("title")}</p>
    </div>
  );
};

export default Message;
