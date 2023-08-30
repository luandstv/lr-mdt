import { ThemeProvider } from "styled-components";
import { useNuiContext } from "./hooks/UseNuiContext";
import { Mold } from "./components/Mold";
import { SideBar } from "./components/SideBar";
import theme from "./config/theme";

function App() {
  const { status, template, themeStyle } = useNuiContext();

  if (status) return null;
  return (
    <ThemeProvider theme={theme[themeStyle]}>
      <Mold>
        <SideBar />
        {template}
      </Mold>
    </ThemeProvider>
  );
}

export default App;
