import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import AIRAMonoLinesLeft from "./components/AIRAMonoLinesLeft";
import AIRAMonoLinesRight from "./components/AIRAMonoLinesRight";
import FooterNew from "./components/footer/FooterNew";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";
import { buildPages } from "./buildsPages";
// import { ThemeProvider } from "../src/components/ThemeContext/ThemeContext";
// import { useTheme } from '../src/components/ThemeContext/ThemeContext';
// import '../src/style/dark-mode.css';
// import '../src/style/styles.css';
const App = () => {
  const location = useLocation();
  // const { darkMode } = useTheme();
  return (
    <Box>
      <Header />
      {buildPages.includes(location.pathname) ? (
        <Box>
          <Outlet />
        </Box>
      ) : (
        <Box
          sx={{
            py: 5,
            borderBottomWidth: "2px",
            borderColor: "#eee",
            borderStyle: "solid",
          }}
        >
          <AIRAMonoLinesLeft
            styles={{
              top: 40,
            }}
          />
          <AIRAMonoLinesRight
            styles={{
              top: 100,
            }}
          />
          <div
            style={{
              fontSize: "35px",
              fontFamily: "Montserrat",
              fontWeight: "extrabold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "500px",
              width: "100%",
            }}
          >
            <Outlet />
          </div>
        </Box>
      )}
      {/* <Footer /> */}
      <ScrollToTop showBelow={100} />
      <FooterNew />
    </Box>
    
    
  );
};

export default App;
