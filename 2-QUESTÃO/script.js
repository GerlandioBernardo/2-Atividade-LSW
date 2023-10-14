let input = document.querySelector("#input")
let ul = document.querySelector("#ul")
input.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        let li = document.createElement("li")
        let conteudo = input.value
        li.textContent=conteudo
        ul.appendChild(li)
        let button = document.createElement("button")
        button.textContent="X"
        li.appendChild(button)
        button.addEventListener("click",function(){
            ul.removeChild(li)
            li.removeChild(button)
        })
        }
})