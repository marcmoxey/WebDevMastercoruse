// var test = 'hello';
// test = 'goodbye';

// test = 'hello world';

// (function(app) {
//     app.add = (x,y) => x + y; 
//     app.subtract = (x,y) => x - y;
// })(window.app = window.app || {});

// module.exports = app;

const app = {};

app.add = (x, y) => x + y;
app.subtract = (x, y) => x - y;

module.exports = app;
