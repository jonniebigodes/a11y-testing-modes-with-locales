import React, { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n.ts";
import type { Preview } from "@storybook/react-vite";

// eslint-disable-next-line react-refresh/only-export-components
const WithI18next = (Story, context) => {
  const { locale } = context.globals;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const preview: Preview = {
  decorators: [WithI18next],
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "de", title: "Deutsch" },
          { value: "ar", title: "عربي" },
        ],
      },
    },
  },
  initialGlobals: {
    locale: "en",
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
