const OneSpaces = require('../dist/index');

test('basic', () => {
  expect(OneSpaces('cls1', 'cls2')).toBe('cls2 cls1');
});
