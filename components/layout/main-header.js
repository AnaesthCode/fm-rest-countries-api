import { useState, useEffect } from "react";
import MoonIcon from "../icons/moon-icon";
import Link from "next/link";

const MainHeader = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="flex justify-between items-center font-bold w-full h-16 md:h-14 md:px-16 p-4 bg-dark-mode-text-light-elements text-light-mode-text dark:bg-dark-mode-elements dark:text-dark-mode-text-light-elements">
        <div>
          <Link href="/">Where in the world?</Link>
        </div>
        <button className="w-30 flex" onClick={props.onToggleDarkMode}>
          <MoonIcon theme={props.theme} />
          <p> {props.theme === "dark" ? "Dark mode " : "Light mode"}</p>
        </button>
      </nav>
    </>
  );
};

export default MainHeader;
