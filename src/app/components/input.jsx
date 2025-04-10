'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export default function InputJsx() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      const langFromUrl = pathname.split('/')[1];
      setCurrentLang(storedLang || langFromUrl);
    }
  }, [pathname]);

  const handleChange = (lang) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="relative sm:w-40 w-20">
      <div className="relative">
        <select
          value={currentLang}
          onChange={(e) => handleChange(e.target.value)}
          className="appearance-none w-full bg-transparent border text-lg font-medium rounded-md py-2 pl-3 pr-10 shadow-sm cursor-pointer focus:ring-2 focus:outline-none focus:ring-black focus:border-white border-black text-black"
          aria-label="Select Language"
        >
          {languages.map((language, index) => (
            <option key={index} value={language.code} className="text-black">
              {language.flag} {language.name}
            </option>
          ))}
        </select>
        <HiChevronDown className="absolute top-1/2 right-3 w-5 h-5 transform -translate-y-1/2 pointer-events-none text-black" />
      </div>
    </div>
  );
}
