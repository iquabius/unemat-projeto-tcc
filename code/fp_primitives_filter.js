let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Função que diz se um número é ou não par
let isEven = (n) => n % 2 == 0

// Filtra os números pares
let evenNumbers = numbers.filter(isEven)

//-> [0, 2, 4, 6, 8]
