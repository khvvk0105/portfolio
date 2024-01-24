import { row1Arr } from "@/utils/raw1";
import { Row1 } from "./Row1";
import { useTheme } from "@/context/ThemeContext";

export const Experience = () => {
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const expClassName = `w-full m-auto p-20 ${
    theme == "light" ? "bg-slate-100 text-black" : "bg-slate-800 text-white"
  }`;

  const expButClassName = `border rounded-lg p-[4px] ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div className={expClassName}>
      <div className="flex items-center justify-center ">
        <button className={expButClassName}>Experience</button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div>
        <div>
          {row1Arr.map((e, index) => {
            return (
              <Row1
                logo={e.logo}
                header={e.header}
                text={e.text}
                date={e.date}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
