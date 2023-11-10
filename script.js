alert(`
Nesse programa iremos calcular as seguintes operações matemáticas entre dois números:

Soma;
Subtração;
Multiplicação;
Divisão;
Resto da divisão;

Além disso, iremos verificar se o resultado da soma entre os dois números é par ou ímpar e se os dois números informados são iguais ou diferentes.
`)

let numberOne = prompt (`Informe o primeiro número`)
let numberTwo = prompt (`Informe o segundo número`)

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let restDiv = numberOne % numberTwo

let sameOrDifferent
let parImpar

if(numberOne === numberTwo) {
  sameOrDifferent = "iguais"
} else {
  sameOrDifferent = "diferentes"
}


if(sum % 2 === 0) {
  parImpar = "par"
} else {
  parImpar = "ímpar"
}

alert(`
Os dois números informados são ${sameOrDifferent};
O resultado da soma entre eles é ${sum} e é um numero ${parImpar};
O resultado da subtração entre eles é ${sub};
O resultado da multiplicação entre eles é ${mult};
O resultado da divisão entre eles é ${div};
O resto da divisão entre eles é ${restDiv}.
`)


