import { createTheme } from "baseui";

export const primitives = {
  accent: "#0267D9", // hot pink
  accent50: "#0267D9",
  accent100: "#0267D9",
  accent200: "#F89FF3",
  accent300: "#0267D9",
  accent400: "#0267D9",
  accent500: "#0267D9",
  accent600: "#0267D9",
  accent700: "#0267D9",
  primaryFontFamily: "Poppins",
  white: "white",
};

const overrides = {
  colors: {
    // buttonPrimaryFill: "red",
    buttonPrimaryText: "#FFF",
    buttonPrimaryHover: "#44507D",
    buttonSecondaryFill: "#7968C8",
    buttonSecondaryHover: "#998BDC",
    buttonSecondaryText: "#FFF",
    buttonTertiaryFill: "#EC422A",
    buttonTertiaryHover: "#FA6A51",
    buttonTertiaryText: "#FFF",
    buttonDisabledFill: "#D9D9DB",
    buttonDisabledText: "#8E8E92",
    inputFill: "#FFF",
    inputFillPositive: "#FFF",
    inputFillError: "#FFF",
    buttonPrimaryActive: "#0267D9",
    buttonPrimarySelectedFill: "#0267D9",
    buttonSecondarySelectedText: "#0267D9",
    buttonPrimarySpinnerForeground: "#142458",
    buttonSecondarySpinnerBackground: "#142458",
    typography: {
      DisplayLarge: {
        fontFamily: "Poppins",
      },
      DisplayMedium: {
        fontFamily: "Poppins",
      },
      DisplaySmall: {
        fontFamily: "Poppins",
      },
      HeadingLarge: {
        fontFamily: "Poppins",
      },
    },
  },
};
export const CustomTheme = createTheme(primitives, overrides);
