import React from "react";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import axios from "axios";

axios.defaults.baseURL = "http://192.168.231.243:8000";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const root = createRoot(
  document.getElementById("root")
);

root.render(
<React.StrictMode>
  <NativeBaseProvider theme={theme}>
    <App />
  </NativeBaseProvider>
</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
