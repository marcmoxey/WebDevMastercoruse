const app = require('./app');

test('5 + 2 should be 7', () => {
  expect(app.add(5, 2)).toBe(7);
});

test('8 - 5 should be 3', () => {
  expect(app.subtract(8, 5)).toBe(3); // <-- FIXED
});
