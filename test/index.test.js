const OneSpaces = require('../dist/index');

test('basic', () => {
  expect(OneSpaces('cls1', 'cls2')).toBe('cls2 cls1');
});

test('null & undefined', () => {
  expect(OneSpaces('cls1', null, 'cls2', undefined)).toBe('cls2 cls1');
});

test('object', () => {
  expect(OneSpaces({ cls1: true, cls2: false })).toBe('cls1');
});

test('array', () => {
  expect(OneSpaces(['cls1', 'cls2'])).toBe('cls2 cls1');
});

