import { withStyle } from "styletron-react";
import { Input, StyledRoot } from "baseui/input";

const deunaColors = {
  borderTransparent: "transparent",
  borderError: "#EC382C",
  borderGreen: "#69696E",
};

export const RootWithStyle = withStyle(StyledRoot, (props) => {
  const {
    $disabled,
    $error,
    $isFocused,
    $theme: { colors, sizing },
  } = props;
  const borderColor = $disabled
    ? colors.borderTransparent
    : $error
    ? colors.borderError
    : $isFocused
    ? colors.borderGreen
    : "#D9D9DB";
  return {
    borderLeft: $error
      ? `1px solid ${borderColor}`
      : `1px solid ${borderColor}`,
    borderRight: `1px solid ${borderColor}`,
    borderTop: `1px solid ${borderColor}`,
    borderBottom: `1px solid ${borderColor}`,
    backgroundColor: colors.white,
    borderWidth: "1px 1px 0.5px 1px",
    borderRadius: "0px",
    padding: 0,
  };
});
