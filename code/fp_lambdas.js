// A função 'f' chama a função 'g' passando o valor do parâmetro 'x'
// como argumento.
let f = (g, x) => g(x)

// Dois valores são passados a função 'f':
// O primeiro é uma função 'lambda' que retorna 'y + 1'
// O segundo é o numero '99'
let resultado = f((y) => y + 1, 99)
// Ao executar a função 'f', a expressão lambda é vinculada
// a variável 'g', definida na lista de argumentos.
