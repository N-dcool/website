import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School",
    location: "Shri Bhairavnath jr. college - Pune",
    description:
      "I completed my high school in Pune, India. I studied science with computer science as an elective subject.",
    icon: React.createElement(FaSchoolCircleCheck),
    date: "2018-19",
  },
  {
    title: "Bachelor's Degree",
    location: "Government College of Engg. and research - Pune",
    description:
      "I maintained a strong CGPA above 8 during my B.E. in Electronics and Telecommunication while simultaneously mastering technologies like React, JavaScript, TypeScript, and blockchain, creating awesome projects along the way.",
    icon: React.createElement(FaUserGraduate),
    date: "2019 - 2023",
  },
  {
    title: "Assistence Software Engineer - TCS Digital",
    location: "Hinjevadi, Pune",
    description:
      "Awaiting my TCS-Digital joining as an Assistant Software Engineer while actively exploring job opportunities in a challenging job market with ongoing layoffs.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Solidity",
  "Hardhat",
  "Ganache",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "REST API",
  "Express",
  "PostgreSQL",
  "Java",
  "Framer Motion",
] as const;
