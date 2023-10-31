"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[4rem] h-[4rem] bg-opacity-40 backdrop-blur-[0.5rem]
    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center text-3xl
    hover:scale-[1.15] active:scale-[1.05] transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
export default ThemeSwitch;
