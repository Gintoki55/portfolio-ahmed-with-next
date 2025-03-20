"use client";
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { FaCode, FaGlobe, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion'; // ✅ Framer Motion import
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
const ProjectsJsx = () => {
  const t = useTranslations("projects");
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];
    const isArabic = currentLang === 'ar';

  const projectsItems = [
    {
      title: t("hounter.title"),
      description: t("hounter.description"),
      img: "/images/hounterProject.jpg",
      type: t("hounter.type"),
      icons: [
        "/images/react.png",
        "/images/tailwind.png",
      ],
      link: "https://charming-sprinkles-bed28c.netlify.app/",
      githubLink: "https://github.com/Gintoki55/hounter-project",
    },
    {
      title: t("weatherApp.title"),
      description: t("weatherApp.description"),
      img: "/images/weatherApplication.jpg",
      type: t("weatherApp.type"),
      icons: [
        "/images/react.png",
        "/images/tailwind.png",
      ],
      link: "https://snazzy-bombolone-c0d9fd.netlify.app/",
      githubLink: "https://github.com/Gintoki55/Weather-application",
    },
    {
      title: t("noteApp.title"),
      description: t("noteApp.description"),
      img: "/images/note-app.jpeg",
      type: t("noteApp.type"),
      icons: [
        "/images/react.png",
        "/images/tailwind.png",
        "/images/node.png",
      ],
      link: "https://subtle-cassata-13f01e.netlify.app/signin",
      githubLink: "private",
    },
    {
      title: t("baraco.title"),
      description: t("baraco.description"),
      img: "/images/baraco1.png",
      type: t("baraco.type"),
      icons: [
        "/images/next.png",
        "/images/tailwind.png",
      ],
      link: "https://barkhad-group.com/",
      githubLink: "https://github.com/Gintoki55/Baraco",
    },
    {
      title: t("nike.title"),
      description: t("nike.description"),
      img: "/images/NikeShoes.jpg",
      type: t("nike.type"),
      icons: [
        "/images/react.png",
        "/images/tailwind.png",
      ],
      link: "https://friendly-dasik-7ff0a0.netlify.app/",
      githubLink: "https://github.com/Gintoki55/Nike-project",
    },
    {
      title: t("foodiland.title"),
      description: t("foodiland.description"),
      img: "/images/foodilend.jpg",
      type: t("foodiland.type"),
      icons: [
        "/images/react.png",
        "/images/tailwind.png",
      ],
      link: "https://serene-melba-08c964.netlify.app/",
      githubLink: "https://github.com/Gintoki55/Foodiland",
    },
    {
      title: t("prayer.title"),
      description: t("prayer.description"),
      img: "/images/prayerTime.jpeg",
      type: t("prayer.type"),
      icons: [
        "/images/html.png",
        "/images/css.png",
        "/images/js.png",
        "/images/bootstrap.png",
      ],
      link: "https://steady-selkie-6d6d21.netlify.app/",
      githubLink: "https://github.com/Gintoki55/prayerTimig-react-app",
    },
    {
      title: t("football.title"),
      description: t("football.description"),
      img: "/images/raya.jpeg",
      type: t("football.type"),
      icons: [
        "/images/html.png",
        "/images/css.png",
      ],
      link: "https://tourmaline-mandazi-28ee36.netlify.app/",
      githubLink: "https://github.com/Gintoki55/raya",
    },
  ];

   const typeStyles = {
    "front-end": "bg-green-200 text-green-600",
    "Full-Stack MERN": "bg-orange-200 text-orange-500",
    "back-end": "bg-blue-400 text-blue-800",
  };

  const typeIcons = {
    "front-end": <FaCode className="inline-block mr-1 text-green-600" />,
    "Full-Stack MERN": <FaServer className="inline-block mr-1 text-orange-500" />,
    "back-end": <FaGlobe className="inline-block mr-1  text-blue-800" />,
  };

  return (
    <section className="py-10" id="projects">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsItems.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl shadow-md hover:shadow-xl transition duration-300 w-full object-cover mb-5"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className={`inline-flex items-center px-3 py-1 mb-3 text-sm font-medium rounded-lg capitalize ${typeStyles[project.type] || "bg-gray-400 text-white"}`}>
                    {typeIcons[project.type]} {project.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" 
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 Inter"
                    dir={isArabic ? 'rtl' : 'ltr'}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.icons.map((icon, i) => {
                    const iconName = icon.split("/").pop().split(".")[0];
                    const formattedName = iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();

                    return (
                      <div key={i} className="relative group w-7 h-7">
                        <img
                          src={icon}
                          alt={formattedName}
                          className="w-full h-full object-contain"
                        />
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition duration-200 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                          {formattedName}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center mt-auto gap-3">
                  {project.githubLink === "private" ? (
                    <span className="flex-1 text-center bg-gray-400 text-white px-4 py-3 rounded-lg text-sm cursor-not-allowed opacity-50">
                      {t("buttons.private")}
                    </span>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg text-sm hover:bg-gray-700 transition"
                    >
                      <BsGithub />
                      {t("buttons.github")}
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm hover:bg-blue-500 transition"
                  >
                    <FiExternalLink />
                     {t("buttons.preview")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsJsx;