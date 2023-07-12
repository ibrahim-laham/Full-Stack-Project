import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";


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

const theme = createTheme({
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
    }
  },
  typography: {
    fontFamily: ["Signika", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        {/* using this to get albums data from spotify */}
        {/* <SearchSpotify /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/albums" element={<AlbumsPage/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
