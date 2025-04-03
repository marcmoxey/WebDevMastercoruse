(function(app){
    'use strict';
    app.divide = function(x,y) {
        //console.log(x/y);
        
        return x / y
    };

    app.complicatedFormula = function(x) {
        let result = x * 3 + 2;
        //console.log(result);
        result += 4;
        //console.log(result);
        result = this.divide(result,2)
        //console.log(result);
        return result;
    }
})(window.app = window.app || {});

console.log(app.complicatedFormula(23));
console.log("Hello from our app");


// console.error('This is an error')
// console.warn("This is a warning");


// 23 * 3 = 69 
// 69 + 2 = 71 
// 71 + 4 = 75
// 75 / 2 = 37.5