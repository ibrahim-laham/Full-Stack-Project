import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";
import { Button, PaletteMode } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import amber from "@mui/material/colors/amber";
import grey from "@mui/material/colors/grey";
import deepOrange from "@mui/material/colors/deepOrange";


declare module '@mui/material/styles' {
  interface Palette {
    sleekDark: Palette['primary'];
    goldRush: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    sleekDark?: PaletteOptions['primary'];
    goldRush?: Palette['primary'];
  }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    sleekDark: true;
    goldRush: true;
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

/* const theme = createTheme({
  palette: {
    primary: {
      main: "#ad0b0b",
    },
    secondary: {
      main: "#6c1aa0",
    },
    sleekDark: {
      main: "#270534",
      contrastText: '#fff',
    },
    goldRush: {
      light: "#ca9b38",
      main: "#c08220",
      dark: "#b36916",
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ["Signika", "sans-serif"].join(","),
  },
}); */

function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });


  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="App" >
        {/* using this to get albums data from spotify */}
        {/* <SearchSpotify /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/albums" element={<AlbumsPage/>}/>
        </Routes>
        <Button onClick={()=> setMode("dark")}> change</Button>
      </div>
    </ThemeProvider></ColorModeContext.Provider>
    
  );
}

export default App;
