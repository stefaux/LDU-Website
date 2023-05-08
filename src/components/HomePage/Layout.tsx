import { ThemeContext, ThemeProvider } from "@/contexts/ThemeContext";
import CardContainer from "./CardContainer";
import ImageSlider from "./ImageSlider";
import Tabs from "./Tabs";
import { useContext } from "react";

function Layout({ startingTheme }) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <div className="container mx-auto">
        <ImageSlider />
        <div className="bg-white">
          <CardContainer />
          <Tabs />
        </div>
      </div>
    </ThemeProvider>
  );
}

function LayoutNoThemeProvider({ startingTheme, children }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
