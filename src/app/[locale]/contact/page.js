import React from "react";
import FormJsx from "../../components/form";
import { useTranslations } from 'next-intl';
export const metadata = {
  title: "Contact Us | Ahmed Portfolio",
  description: "Ahmed's contact page. Don’t hesitate to send a message for any inquiries or potential collaboration.",
  keywords: ["Contact", "Ahmed", "Message", "Form", "Web Developer", "Front-end"],
  robots: "index, follow",
  authors: [{ name: "Ahmed" }],
};

export default function ContactPage() {
  const t = useTranslations('contactSection');
  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <header>
        <h1 className="sm:text-6xl text-5xl font-bold mb-4 text-center text-gray-700">{t('title')}</h1>
        <p className="sm:text-xl text-lg text-gray-600 mb-8 text-center">
          {t('subtitle')}
        </p>
      </header>
      <section aria-label="Contact Form Section">
        <FormJsx />
      </section>
    </main>
  );
}
