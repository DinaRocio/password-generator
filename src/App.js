import React from "react";
import { LightTheme, DarkTheme, ThemeProvider } from "baseui";
import { Button } from "baseui/button";
import { Typography } from "./Components/Typography";
import DeunaInput from "./Components/DeunaInput";
import { DeunaButton } from "./Components/DeunaButton";
import { DeunaRadio } from "./Components/DeunaRadio";
import { DeunaBaseInput } from "./Components/DeunaBaseInput";
import { DisplayLarge } from "baseui/typography";
import { primitives } from "./createTheme";
import { DeunaCheckbox } from "./Components/DeunaCheckbox";
import { DeunaTooltip } from "./Components/DeunaTooltip";

const THEME = {
  light: "light",
  dark: "dark",
};

const App = () => {
  const [theme, setTheme] = React.useState(THEME.light);

  return (
    <div style={{ padding: 20 }}>
      <DisplayLarge>Password Generator</DisplayLarge>

      <Typography />
      <hr />
      <DeunaRadio />
      <hr />
      <DeunaCheckbox />
      <hr />
      <DeunaButton />
      <hr />
      <DeunaBaseInput />
      <hr />
      <DeunaInput />
      <hr />
      <DeunaTooltip />
      <hr />
    </div>
  );
};

export default App;
