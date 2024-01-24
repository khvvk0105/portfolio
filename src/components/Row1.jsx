import { useTheme } from "@/context/ThemeContext";

export const Row1 = ({ logo, header, text, date }) => {
  // console.log(text);
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const row1ClassName = `w-full m-auto p-20 flex justify-between m-auto ${
    theme == "light" ? "bg-slate-100 text-black" : "bg-slate-700 text-white"
  }`;
  return (
    <div className="mt-10">
      <div className={row1ClassName}>
        <div className="mt-2">{logo}</div>
        <div>
          <h2 className="text-3xl">{header}</h2>
          <ul className=" w-96">
            {text.map((list) => {
              return <li>{list}</li>;
            })}
          </ul>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};
