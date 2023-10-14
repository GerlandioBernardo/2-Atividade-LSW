let nome= document.querySelector("#nome")
let salario= document.querySelector("#salario")
let lista= document.querySelector("#lista")
let arrayAdicionar=[]
function adicionar(){
  ColocarPessoaArray(nome.value, salario.value);
  somaSalarios();
  PessoaComMaiorSalario();
}
function ColocarPessoaArray(nome,  salario){
  let objetoAdicionar={
    nome: nome, 
    salario: salario
  }
  arrayAdicionar.push(objetoAdicionar);
  console.log(arrayAdicionar);
  let li = document.createElement("li");
  li.textContent= ` Nome : ${nome} , salario: ${salario}`;
  lista.appendChild(li);
}
function somaSalarios(){
  let somaSalar= arrayAdicionar.reduce((total, soma) => total += Number(soma.salario),0);
  let li2= document.createElement("li");
  li2.textContent= ` A soma é: ${somaSalar}`;
  lista.appendChild(li2);
}
function PessoaComMaiorSalario(){
  let pessoaMaiorSalario =0;
  let nomePessoaMaior=" ";
  arrayAdicionar.forEach((element)=>{
    if(Number(element.salario) > pessoaMaiorSalario){
      pessoaMaiorSalario= Number(element.salario);
      nomePessoaMaior= element.nome;
    }
  })
  let li3 = document.createElement("li");
  li3.textContent= `Pessoa com maior salario é : ${nomePessoaMaior}`;
  lista.appendChild(li3);
}


