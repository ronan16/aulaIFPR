let card = document.querySelectorAll(".card");
let campos = 0;

card.forEach((c, id) => {
    if (id !== 0) {
        card[id].style.transform = "translateX(100%)";
        card[id].style.display = 'none';
    }
});

function proximo() {
    if (campos < card.length - 1) {
        card[campos].style.transform = "translateX(-100%)";
        card[campos].style.opacity = "0";
        setTimeout(() => {
            card[campos-1].style.display = 'none';
        }, 500); // 500ms é o tempo da transição, ajuste conforme necessário

        campos++;

        card[campos].style.display = 'flex';
        card[campos].style.transform = "translateX(0)";
        card[campos].style.opacity = "1";
    }
}

function anterior() {
    if (campos > 0) {
        card[campos].style.display = 'none';
        campos--;

        card[campos].style.transform = "translateX(0)";
        card[campos].style.opacity = "1";
    }
}

//----------------VALIDAÇÃO -----------------//

/*
1- criar um ID para o input q vai ser validado
2- Vincular esse INPUT a uma variável JS
3- Receber o TEXTO daquele elemento
4- Buscar a presença do caractere "ESPAÇO"
5- Verificar se ANTES e DEPOIS do ESPAÇO tem LETRAS
6- TOMAR AS PROVIDÊNCIAS
*/

let campoNome = document.getElementById("nome");

function validaNome(){
    let texto = campoNome.value
    let espaco = texto.indexOf(' ')

    if( espaco != -1 && 
        espaco!= 0 &&  
        espaco != (texto.length-1) ){
        console.log("ACHOU O ESPAÇO")
    }
}





