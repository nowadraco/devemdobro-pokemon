/* objetivo 1 - quando clicarmos na seta de avançar temos que mostra o próximo cartão da lista  
        - passo 1 dar um jeito de pegar o elemento da seta de avançar 
        - passo 2 dar um jeito de identificar o clique da seta avançar
        - passo 3 fazer aparecer o próximo cartão da lista 
        - passo 4 buscar o cartão que esta selecionado e esconder  

   objetivo 2 - quando clicarmos na seta de voltar temos que mostra o cartão anterior da lista  
        - passo 1 dar um jeito de pegar o elemento da seta de voltar 
        - passo 2 dar um jeito de identificar o clique da seta voltar
        - passo 3 fazer aparecer o próximo cartão da lista 
        - passo 4 buscar o cartão que esta selecionado e esconder       
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnvoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cataoSelecionado = document.querySelector('.selecionado')
    cataoSelecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnvoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
