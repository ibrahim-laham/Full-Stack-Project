import "./App.css";

import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumsPage from "./pages/AlbumsPage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Signika", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
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
