const OneSpaces = require('../dist/index');

test('basic', () => {
  expect(OneSpaces('cls1', 'cls2', 'cls3')).toBe('cls3 cls2 cls1');
});

test('falsy', () => {
  expect(OneSpaces('cls1', null, 'cls2', false && 'none', true && 'cls3')).toBe('cls3 cls2 cls1');
});

test('array', () => {
  expect(OneSpaces(['cls1', 'cls2'], ['cls3'])).toBe('cls3 cls2 cls1');
});

test('mix', () => {
  expect(OneSpaces(['cls1', 'cls2'], null, 'cls3')).toBe('cls3 cls2 cls1');
});

