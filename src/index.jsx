import { createRoot } from "react-dom/client";

import { MainView } from "./components/mainview/main-view";

// import statement to indicate you need to bundle the file
import "./index.scss";

// main component
const MyFlixApplication = () => {
  return <MainView />;
};

// Selects root
const container = document.querySelector("#root");
const root = createRoot(container);

// tells react to render your app in the root DOM element
root.render(<MyFlixApplication />);
