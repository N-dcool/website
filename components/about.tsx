"use client";

import SectionHeading from "@/components/ui/sectionHeading";
import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics and Telecommunication</span>,
        I decided to pursue my passion for programming. I started coding and
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>,I love to travel and
        watch anime in my spare time, currently my favorite anime shows are{" "}
        <span className="font-medium">One Piece</span> and{" "}
        <span className="font-medium">Naruto</span>. I also enjoy learning about{" "}
        <span className="font-medium">Cloud computing and DevOps</span>.
      </p>
    </motion.section>
  );
};
export default About;
