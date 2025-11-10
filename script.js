function verificar() {
    const n = Number(document.getElementByID('num').value)
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    document.getElementById('res').innerText = 
    n >= 1 && n <= 7 ? `Esse dia é ${dias[n - 1]}` : "Número inválido"
}
