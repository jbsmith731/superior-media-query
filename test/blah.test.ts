import screen from '../src';

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

const belowHeightTest = screen.belowHeight('600px', 'font-size: 12px;').trim();
const belowHeightResult = `
  @media screen and (max-height: 599px) {
    font-size: 12px;
  }
`.trim();

test('Screen belowHeight', () => {
  expect(belowHeightTest).toBe(belowHeightResult);
});

const aboveHeightTest = screen.aboveHeight('600px', 'font-size: 16px;').trim();
const aboveHeightResult = `
  @media screen and (min-height: 600px) {
    font-size: 16px;
  }
`.trim();

test('Screen aboveHeight', () => {
  expect(aboveHeightTest).toBe(aboveHeightResult);
});

const betweenHeightTest = screen.betweenHeight('600px', '800px', 'font-size: 14px;').trim();
const betweenHeightResult = `
  @media screen and (min-height: 600px) and (max-height: 799px) {
    font-size: 14px;
  }
`.trim();

test('Screen betweenHeight', () => {
  expect(betweenHeightTest).toBe(betweenHeightResult);
});
