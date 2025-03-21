"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div className='w-full'>
      <div className='flex flex-row justify-around items-center xl:w-[1000px] max-lg:w-full h-[650px] m-auto max-lg:flex-col max-lg:justify-center max-lg:gap-5'>

        {/* Avatar */}
        <div>
          <img
            className="w-[400px] h-[400px] max-lg:w-[300px] max-lg:h-[300px] rounded-full object-cover"
            src="/images/me12.jpeg"
            alt="Ahmed Barkhed avatar"
          />
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className='text-center flex flex-col gap-2.5 sm:w-[400px] max-sm:max-w-full max-sm:w-[380px]'
        >
          <motion.h6 variants={childVariant} className='text-xl text-gray-700 font-bold'>{t('text1')}</motion.h6>
          <motion.h1 variants={childVariant} className='text-5xl max-lg:text-4xl text-gray-700 font-bold'>{t('text2')}</motion.h1>
          <motion.h2 variants={childVariant} className='text-3xl max-lg:text-3xl text-blue-700 font-bold'>{t('text3')}</motion.h2>

          {/* Buttons */}
          <motion.div variants={childVariant} className='w-full flex justify-around mt-5'>

            <a href="files/cv.pdf" rel="noopener noreferrer" download>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className='py-4 px-6 max-lg:p-4 bg-blue-700 text-white flex justify-between items-center gap-2 rounded-xl border border-blue-700 cursor-pointer transform transition ease-in-out duration-300'
              >
                <span>{t('button1')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </motion.div>
            </a>

            <Link href="/contact" passHref>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className='py-4 px-10 bg-gray-700 text-white flex justify-between items-center gap-2 rounded-xl cursor-pointer'
              >
                {/* Contact me */}
                {t('button2')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={childVariant} className='w-full flex justify-center items-center gap-5 mt-5'>
            {[
              { icon: 'insta', link: 'https://www.instagram.com/a.ji17?igsh=ODRrbjloeGFoeWNy' },
              { icon: 'github', link: 'https://github.com/Gintoki55' },
              { icon: 'linkedin', link: 'https://www.linkedin.com/in/%D8%A3%D8%AD%D9%85%D8%AF-%D8%A8%D8%B1%D8%AE%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-38269b303/' },
              { icon: 'whatsapp', link: 'https://api.whatsapp.com/send/?phone=96899149747&text&type=phone_number&app_absent=0' }
            ].map(({ icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={`/icons/${icon}.svg`}
                  alt={`${icon} icon`}
                  className='w-10 h-10 cursor-pointer transition duration-300 filter brightness-0 opacity-70 hover:brightness-0 hover:opacity-100'
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
