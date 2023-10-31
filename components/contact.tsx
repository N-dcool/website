"use client";

import SectionHeading from "./ui/sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./ui/button";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 inline dark:text-white/80">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll get back to
        you! Contact me directly at{" "}
      </p>
      <a className="underline" href="mailto:nareshnc82643@gmail.com">
        nareshnc82643@gmail.com
      </a>{" "}
      or through this form.
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          name="email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};
export default Contact;
