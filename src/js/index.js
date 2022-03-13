/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente

pra isso vamos precisar trabalhar com dois elementos
listagem
cartao pokemon

precisamos criar duas variaveis no JS para trabalhar com os elemtnos da tela

vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemons

-remover a classe aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual o cartao mostrar
-remover a classe ativo que marca o pokemon selecionado
*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () => {
      
      const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

      const idPokemonSelecionado = pokemon.attributes.id.value

      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})