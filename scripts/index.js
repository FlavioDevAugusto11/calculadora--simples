function calcular(n1, n2, selector) {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value

    selector = document.getElementById("selector").value

    switch(selector) {
        case "+":
            calculo = (Number(n1) + Number(n2))
            document.getElementById("resultado").innerHTML = `O resultado da soma entre ${n1} + ${n2} é igual ${calculo}`
            break
        case "-":
            calculo = (Number(n1) - Number(n2))
            document.getElementById("resultado").innerHTML = `O resultado da subtração entre ${n1} - ${n2} é igual ${calculo}`
            break
        case "*":
            calculo = (Number(n1) * Number(n2))
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação entre ${n1} x ${n2} é igual ${calculo}`
            break
        case "/": 
            calculo = Math.round((Number(n1) / Number(n2)))
            if (Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = `Insira um divisivel válido`
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da divisão entre ${n1} / ${n2} é igual ${calculo}`
                break
            }
    }
}