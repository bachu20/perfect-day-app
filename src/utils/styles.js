export const colors = {
  black: "#21201F",
  white: "#FFFFFF",
  grey: "#F1F3F7",
  blue: "#3993CB",
};

const defaultSpacer = 5;

const spacers = {
  1: defaultSpacer,
  2: defaultSpacer * 2,
  3: defaultSpacer * 3,
  4: defaultSpacer * 4,
  5: defaultSpacer * 5,
  6: defaultSpacer * 6,
};

spacers.get = function (num = 1) {
  return spacing[num];
};

export const spacing = spacers;
