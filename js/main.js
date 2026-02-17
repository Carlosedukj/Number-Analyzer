// Busca um elemento específico da página o botão calcular(calc)
const button = document.getElementById("calc");

// Seleciona o input onde o usuário digita os números.
const input = document.getElementById("numbersInput");

// Seleciona a div onde o resultado será exibido
const result = document.getElementById("result");


// Quando o botão for clicado, execute a função.
button.addEventListener("click", function() {

    // Pega o valor digitado dentro do input
    const value = input.value;

    // Divide a string(texto) em array usando vírgula.
    const arrayString = value.split(",");

    // Converte cada item para número.
    const numeros = arrayString.map(Number)
     
    // Criamos um acumulador para a soma.
    let soma = 0;

    // Percorremos o array de números.
    for (let i = 0; i < numeros.length; i++) {

        let atual = numeros[i] // Pega o número atual do loop
        soma += atual; // Soma acumulativa.
    }
   
    // Calcula a média (soma dividida pela quantidade de números)
    let media = soma / numeros.length;

    // Inicializamos maior e menor com o primeiro número do array
    let maior = numeros[0];
    let menor = numeros[0];

    // Percorremos novamente o array para descobrir maior e menor 
    for (let i = 0; i < numeros.length; i++) {

        // Se o número atual for maior que o maior registrado, atualiza
        if (numeros[i] > maior) {
            maior = numeros[i]
        }

        // Se o número atual for menor que o menor registrado, atualiza
        if (numeros[i] < menor ) {
            menor = numeros[i]
        }
    }
    
    result.innerHTML = `
    <p><strong>Soma: </strong> ${soma}</p>
    <p><strong>Média: </strong> ${media}</p>
    <p><strong>Maior número: </strong> ${maior}</p>
    <p><strong>Menor número: </strong> ${menor}</p>
    `
});
