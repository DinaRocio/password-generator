import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { CustomTheme } from "./createTheme";
import { deunaTheme } from "./theme/createTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const engine = new Styletron();

root.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={deunaTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
