import { contactArr1, contactArr2 } from "@/utils/contacticons";
import { Last } from "./Last";
import { ContactFirst } from "./ContactFirst";
import { ContactSecond } from "./ContactSecond";
import { last1 } from "@/utils/last";
import { useTheme } from "@/context/ThemeContext";

export const ContactMe = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const contactClassName = `flex flex-col items-center justify-center ${
    theme == "light" ? "dark" : "bg-slate-900 text-white"
  }`;

  const conButClassName = `border rounded-lg p-[4px] ${
    theme == "light" ? "bg-slate-300 text-black" : "bg-slate-800 text-white"
  }`;
  return (
    <div>
      <div className={contactClassName}>
        <button className={conButClassName}>Get in touch</button>
        <p className=" mt-10">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div>
        {contactArr1.map((e) => {
          return <ContactFirst icon={e.icon} text={e.text} icon1={e.icon1} />;
        })}
      </div>
      <div>
        {contactArr2.map((i) => {
          return <ContactSecond icon={i.icon} text={i.text} icon1={i.icon1} />;
        })}
      </div>
      <div>
        {last1.map((a) => {
          return (
            <Last
              text={a.text}
              icon1={a.icon1}
              icon2={a.icon2}
              icon3={a.icon3}
            />
          );
        })}
      </div>
    </div>
  );
};
