const stripUnit = (val: string) => {
  if (!val) throw new Error('No value was provided to superior-mq screen size');

  const strVal: any = val.toString();
  const value = strVal.match(/[0-9.]*/)[0];
  const unit = strVal.match(/[a-z|A-Z|%]+/);

  if (!unit) throw new Error('No unit was provided to superior-mq screen size');

  return {
    value,
    unit: unit[0],
  };
};

const below = (size: string, styles: string) => {
  const { value, unit } = stripUnit(size);

  return `@media screen and (max-width: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const above = (size: string, styles: string) => `
  @media screen and (min-width: ${size}) {
    ${styles}
  }
`;

const between = (minSize: string, maxSize: string, styles: string) => {
  const { value, unit } = stripUnit(maxSize);

  return `@media screen and (min-width: ${minSize}) and (max-width: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const belowHeight = (size: string, styles: string) => {
  const { value, unit } = stripUnit(size);

  return `@media screen and (max-height: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const aboveHeight = (size: string, styles: string) => `
  @media screen and (min-height: ${size}) {
    ${styles}
  }
`;

const betweenHeight = (minSize: string, maxSize: string, styles: string) => {
  const { value, unit } = stripUnit(maxSize);

  return `@media screen and (min-height: ${minSize}) and (max-height: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const screen = {
  below,
  between,
  above,
  belowHeight,
  betweenHeight,
  aboveHeight,
};

export default screen;
