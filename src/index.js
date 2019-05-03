const stripUnit = (val) => {
  if (!val) throw new Error('No value was provided to superior-mq screen size');

  const strVal = val.toString();
  const value = strVal.match(/[0-9.]*/)[0];
  const unit = strVal.match(/[a-z|A-Z|%]+/);

  if (!unit) throw new Error('No unit was provided to superior-mq screen size');

  return {
    value,
    unit: unit[0],
  };
};

const below = (size, styles) => {
  const { value, unit } = stripUnit(size);

  return `@media screen and (max-width: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const above = (size, styles) => `
  @media screen and (min-width: ${size}) {
    ${styles}
  }
`;

const between = (minSize, maxSize, styles) => {
  const { value, unit } = stripUnit(maxSize);

  return `@media screen and (min-width: ${minSize}) and (max-width: ${value - 1}${unit}) {
    ${styles}
  }`;
};

const screen = {
  below,
  between,
  above,
};

module.exports = screen;
