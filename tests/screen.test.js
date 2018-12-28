const screen = require('../src/index');

const belowTest = screen.below('600px', 'font-size: 12px;').trim();
const belowResult = `
  @media screen and (max-width: 599px) {
    font-size: 12px;
  }
`.trim();

test('Screen below', () => {
  expect(belowTest).toBe(belowResult);
});

const aboveTest = screen.above('600px', 'font-size: 16px;').trim();
const aboveResult = `
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`.trim();

test('Screen above', () => {
  expect(aboveTest).toBe(aboveResult);
});

const betweenTest = screen.between('600px', '800px', 'font-size: 14px;').trim();
const betweenResult = `
  @media screen and (min-width: 600px) and (max-width: 799px) {
    font-size: 14px;
  }
`.trim();

test('Screen between', () => {
  expect(betweenTest).toBe(betweenResult);
});
