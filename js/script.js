// Ativar links do Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
  const href = link.href
  const url = location.href

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}
links.forEach(ativarLink)


// Ativar itens do orcamento
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
  const elemento = document.querySelector(`#${parametro}`)
  if(elemento){
    elemento.checked = true
  }

}
parametros.forEach(ativarProduto)



// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function exibirResposta(event){
  console.log(event.target)
}

function ativarPergunta(pergunta){
  pergunta.addEventListener('click',exibirResposta)
}

perguntas.forEach(ativarPergunta)