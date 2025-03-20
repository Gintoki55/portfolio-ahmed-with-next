'use client';
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl';
import InputJsx from './input';
import AnchorTemporaryDrawer from './drawer';
import { usePathname } from 'next/navigation';
export default function Header() {
  const t = useTranslations("nav");
      const pathname = usePathname();
      const currentLang = pathname.split('/')[1];
      const isArabic = currentLang === 'ar';

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/services', label: 'services' },
    { path: '/experience', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <nav className='w-full'>
      <div className="flex justify-between items-center p-4 h-[120px] shadow-sm">
        {/* Logo */}
        <div>
          <a href="/">
            <span className="text-4xl font-bold whitespace-nowrap">
              <span className='text-blue-800 text-5xl'>P</span>ortfolio
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between max-lg:hidden"> 
          <ul className="flex p-4 gap-8" dir={isArabic ? 'rtl' : 'ltr'}>
            {navItems.map(({ path, label }, index) => (
              <li key={index}>
                <Link
                  href={path}
                  className="text-xl font-medium text-gray-700 capitalize transition hover:text-blue-800"
                  aria-label={`Go to ${t(label)}`}
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
         <div className='max-lg:hidden'>
            <InputJsx />
          </div>

        {/* Drawer (for small screens) */}
        <div className='hidden max-lg:block'>
          <AnchorTemporaryDrawer/>
        </div>
      </div>
    </nav>
  )
}
