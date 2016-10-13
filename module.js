var calculate = (function() {
    var i = 0;

    var plus = function(j) {
        i += j;
        return this;
    }
    var minus = function(j) {
        i -= j;
        return this;
    }
    var multiply = function(j) {
        i *= j;
        return this;
    }
    var divide = function(j) {
        i /= j;
        return this;
    }
    var print = function() {
        console.log(i);
    }

    return {
        plus: plus,
        minus: minus,
        multiply: multiply,
        divide: divide,
        print: print
    }

})();

calculate.plus(20).minus(4).multiply(2).divide(4).print();