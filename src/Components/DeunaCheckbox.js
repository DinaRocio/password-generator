import { Checkbox, LABEL_PLACEMENT, STYLE_TYPE } from "baseui/checkbox";
import { useState } from "react";

export const DeunaCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
        overrides={{
          Checkmark: {
            style: ({ $theme }) => ({
              borderRadius: "4px",
            }),
          },
        }}
      >
        Sign up for the newsletter
      </Checkbox>
      <Checkbox
        disabled
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
        overrides={{
          Checkmark: {
            style: ({ $theme }) => ({
              borderRadius: "4px",
            }),
          },
        }}
      >
        Sign up for the newsletter
      </Checkbox>
      <Checkbox
        checked={checked}
        checkmarkType={STYLE_TYPE.toggle_round}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
        overrides={{
          ToggleTrack: {
            style: ({ $theme }) => ({
              borderRadius: "14px",
              padding: "5px 2px",
            }),
          },
        }}
      >
        Sign up for the newsletter
      </Checkbox>
    </>
  );
};
