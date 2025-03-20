"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
const images = [
  "/images/web-design.png",
  "/images/responsive-design.png",
  "/images/app-development.png",
  "/images/api.png",
  "/images/translation.png",
  "/images/shuttle.png"
];

function ServicesJsx() {
  const t = useTranslations();
  const servicesSection = t.raw("servicesSection");
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];
  const isArabic = currentLang === 'ar';

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesSection.services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div
                className={`w-[100px] h-[100px] bg-[rgba(30,64,175,0.2)] rounded-full flex items-center justify-center `}
                
              >
                <img
                  alt={service.title}
                  src={images[index]}
                  className="w-24 h-24 mb-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2" dir={isArabic ? 'rtl' : 'ltr'}>{service.title}</h3>
              <p className="text-gray-600 text-md" dir={isArabic ? 'rtl' : 'ltr'}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesJsx;
