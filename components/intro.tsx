"use client";
import myself from "@/public/profile-pic-4.png";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { LIGHT_COLORS, DARK_COLORS } from "@/lib/constants";
import { shuffleArray } from "@/lib/shuffleArray";
import { RainbowHighlight } from "@/components/ui/RainbowHighlight";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { theme } = useTheme();

  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  // Shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  useEffect(() => {
    if (theme === "light") {
      setColors(shuffleArray(LIGHT_COLORS));
    } else {
      setColors(shuffleArray(DARK_COLORS));
    }
  }, [theme]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <div>
            <Image
              src={myself}
              alt="naresh profile image"
              quality="95"
              width="150"
              height="150"
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
          <motion.span
            className="absolute text-4xl bottom-[1rem] right-[1rem]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🧑🏻‍💻
          </motion.span>
        </div>
      </div>

      <RoughNotationGroup show={isFontReady}>
        <h1 className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl">
          <span className="font-semibold">Hello 👋, I'm Naresh, </span> a{" "}
          <RainbowHighlight color={colors[0]}>developer</RainbowHighlight> based
          in <span className="font-semibold">India 🇮🇳.</span>
          <p className="text-[1.3rem]">
            I love building tools that are{" "}
            <RainbowHighlight color={colors[1]}>
              user-friendly, simple
            </RainbowHighlight>{" "}
            and{" "}
            <RainbowHighlight color={colors[2]}>delightful</RainbowHighlight>.
          </p>
          <p className="text-[1.3rem]">
            I am a{" "}
            <RainbowHighlight color={colors[6]}>self-taught</RainbowHighlight>{" "}
            developer, I have spent 2 years learning the fundamentals of{" "}
            <RainbowHighlight color={colors[3]}>front-end</RainbowHighlight> and{" "}
            <RainbowHighlight color={colors[4]}>
              back-end web development
            </RainbowHighlight>
            .
          </p>
          <p className="text-[1.3rem]">
            I'm currently looking for a new role as a developer.{" "}
            <RoughNotation
              type="circle"
              multiline={true}
              animationDuration={1500}
              animationDelay={1700}
              strokeWidth={2}
              iterations={3}
              padding={5}
              color={colors[1]}
            >
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-white/80 dark:hover:text-white dark:focus:text-white transition-all"
              >
                Hire me?
              </a>
            </RoughNotation>
          </p>
        </h1>

        <div className="flex items-center flex-col sm:flex-row justify-center gap-2 px-4 font-medium">
          <a
            href="https://www.linkedin.com/in/n-dcool/"
            target="_blank"
            className="group flex bg-gray-900 text-white gap-2 px-7 py-3 items-center rounded-full focus:scale-110 active:scale-105 hover:scale-110 hover:bg-gray-950 transition-all"
          >
            View Linkedin
          </a>
          <Link
            href="/CV.pdf"
            target="_blank"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            download={true}
          >
            View Resume{" "}
          </Link>
          <Link
            href="https://github.com/n-dcool"
            target="_blank"
            className="flex bg-white gap-2 text-[1.35rem] p-4 items-center rounded-full borderBlack focus:scale-110 active:scale-105 hover:scale-110 transition-all dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </RoughNotationGroup>
    </section>
  );
};
export default Intro;
