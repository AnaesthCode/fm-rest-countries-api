import MainHeader from "./main-header";
import { useTheme } from "next-themes";

const Layout = (props) => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <MainHeader onToggleDarkMode={toggleDarkMode} theme={theme} />
      <main className="box-border w-screen min-h-screen p-4 bg-light-mode-bg text-light-mode-text dark:bg-dark-mode-bg dark:text-dark-mode-text-light-elements">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
