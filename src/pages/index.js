import { Portfolio } from "./portfolio";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider className="w-1440px">
      <Portfolio />
    </ThemeProvider>
  );
}
