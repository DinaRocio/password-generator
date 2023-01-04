import React, { useState } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { useStyletron } from "styletron-react";
import { StatefulTooltip } from "baseui/tooltip";
import { Alert } from "baseui/icon";

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

export const DeunaBaseInput = () => {
  const [value, setValue] = useState("Hello");
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        // padding: "15px",
      })}
    >
      <div style={{ position: "relative", width: "320px" }}>
        <FormControl
          label="Escribe aquí"
          caption="Caption"
          overrides={getFormOverrides("328px")}
        >
          <>
            <StatefulTooltip
              content={() => <div padding={"20px"}>Hello, there! 👋</div>}
              placement="top"
              returnFocus
              autoFocus
            >
              <Alert style={{ position: "absolute", right: 0, top: "7px" }} />
            </StatefulTooltip>
            <Input
              value={value}
              placeholder="Controlled Input"
              clearOnEscape
              clearable
              overrides={{
                Input: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.white,
                  }),
                },
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.white,
                  }),
                },
                ClearIconContainer: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.white,
                  }),
                },
              }}
            />
          </>
        </FormControl>
      </div>
      <FormControl
        label="label"
        positive
        caption="Caption"
        overrides={getFormOverrides("328px")}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
          clearOnEscape
          clearable
          overrides={{
            Input: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
            Root: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
            ClearIconContainer: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
          }}
        />
      </FormControl>
      <FormControl
        label="label"
        error
        caption="Caption"
        overrides={getFormOverrides("328px")}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
          clearOnEscape
          clearable
          overrides={{
            Input: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
            Root: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
            ClearIconContainer: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
          }}
        />
      </FormControl>
      <FormControl
        label="label"
        caption="Caption"
        disabled
        overrides={getFormOverrides("328px")}
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled Input"
          clearOnEscape
          clearable
        />
      </FormControl>
    </div>
  );
};
