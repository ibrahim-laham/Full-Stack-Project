import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import { createContext, useMemo, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type PaletteMode = "light" | "dark";
declare module "@mui/material/styles" {
  interface Palette {
    sleekDark: Palette["primary"];
    goldRush: Palette["primary"];
  }

  interface PaletteOptions {
    sleekDark?: PaletteOptions["primary"];
    goldRush?: Palette["primary"];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    sleekDark: true;
    goldRush: true;
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#6c1aa0",
          },
          secondary: {
            main: "#ad0b0b",
          },
          sleekDark: {
            main: "#270534",
            contrastText: "#fff",
          },
          goldRush: {
            light: "#ca9b38",
            main: "#c08220",
            dark: "#b36916",
            contrastText: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#ad0b0b",
          },
          secondary: {
            main: "#6c1aa0",
          },
          sleekDark: {
            main: "#270534",
            contrastText: "#fff",
          },
          goldRush: {
            light: "#ca9b38",
            main: "#c08220",
            dark: "#b36916",
            contrastText: "#fff",
          },
          background: {
            paper: "#270534",
            default: "#270534",
          },
        }),
  },
  typography: {
    fontFamily: ["Signika", "sans-serif"].join(","),
  },
});

function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(() => (prefersDarkMode ? "dark" : "light"));
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    [prefersDarkMode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* using this to get albums data from spotify */}
          {/* <SearchSpotify /> */}
          <Navbar mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/albums" element={<AlbumsPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
