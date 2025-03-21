import React from 'react'
import ServicesJsx from '../../components/services'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: "Services | Ahmed Portfolio",
  description: "Discover Ahmed's professional web development services, including responsive design, front-end development, and modern UI solutions.",
  keywords: ["Ahmed", "Web Developer", "Services", "Front-End", "Next.js", "React", "Portfolio"],
  robots: "index, follow",
};

function Servicespage() {
  const t = useTranslations('servicesSection')

  return (
    <main>
      {/* ///content */}
      <header className='text-center text-gray-700 pt-10'>
        <h1 className='sm:text-5xl text-4xl font-bold'>{t('title')}</h1>
        <h2 className='sm:text-xl text-lg sm:max-w-4xl max-w-full m-auto pt-4 px-2'>{t('subtitle')}</h2>
      </header>

      {/* // cards */}
      <section aria-label="Ahmed's Services">
        <ServicesJsx />
      </section>
    </main>
  )
}

export default Servicespage
