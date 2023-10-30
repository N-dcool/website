import Link from "next/link";

export const Button = ({
  children,
  href,
}: {
  href: string;
} & Omit<React.HTMLProps<HTMLAnchorElement>, "href">) => {
  return (
    <Link
      href={href}
      className="block px-8 py-2 text-center text-white transition duration-200 bg-gray-900 border border-transparent rounded hover:bg-white hover:text-gray-800 hover:border-gray-800 focus:outline-none"
    >
      {children}
    </Link>
  );
};
