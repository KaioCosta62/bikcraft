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
  const pergunta = event.currentTarget
  const elemento = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(elemento)
  
  resposta.classList.toggle('ativa')
  const verificaExpansao = resposta.classList.contains('ativa')

  pergunta.setAttribute('aria-expanded', verificaExpansao)

}

function ativarPergunta(pergunta){
  pergunta.addEventListener('click',exibirResposta)
}

perguntas.forEach(ativarPergunta)


// Galeria IMG

const imagens = document.querySelectorAll('.bicicleta-imagens img')
const imagensContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
  const larguraTela = matchMedia("(min-width: 1000px)").matches

  if(larguraTela){
    const img = event.currentTarget
    imagensContainer.prepend(img)
  }
}

function ativarImagens(img){
  img.addEventListener('click', trocarImagem)
}

imagens.forEach(ativarImagens)

if(window.SimpleAnime){
  new SimpleAnime()
}