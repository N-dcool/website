import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/ui/sectionDivider";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
