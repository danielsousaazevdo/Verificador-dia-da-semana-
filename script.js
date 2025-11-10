function verificar() {
    const n = Number(document.getElementByid('num').value)
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    document.getElementByid('res').innerText = 
    n >= 1 && n <= 7 ? `Esse dia é ${dias[n - 1]}` : "Número inválido"
}
