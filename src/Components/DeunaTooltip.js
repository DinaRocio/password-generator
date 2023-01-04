import * as React from "react";
import { PLACEMENT, StatefulTooltip } from "baseui/tooltip";
import { Input } from "baseui/input";
import { Alert } from "baseui/icon";

export const DeunaTooltip = () => {
  return (
    <StatefulTooltip
      content={() => (
        <div style={{ width: "300px" }}>
          El código CVV es un código de 3 a 4 digitos que se encuentre en la
          parte trasera de la tarjeta, aunque en algunos casos puede estar
          situado en la parte delantera.
        </div>
      )}
      placement={PLACEMENT.topLeft}
      showArrow
      returnFocus
      autoFocus
      overrides={{
        Arrow: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.black,
          }),
        },
        Inner: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.black,
          }),
        },
      }}
    >
      <Alert size={64} />;
    </StatefulTooltip>
  );
};
