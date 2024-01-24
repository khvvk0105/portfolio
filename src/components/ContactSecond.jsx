import { useTheme } from "@/context/ThemeContext";

export const ContactSecond = ({ icon, text, icon1 }) => {
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const conSecondClassName = `flex gap-8 justify-center mt-4 ${
    theme == "light" ? "bg-slate-100 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div className={conSecondClassName}>
      <ul>{icon}</ul>
      <p>{text}</p>
      <ul>{icon1}</ul>
    </div>
  );
};
