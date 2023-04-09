const quaseArray = { 0: 'Igor', 1: 'Camila', 2: 'Thalita' }
console.log(typeof quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['igor', 'Camila', 'Thalita']
console.log(`Simulando o array com um objeto:\n${quaseArray.toString()}\nEste é o Array:\n${meuArray}`)