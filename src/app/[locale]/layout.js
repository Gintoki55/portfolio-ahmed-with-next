import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

import { Inter, Cairo } from "next/font/google";
import Header from "../components/header";
import BackgroundCircles from "../components/BackgroundCircles";

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-cairo',
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Ahmed's Portfolio - Web Developer",
    template: "%s | Ahmed's Portfolio",
  },
  description: "Hi! I'm Ahmed, a Front-End Developer. This is my site to showcase my skills and projects using modern tools like React, Next.js, and more.",
  keywords: [
    "Ahmed",
    "Frontend Developer",
    "React Developer",
    "Portfolio",
    "Web Design",
    "Next.js",
    "JavaScript",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    'google-site-verification': 'Vt3eYgI6LufKURKB_tVfw10vKd-hBMVj0jESzC-a7Eo',
  }
};


export default async function LocaleLayout(props) {
  const { children } = props;
  const { locale } = await props.params; // ✅ await هنا ضروري

  const isArabic = locale === 'ar';

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${isArabic ? cairo.variable : inter.variable}`}>
      <body className={isArabic ? 'font-cairo' : 'font-inter'}>
        <NextIntlClientProvider locale={locale}>
          <div className='w-full'>
            <Header />
          </div>
          {children}
          <BackgroundCircles />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

