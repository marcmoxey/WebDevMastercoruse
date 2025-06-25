const app = require('./app');

test('5 ++2 should be 7', () => {
    expect(app.add(5,2)).toBe(7);
});