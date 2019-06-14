export function themeValue(path: string, theme: object): any {
  let currentValue: any = theme;
  path.split('.').forEach(val => {
    if (typeof currentValue === 'object' && currentValue.hasOwnProperty(val)) {
      currentValue = currentValue[val];
    } else {
      currentValue = undefined;
    }
  });

  return currentValue;
}

export function color(props: any) {
  const { theme, color } = props;

  if (color) {
    const colorValue: string | undefined = themeValue(`colors.${color}`, theme);
    const textColorValue: string | undefined = themeValue(
      `colors.text.${color}`,
      theme
    );

    if (textColorValue || colorValue || color) {
      return {
        color: textColorValue || colorValue || color,
      };
    }
  }

  return;
}

export function fontSize(props: any) {
  const { theme, size } = props;

  if (size) {
    const sizeValue: string | undefined = themeValue(
      `fontSizes.${size}`,
      theme
    );

    if (sizeValue) {
      return {
        fontSize: sizeValue,
      };
    }
  }

  return;
}
