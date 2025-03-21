import ExperiencePage from "../../components/experiencePage";

export const metadata = {
  title: "Experience | Ahmed Portfolio",
  description: "Ahmed's front-end development experience using modern technologies like React, Next.js, Tailwind CSS, and more.",
  keywords: ["Ahmed", "Experience", "Front-End", "React", "Next.js", "HTML", "CSS", "Tailwind", "JavaScript"],
  robots: "index, follow",
};
export default function Page() {
  return (
    <main>
      <h1 className="sr-only">Ahmed's Experience</h1>
      <ExperiencePage />
    </main>
  )
}
