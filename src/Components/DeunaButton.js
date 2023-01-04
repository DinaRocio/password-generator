import { useStyletron } from "styletron-react";
import { Button, KIND } from "baseui/button";
import { Alert, ArrowRight, Upload } from "baseui/icon";
import ChevronDown from "baseui/icon/chevron-down";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { FormControl } from "baseui/form-control";
import { StatefulTooltip } from "baseui/tooltip";
const ITEMS = [
  { label: "Item One" },
  { label: "Item Two" },
  { label: "Item Three" },
  { label: "Item Four" },
  { label: "Item Five" },
  { label: "Item Six" },
  { label: "Item Seven" },
  { label: "Item Eight" },
  { label: "Item Nine" },
  { label: "Item Ten" },
  { label: "Item Eleven" },
  { label: "Item Twelve" },
];

export const DeunaButton = () => {
  const [css] = useStyletron();
  const buttonText = "Placeholder";
  return (
    <>
      <code>Button</code>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "123px",
            gap: "10px",
            padding: "15px",
          })}
        >
          <Button onClick={() => alert("click")}>{buttonText}</Button>
          <Button onClick={() => alert("click")} kind={KIND.secondary}>
            {buttonText}
          </Button>
          <Button onClick={() => alert("click")} kind={KIND.tertiary}>
            {buttonText}
          </Button>
          <Button
            onClick={() => alert("click")}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  outline: `1px ${$theme.colors.warning600} solid`,
                  backgroundColor: "transparent",
                  color: $theme.colors.buttonPrimaryFill,
                  borderRadius: "6px",
                }),
              },
            }}
          >
            {buttonText}
          </Button>
          <Button onClick={() => alert("click")} disabled>
            {buttonText}
          </Button>
          <Button onClick={() => alert("click")} isLoading={true}>
            {buttonText}
          </Button>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "200px",
            gap: "10px",
            padding: "15px",
          })}
        >
          <Button startEnhancer={() => <ArrowRight size={24} />}>
            {buttonText}
          </Button>
          <Button endEnhancer={() => <Upload size={24} />}>End Enhancer</Button>
          <div style={{ position: "relative" }}>
            <FormControl label="Label" caption="Caption">
              <>
                <StatefulTooltip
                  content={() => <div padding={"20px"}>Hello, there! 👋</div>}
                  placement="top"
                  returnFocus
                  autoFocus
                >
                  <Alert
                    style={{ position: "absolute", right: 0, top: "7px" }}
                  />
                </StatefulTooltip>
                <StatefulPopover
                  focusLock
                  placement={PLACEMENT.bottomLeft}
                  popoverMargin={0}
                  content={({ close }) => (
                    <StatefulMenu
                      items={ITEMS}
                      onItemSelect={() => close()}
                      overrides={{
                        List: {
                          style: {
                            height: "150px",
                            width: "200px",
                            boxShadow: "none",
                            border: "1px solid #D9D9DB",
                            borderRadius: "0px",
                          },
                        },
                      }}
                    />
                  )}
                >
                  <Button
                    endEnhancer={() => <ChevronDown size={24} />}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          outline: `1px ${$theme.colors.warning600} solid`,
                          backgroundColor: "transparent",
                          color: $theme.colors.buttonPrimaryFill,
                          borderRadius: "4px",
                          height: "36px",
                          width: "200px",
                        }),
                      },
                    }}
                  >
                    {buttonText}
                  </Button>
                </StatefulPopover>
              </>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};
