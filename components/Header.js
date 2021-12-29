import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Header = ({ backToHome }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between text-gray-800 dark:text-white px-6 py-4 h-16 mt-12 bg-transparent">
      {backToHome ? (
        <Link href={"/"}>
          Back To Home
        </Link>
      ) : (
        <span></span>
      )}
      <button
        className=" flex space-x-4 row-span-2 px-6 py-2 bg-gray-800 text-white rounded-md  font-semibold uppercase dark:bg-yellow-400"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          )}
        </div>
        <div>{theme === "light" ? "dark" : "light"}</div>
      </button>
    </header>
  );
};

export default Header;
