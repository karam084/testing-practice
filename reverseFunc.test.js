const reverseString = require('./reverseFunction');
test('return reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
