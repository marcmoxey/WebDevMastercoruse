// var test = 'hello';
// test = 'goodbye';

// test = 'hello world';

(function(app) {
    app.add = (x,y) => x + y; 
    app.subtract = (x,y) => y -x;
}) (window.app = window.app || {});

module.exports = app;