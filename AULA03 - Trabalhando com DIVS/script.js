//VARIAVEL --> POUCO TIPADA
const nome = "Ronan" //Constantes

 //Mais moderno - Exige ser criada antes de usar
let sobrenome

//Não exige ser criada antes de usar (não da erro) 
var  idade = "Teste" 

//----------------------------------------------
//COMANDOS CONDICIONAIS

/*
if(CONDICAO){
    COMANDOS
}
*/

let numero = 100
if(numero >50){
    //SE VERDADEIRO
}else if(numero <10){
    //SE FALSO NA PRIMEIRA E VERDADEIRO NA SEGUNDA
}else{
    //SE FALSO EM AMBAS
}

//IF TERNÁRIO
// CONDIÇÃO ? VERDADEIRO : FALSO
 numero>50 ? alert("Verdade"): alert("mentira")


//SWITCH CASE
 switch (numero) {
    case 100:
        alert("Entrou no 100")
        break;
    case 50:
        alert("Entrou no 50")

        break;
    case 10:
        alert("Entrou no 10")
        break;
 
    default:
        alert("Numero diferente de 10, 50 ou 100")
        break;
 }

//-----------------------------------------------
// LAÇO DE REPETICAO

//FOR - Mais organizado - Inicio e fim determinados

//FOR(VLR_INICIAL; CONDICAO DE PARADA; INCREMENTO){}

for(let i=0; i<10; i++){
    //Códigos incríveis
}


//WHILE - Mais Maleável - Permite laços INFINITOS

//WHILE(Condição){ COMANDO QUE PROVOCA A PARADA }

while(numero >10){
    numero++ // mesma coisa de numero = numero+1
    numero -=10 //Mesma coisa de numero = numero-10
}
console.log("DO WHILE")
let valor = 5
do{
    console.log(valor)
    valor--
}while(valor>10)

valor=5
console.log(" WHILE")
while(valor>10){
    console.log(valor)
    valor--
}

//---------------------------------------------
//FUNCAO

//function nome(parametros){codigos}
function salvar(nome, idade){
    console.log(`Nome: ${nome} 
                 Idade ${idade}`)
} //FIM DA FUNÇÃO

salvar("Ronan", 30)


