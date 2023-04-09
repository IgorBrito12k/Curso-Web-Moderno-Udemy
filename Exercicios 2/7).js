function estaEntre(num, min, max, inclusivo = false) {
    if (num >= min && num < max) {
        inclusivo = true
    } else {
        inclusivo = false
    }
    console.log(inclusivo)
}

estaEntre(50, 50, 100)
estaEntre(16, 100, 160)
estaEntre(2, 3, 150)
estaEntre(3, 3, 150, true)