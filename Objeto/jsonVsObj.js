const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
//transformar objeto em json
console.log(JSON.stringify(obj))
//transformar json em objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));

console.log(JSON.parse('{ "a": 1, "b": "Sring", "c": true, "d": {}, "e": [] }'))