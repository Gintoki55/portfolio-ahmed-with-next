'use client';

import { useRouter, usePathname } from 'next/navigation';
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

  const handleChange = (lang) => {
    const segments = pathname.split('/');
    segments[1] = lang; // استبدال كود اللغة في المسار
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const currentLang = pathname.split('/')[1];

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
