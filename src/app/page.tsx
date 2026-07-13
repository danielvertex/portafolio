import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Certifications } from "@/components/sections/Certifications";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { NotesPreview } from "@/components/sections/NotesPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Certifications />
      <ProjectsPreview />
      <NotesPreview />
      <Contact />
    </>
  );
}
