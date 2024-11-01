import * as React from "react";
import Progress from "./Progress";
import logo from "../../../public/Logo-32.png";
import { HighlightingSection } from "./HighlightingSection";

interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

const App: React.FC<AppProps> = ({ title, isOfficeInitialized }) => {
  if (!isOfficeInitialized) {
    return <Progress title={title} logo={logo} message="Please sideload your addin to see app body." />;
  }

  return <HighlightingSection />;
};

export default App;
