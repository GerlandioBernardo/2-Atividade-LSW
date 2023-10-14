let num= document.querySelector("#input1")
let separ= document.querySelector("#input2")
let resposta= document.querySelector("#resposta")
let button = document.querySelector("#button")
button.addEventListener("click", function(){
    let numeros= num.value
    let separador= separ.value 
    let array = numeros.split(separador)
    let maior = Math.max(...array)
    let menor = Math.min(...array)
    resposta.textContent= "O menor número é:  "  + menor +  " O maior número é: "  + maior
})