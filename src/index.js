const stripUnit = val => ({
  value: val.match(/[0-9.]*/)[0],
  unit: val.match(/[a-z|A-Z|%]+/)[0],
});

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
