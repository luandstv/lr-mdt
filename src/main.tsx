import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NuiContextProvider } from "./context/NuiContext.tsx";
import { EventListener } from "./utils/EventListener.tsx";
import GlobalStyle from "./config/styles-reset.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NuiContextProvider>
    <EventListener />
    <GlobalStyle />
    <App />
  </NuiContextProvider>
);
