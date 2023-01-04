import React from "react";
import { FormControl } from "baseui/form-control";
import { PaymentCard, valid } from "baseui/payment-card";
import { useStyletron } from "styletron-react";
import { MaskedInput } from "baseui/input";
import { RootWithStyle } from "./styles";
import { HeadingXSmall } from "baseui/typography";
import { StyledDivider, SIZE } from "baseui/divider";
import { Alert } from "baseui/icon";
import { StatefulTooltip } from "baseui/tooltip";

function getFormOverrides(width) {
  return {
    ControlContainer: {
      style: {
        width,
        margin: 0,
      },
    },
  };
}

const DeunaInput = () => {
  const [number, setNumber] = React.useState("");
  const [expiration, setExpiration] = React.useState();
  const [code, setCode] = React.useState();
  const [css] = useStyletron();
  const { card } = valid.number(number);
  let codeLength;
  if (card && card.code && card.code.size) {
    codeLength = card.code.size;
  }
  return (
    <>
      <code>Card Input</code>
      <HeadingXSmall marginTop="scale300" marginBottom="scale100">
        {" "}
        Número de tarjeta
      </HeadingXSmall>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          width: "328px",
          border: "1px solid #D9D9DB",
          borderRadius: "4px",
          marginTop: "20px",
        })}
      >
        <FormControl overrides={getFormOverrides("328px")}>
          <PaymentCard
            style={{ borderWidth: "1px 1px 3.5px 1px", borderColor: "pink" }}
            overrides={{
              Root: { component: RootWithStyle },
            }}
            value={number}
            onChange={(event) => setNumber(event.currentTarget.value)}
            placeholder="1234 1234 8975 4321"
          />
        </FormControl>
        <StyledDivider
          $size={SIZE.cell}
          color="transparent"
          width="100%"
          style={{ margin: 0 }}
        />
        <div
          className={css({
            display: "flex",
            alignContent: "center",
          })}
        >
          <FormControl overrides={getFormOverrides("164px")}>
            <MaskedInput
              overrides={{ Root: { component: RootWithStyle } }}
              error={Boolean(
                expiration &&
                  Boolean(expiration.length) &&
                  !valid.expirationDate(expiration).isPotentiallyValid
              )}
              value={expiration}
              onChange={(event) => setExpiration(event.currentTarget.value)}
              placeholder="Vencimiento"
              mask="99/99"
            />
          </FormControl>

          <FormControl overrides={getFormOverrides("164px")}>
            <MaskedInput
              overrides={{ Root: { component: RootWithStyle } }}
              error={Boolean(
                code &&
                  Boolean(code.trim().length) &&
                  !valid.cvv(code, codeLength).isPotentiallyValid
              )}
              value={code}
              onChange={(event) => setCode(event.currentTarget.value)}
              placeholder="CVC / CVV"
              mask={codeLength ? "9".repeat(codeLength) : "999"}
              style={{ borderLeft: "1px solid #D9D9DB " }}
              endEnhancer={
                <StatefulTooltip
                  content={() => <div padding={"20px"}>Hello, there! 👋</div>}
                  placement="top"
                  returnFocus
                  autoFocus
                >
                  <Alert />
                </StatefulTooltip>
              }
            />
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default DeunaInput;
