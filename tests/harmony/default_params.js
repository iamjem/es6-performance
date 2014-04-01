var API = {
    methodA: function(b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, a1 = 1, a2 = 2, a3 = 3, a4 = 4, a5 = 5) {
        var numB = this.methodB(b1, b2, b3, b4, b5);
        var numC = this.methodC(c1, c2, c3, c4, c5);
        return numB + numC;
    },

    methodB: function(b1, b2, b3, b4, b5, b6 = 6, b7 = 7, b8 = 8, b9 = 9, b10 = 10){
        return b1 + b2 + b3 + b4 + b5;
    },

    methodC: function(c1, c2, c3, c4, c5, c6 = 6, c7 = 7, c8 = 8, c9 = 9, c10 = 10){
        return c1 + c2 + c3 + c4 + c5;
    }

};

var count = 1000;
var args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
while (count--) {
    API.methodA.apply(API, args);
}
