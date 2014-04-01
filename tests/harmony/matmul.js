function* range(low, high){
    if (arguments.length === 1) {
        high = low;
        low = 0;
    }
    for (var i = low; i < high; i++) {
        yield i;
    }
}

function sum(nums) {
    var sum = 0;
    for (x of nums) sum += x;
    return sum;
}

function matgen(n) {
    var tmp = 1. / n / n;
    return [ [ tmp * (i - j) * (i + j) for (j of range(n)) ] for (i of range(n)) ];
}

function transpose(a) {
    var m = a.length;
    var n = a[0].length;
    return [ [ a[i][j] for (i of range(m)) ] for (j of range(n)) ];
}

function mul(a, b) {
    var m = a.length, n = a[0].length, s = b.length, t = b[0].length;
    if (n != s) return null;
    var c = transpose(b);
    var x = [ [ sum([ a[i][k] * c[j][k] for (k of range(n)) ]) for (j of range(t)) ] for (i of range(m)) ];
    return x;
}


var n = 100;
var a = matgen(n);
var b = matgen(n);
var c = mul(a, b);