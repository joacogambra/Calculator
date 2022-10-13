let displayValorAnterior = document.getElementById('valor-anterior')
let displayValorActual = document.getElementById('valor-actual')
let botonesNumeros = document.querySelectorAll('.numero')
let botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})