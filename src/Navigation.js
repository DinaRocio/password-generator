import { styled } from "baseui";
import * as React from "react";

export const StyledLink = styled("a", ({ $theme, $isExternal }) => ({
  textDecoration: "none",
  color: $theme.colors.accent,
  ":after": {
    content: $isExternal ? "🔗" : "",
  },
}));

export default function Navigation() {
  return (
    <ul>
      <li>
        <StyledLink href="https://www.uber.com">Move</StyledLink>
      </li>
      <li>
        <StyledLink href="https://www.ubereats.com" $isExternal>
          Eats
        </StyledLink>
      </li>
      <li>
        <StyledLink href="https://www.uber.com/us/en/atg/">ATG</StyledLink>
      </li>
    </ul>
  );
}
