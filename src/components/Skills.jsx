import { skillArr, skillArr2 } from "@/utils/skills";
import { CardSkill } from "./CardSkill";
import { CardSkill2 } from "./CardSkill2";
import { useTheme } from "@/context/ThemeContext";
export const Skills = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const skillClassName = `w-full m-auto p-20 ${
    theme == "light" ? "dark" : "bg-slate-900 text-white"
  }`;
  const slillButClassName = `border rounded-lg p-[4px] ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div className={skillClassName}>
      <div>
        <div className="flex items-center justify-center">
          <button className={slillButClassName}>Skills</button>
        </div>
        <div className="flex items-center justify-center mt-[16px]">
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
      </div>
      <div>
        <div className=" mt-[48px] ">
          <div className="flex justify-between items-center m-auto">
            {skillArr.map((e) => {
              return <CardSkill icon={e.icon} text={e.text} />;
            })}
          </div>
          <div className="flex justify-between items-center m-auto mt-14">
            {skillArr2.map((a) => {
              return <CardSkill2 icon={a.icon} text={a.text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
