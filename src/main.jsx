import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./i18n/config";
import "./index.css";
import axios from "axios";
import { STRAPI_API_URL, STRAPI_BASE_URL } from "./network/network";
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

axios.defaults.baseURL = STRAPI_API_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer a32e838cea064ec6048fed98c665c6b576c1663af8262120785e775629167e9be58f5bf03dea894970a79105561516a884851e32c676ae989f65f02463a4106c89812694e613dc302ad5dba067701b7fe4759b6b7b2316a608813f8ab297cfb2863bd2f4602467dfbb512a4e9dafcc7d7a949338c364b911b30cb67b68b72d5d`,
};

const theme = createTheme({
  //direction: "rtl",
  palette: {
    primary: {
      main: "#6755DF",
    },
    secondary: {
      main: "#FFAF00",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    allVariants: {
      color: "#200E32",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CacheProvider value={cacheRtl}> */}
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
    {/* </CacheProvider> */}
  </React.StrictMode>
);
