import { useTheme } from "@/context/ThemeContext";

export const Work1 = ({ logo, header, text, icons, iconBut }) => {
  //   console.log(iconBut);
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const work1ButClassName = `border rounded-lg p-[4px] ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-800 text-white"
  }`;
  const logoClassName = `w-2/6 mt-20 ${
    theme == "light" ? "" : "bg-slate-600 text-black rounded "
  }`;
  const divClassName = `w-2/6  p-10 mt-20 flex flex-col gap-y-8 rounded ${
    theme == "light" ? "" : "bg-slate-800 text-white"
  }`;

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className={logoClassName}>
          <div className="flex items-center justify-center">{logo}</div>
        </div>
        <div className={divClassName}>
          <h2 className="text-2xl">{header}</h2>
          <p>{text}</p>
          <ul className="flex gap-2 flex-wrap ">
            {icons.map((i) => {
              return <button className={work1ButClassName}>{i}</button>;
            })}
          </ul>
          <button>{iconBut}</button>
        </div>
      </div>
    </div>
  );
};
