'use client';

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3BottomRight } from "react-icons/hi2"
import InputJsx from "./input";

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/services', label: 'services' },
    { path: '/experience', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];
  const isArabic = currentLang === 'ar';
  const [activeLink, setActiveLink] = useState(pathname);
  const drawerRef = useRef(null);
  const t = useTranslations("nav");

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // إغلاق drawer إذا ضغط خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="relative z-50">
      {/* Menu Button */}
      <button onClick={toggleDrawer} className="text-5xl cursor-pointer">
         <HiBars3BottomRight />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 ${isArabic ? 'right-0' : 'left-0'} h-full bg-white shadow-lg transform transition-transform duration-300
        ${open ? 'translate-x-0' : isArabic ? 'translate-x-full' : '-translate-x-full'} w-[280px] p-5 z-50`}
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">
            <span className="text-blue-800 ">M</span>enu
          </h2>
          <button onClick={toggleDrawer}>
            <LiaTimesSolid className="text-4xl cursor-pointer" />
          </button>
        </div>
        <hr className="my-6 text-gray-200" />

        {/* Links */}
        <div className="flex flex-col mb-6">
          {navItems.map(({ path, label }) => {
            const currentPath = pathname.split('/').slice(2).join('/');
            const cleanedCurrentPath = `/${currentPath || ''}`;
            const isActive = path === '/' 
              ? pathname === `/${currentLang}` || pathname === `/${currentLang}/`
              : cleanedCurrentPath === path;

            return (
              <Link
                key={path}
                href={`/${currentLang}${path}`}
                className={`text-xl font-medium capitalize py-6 px-4 rounded-lg transition
                  ${isActive ? 'bg-blue-800 text-white' : 'text-gray-700 hover:text-blue-800 hover:bg-gray-100'}`}
                aria-label={`Go to ${t(label)}`}
              >
                {t(label)}
              </Link>
            );
          })}
        </div>
        <hr className="my-6 text-gray-200" />

        {/* Footer */}
        <div className="w-full">
          <div className="text-lg font-semibold mb-2">{t('language')}</div>
          <InputJsx />
        </div>
      </div>
    </div>
  );
}
