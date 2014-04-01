function* range(low, high){
    if (arguments.length === 1) {
        high = low;
        low = 0;
    }
    for (var i = low; i < high; i++) {
        yield i;
    }
}

Math.m = {};

Math.m.T = function(a) { // matrix transpose
    var b = [], m = a.length, n = a[0].length; // m rows and n cols
    for (j of range(n)) b[j] = [];
    for (i of range(m))
        for (j of range(n))
            b[j].push(a[i][j]);
    return b;
}

Math.m.mul = function(a, b) { // matrix mul
    var m = a.length, n = a[0].length, s = b.length, t = b[0].length;
    if (n != s) return null;
    var x = [], c = Math.m.T(b);
    for (i of range(m)) {
        x[i] = [];
        for (j of range(t)) {
            var sum = 0;
            var ai = a[i], cj = c[j];
            for (k of range(n)) sum += ai[k] * cj[k];
            x[i].push(sum);
        }
    }
    return x;
}

function matgen(n) {
    var a = [], tmp = 1. / n / n;
    for (i of range(n)) {
        a[i] = []
        for (j of range(n))
            a[i][j] = tmp * (i - j) * (i + j);
    }
    return a;
}


var n = 100;
var a = matgen(n);
var b = matgen(n);
var c = Math.m.mul(a, b);