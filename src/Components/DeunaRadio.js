import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { useState } from "react";

export const DeunaRadio = () => {
  const [value, setValue] = useState("3");
  return (
    <RadioGroup
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      name="number"
      align={ALIGN.vertical}
    >
      <Radio value="1">One</Radio>
      <Radio value="2" description="This is a radio description">
        Two
      </Radio>
      <Radio value="3">Three</Radio>
      <Radio value="4" disabled>
        Three
      </Radio>
    </RadioGroup>
  );
};
