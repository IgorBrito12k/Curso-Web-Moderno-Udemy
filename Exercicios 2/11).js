function receberPrimiroEUltimoElemento(array) {
    array.splice(1, 1)
    console.log(array)
}

receberPrimiroEUltimoElemento([7, 14, "olá"])
receberPrimiroEUltimoElemento([-100, "aplicativo", 16])