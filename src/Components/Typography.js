import {
  HeadingLarge,
  HeadingMedium,
  LabelLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from "baseui/typography";

export const Typography = () => {
  const textLine = "Almost before we knew it, we had left the ground.";

  return (
    <>
      <code>Typography</code>
      <HeadingLarge marginTop="scale300" marginBottom="scale100">
        H1: {textLine}
      </HeadingLarge>
      <HeadingMedium marginTop="scale300" marginBottom="scale100">
        H2: {textLine}
      </HeadingMedium>
      <LabelLarge marginTop="scale300" marginBottom="scale100">
        Title: {textLine}
      </LabelLarge>
      <ParagraphMedium marginTop="scale300" marginBottom="scale100">
        Body: {textLine}
      </ParagraphMedium>
      <ParagraphSmall marginTop="scale300" marginBottom="scale100">
        Body Small: {textLine}
      </ParagraphSmall>
      <ParagraphXSmall marginTop="scale300" marginBottom="scale100">
        Caption: {textLine}
      </ParagraphXSmall>
    </>
  );
};
