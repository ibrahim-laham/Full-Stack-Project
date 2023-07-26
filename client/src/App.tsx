import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import { createContext, useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import AlbumDetails from "./pages/AlbumDetails";
import SearchSpotify from "./components/DevTools/SearchSpotify";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import ProfilePage from "./pages/ProfilePage";
import LogoutPage from "./pages/LogoutPage";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";

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
          background: {
            paper: "#FFFFFF",
            default: "#FFFFFF",
          },
          contrastThreshold: 4.5,
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#870707",
            dark: "#6d0808",
          },
          secondary: {
            light: "#bd68cc",
            main: "#6c1aa0",
            dark: "#2F0A47",
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
            default: "rgba(0,0,0,0.64)",
          },
          contrastThreshold: 4.5,
        }),
  },
  typography: {
    fontFamily: ["Signika", "sans-serif"].join(","),
  },
});
;
function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Stack>
            <Navbar mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/albums/:id" element={<AlbumDetails />} />
              <Route path="/devtool" element={<SearchSpotify />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/cart" element={<CartPage/>} />
            </Routes>
          </Stack>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
