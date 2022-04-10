// pegar o input
// se for Sim, mostra as categorias disponíveis, pergunta qual categoria ea escolhe
// Se não, mostra todos os jogos em ordem crescente pelo quantidade de horas
const jogos = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um jogo?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias diponíveis:')
    console.log('Action RPG', 'MOBA')
    
    const entradaCategoria = readline.question('Qual categoria voce escolhe:')
    
    const retorno = jogos.filter(jogo => jogo.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const jogosOrdenados = jogos.sort((a,b) => a.horasDeJogo - b.horasDeJogo)
    console.log('Esses são todos os jogos disponíveis')
    console.table (jogosOrdenados)
}
// Acessar informações dentro de estrututa de dados com um array de objetos
// Treinar os metodos de iteração filter e sort
// Criar uma sequencia logica de passos pra retornar informações sobre jogos que guardei
// nessa "simulação" de base de dados
// Como iniciar um projeto node com NPM INIT
// Como instalar uma dependencia a redline sync pra pegar input de usuarios pelo terminal
// Script de start no package json
// Ignorar a pasta node_modules



