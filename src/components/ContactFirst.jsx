import { useTheme } from "@/context/ThemeContext";

export const ContactFirst = ({ icon, text, icon1 }) => {
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const confirstClassName = `flex gap-8 justify-center mt-10 ${
    theme == "light" ? "bg-slate-100 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div className={confirstClassName}>
      <ul>{icon}</ul>
      <p>{text}</p>
      <ul>{icon1}</ul>
    </div>
  );
};
