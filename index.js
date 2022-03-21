function add(a,b) {
    return a + b;
}

console.log(add(1, 2));

function subtract(a,b) {
    return a - b;
}

console.log(subtract(10, 2));

function multiply(a,b) {
    return a * b;
}

console.log(multiply(5, 5));

function divide(a,b) {
    return a / b;
}

console.log(divide(25, 5));

/*describe('makeInt(n)', function() {
    it('parses n as an integer and returns the parsed integer', function() {
      expect(makeInt(a.toString())).toEqual(a)
    })*/

let n = 0;

function increment(n) {
    n++;
    return n;
}
console.log(increment(n));

function decrement(n) {
    n--;
    return n;
}
console.log(decrement(n));

function makeInt(n) {
    return parseInt(n);

}
console.log(makeInt("10"));
console.log(makeInt("9000"));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal("10.000"));

