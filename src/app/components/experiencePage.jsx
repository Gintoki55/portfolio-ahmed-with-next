'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl'
const skillsItems = [
  { label: "HTML", image: "/images/html.png", background: "#e34c26", hover: "#f4e6e0" },
  { label: "CSS", image: "/images/css.png", background: "#264de4", hover: "#e5e8fb" },
  { label: "JavaScript", image: "/images/js.png", background: "#f0db4f", hover: "#fdfae2" },
  { label: "React", image: "/images/react.png", background: "#61DBFB", hover: "#eafdff" },
  { label: "typescript", image: "/images/typescript.png", background: "#61DBFB", hover: "#eafdff" },
  { label: "Next.js", image: "/images/next.png", background: "#000000", hover: "#f2f2f2" },
  { label: "Material-UI", image: "/images/mui.png", background: "#007FFF", hover: "#e1f1ff" },
  { label: "Tailwind CSS", image: "/images/tailwind.png", background: "#06b6d4", hover: "#e4f9fd" },
  { label: "Postman", image: "/images/postman.png", background: "#ff6c37", hover: "#ffeae3" },
  { label: "Git", image: "/images/git.png", background: "#f34f29", hover: "#ffe7e0" },
  { label: "Node.js", image: "/images/node.png", background: "#3c873a", hover: "#e6f4e6" },
  { label: "Express", image: "/images/express.png", background: "#000000", hover: "#f2f2f2" },
  { label: "Auth", image: "/images/auth.png", background: "#4b5563", hover: "#ebedf0" },
  { label: "MongoDB", image: "/images/mongodb.png", background: "#4db33d", hover: "#e5f4e2" },
];

function ExperiencePage() {
   const t = useTranslations("experienceSection")
  return (
    <div className="px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
       {t("title")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-10 max-w-5xl mx-auto px-4">
        {t("subtitle")}
      </p>

      <div className="max-w-6xl mx-auto p-8">
        <div className="px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 place-items-center">
          {skillsItems.map((item, index) => (
            
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  className="group cursor-pointer rounded-xl shadow-lg p-4 flex flex-col items-center justify-center transition-all duration-300 sm:w-[160px] sm:h-[160px] w-[150px] h-[150px] border border-gray-300"
  style={{
    backgroundColor: "#ffffff",
    boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.1)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = item.hover;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#ffffff";
  }}
>
  <img
    src={item.image}
    alt={item.label}
    className="w-full h-full object-contain"
  />
</motion.div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
