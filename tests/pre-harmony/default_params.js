var API = {
  methodA: function(b1, b2, b3, b4, b5, c1, c2, c3, c4, c5) {
      var a1 = arguments[10] !== (void 0) ? arguments[10] : 1;
      var a2 = arguments[11] !== (void 0) ? arguments[11] : 2;
      var a3 = arguments[12] !== (void 0) ? arguments[12] : 3;
      var a4 = arguments[13] !== (void 0) ? arguments[13] : 4;
      var a5 = arguments[14] !== (void 0) ? arguments[14] : 5;
      var numB = this.methodB(b1, b2, b3, b4, b5);
      var numC = this.methodC(c1, c2, c3, c4, c5);
      return numB + numC;
  },
  methodB: function(b1, b2, b3, b4, b5) {
      var b6 = arguments[5] !== (void 0) ? arguments[5] : 6;
      var b7 = arguments[6] !== (void 0) ? arguments[6] : 7;
      var b8 = arguments[7] !== (void 0) ? arguments[7] : 8;
      var b9 = arguments[8] !== (void 0) ? arguments[8] : 9;
      var b10 = arguments[9] !== (void 0) ? arguments[9] : 10;
      return b1 + b2 + b3 + b4 + b5;
  },
  methodC: function(c1, c2, c3, c4, c5) {
      var c6 = arguments[5] !== (void 0) ? arguments[5] : 6;
      var c7 = arguments[6] !== (void 0) ? arguments[6] : 7;
      var c8 = arguments[7] !== (void 0) ? arguments[7] : 8;
      var c9 = arguments[8] !== (void 0) ? arguments[8] : 9;
      var c10 = arguments[9] !== (void 0) ? arguments[9] : 10;
      return c1 + c2 + c3 + c4 + c5;
  }
};
var count = 1000;
var args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
while (count--) {
    API.methodA.apply(API, args);
}