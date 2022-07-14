const form =  document.getElementById("novoItem")
const lista = document.getElementById("lista")


//possibilita consultar itens no localStorage
const itens = localStorage.getItem("itens") || []

//percorre uma array resgatando os valores que tem nela
itens.forEach( (elemento) => {
   criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    //preventDefault - para o comportamento padrão do evento
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(itemAtual)


    itens.push(itemAtual)


    //criado para inserir o objeto ao localStorage
    localStorage.setItem("itens", JSON.stringify(itens))


    //zera a caixa em que a pessoa digita para armazenar os nomes e quantidade
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome
    
    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade

    }

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
    




}