function filtrarNumero(array) {
    console.log(array.filter(item => typeof item === 'number'))
}

filtrarNumero(["Javascript", 1, "3", "web", 20])
filtrarNumero(["a", "c"])