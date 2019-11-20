const OneSpaces = require('../dist/index');

test('basic', () => {
  expect(OneSpaces('cls1', 'cls2')).toBe('cls2 cls1');
});

test('null & undefined', () => {
  expect(OneSpaces('cls1', null, 'cls2', undefined)).toBe('cls2 cls1');
});

test('array', () => {
  expect(OneSpaces(['cls1', 'cls2'])).toBe('cls2 cls1');
});

test('mix', () => {
  expect(OneSpaces('cls3', null, ['cls1', 'cls2'])).toBe('cls2 cls1 cls3');
});

