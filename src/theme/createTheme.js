import { createTheme } from "baseui";
import { colors } from "./tokens/colors";
import { deunaTokens } from "./tokens/deunaTokens";
import { lighting } from "./tokens/lighting";

export const primitives = {
  ...colors,
  ...lighting,
  ...deunaTokens,
};

const overrides = {
  colors: {
    buttonSecondaryText: primitives.white,
    buttonTertiaryFill: primitives.orange400,
    buttonTertiaryText: primitives.white,
    menuFill: primitives.white,
    menuFillHover: primitives.primary,
    menuFontDefault: primitives.primary,
    menuFontHighlighted: primitives.white,
    tickBorder: primitives.mono200,
    tickFillHover: primitives.primary,
    tickFillDisabled: primitives.mono200,
    tickMarkFillDisabled: primitives.gray50,
  },
};
export const deunaTheme = createTheme(primitives, overrides);
