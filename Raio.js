var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat (lines[0])
const n = 3.14159

var result = n * Math.pow(raio , 2)

var area = result
console.log('A=' + area.toFixed(4))
