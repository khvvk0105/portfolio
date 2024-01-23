import { useTheme } from "@/context/ThemeContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Light } from "./Light";
import { Dark } from "./Dark";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const headerClassName = `w-full ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-900 text-white"
  }`;
  const downloadClassName = `w-136px h-36px rounded-xl px-3 ${
    theme == "light" ? "bg-slate-900 text-white" : "bg-slate-300 text-black"
  }`;

  return (
    <div className={headerClassName}>
      <div className="flex items-center w-4/5 justify-between m-auto mt-8 p-6">
        <div>
          <p className="text-3xl font-bold">&#60; SS/ &#62;</p>
        </div>
        <div className="flex gap-10">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div onClick={changeThemeHandler}>
            {theme == "light" ? <Light /> : <Dark />}
          </div>
          <div className={downloadClassName}>
            <p>Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};
