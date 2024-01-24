import { workArr } from "@/utils/workArr";
import { Work1 } from "./Work1";
import { useTheme } from "@/context/ThemeContext";
export const Work = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const workClassName = `w-full m-auto p-20 ${
    theme == "light" ? "dark" : "bg-slate-900 text-white"
  }`;

  const workButClassName = `border rounded-lg p-[4px] ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div className={workClassName}>
      <div className="flex items-center justify-center">
        <button className={workButClassName}>Work</button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div>
        {workArr.map((e) => {
          return (
            <Work1
              logo={e.logo}
              header={e.header}
              text={e.text}
              icons={e.icons}
              iconBut={e.iconBut}
            />
          );
        })}
      </div>
    </div>
  );
};
