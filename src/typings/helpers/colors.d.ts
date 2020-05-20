export enum ColorSchema {
  britecharts,
  grey,
  orange,
  blueGreen,
  teal,
  green,
  yellow,
  pink,
  purple,
  red,
}

export type ColorsSchemaHumanType = {
  [key in keyof typeof ColorSchema]: string;
};

export type ColorSchemas = {
  [key in keyof typeof ColorSchema]: string[];
};

export enum ColorGradient {
  greenBlue,
  orangePink,
  bluePurple,
}

export type ColorGradients = { [key in keyof typeof ColorGradient]: string[] };

export type ColorGradientsHuman = {
  [key in keyof typeof ColorGradient]: string;
};

export enum SingleColor {
  aloeGreen,
  greenColor,
  blueColor,
  yellowColor,
  orangeColor,
  pinkColor,
  purpleColor,
}

export type SingleColors = { [key in keyof typeof SingleColor]: string[] };

export type SingleColorsHuman = {
  [key in keyof typeof SingleColor]: string;
};

export const colors: {
  colorSchemas: ColorSchemas;
  colorSchemasHuman: ColorsSchemaHumanType;
  colorGradients: ColorGradients;
  colorGradientsHuman: ColorGradientsHuman;
  singleColors: SingleColors;
  singleColorsHuman: SingleColorsHuman;
};
