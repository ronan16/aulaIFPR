
function lerFormulario(){

    let formulario = document.querySelectorAll("input")
    let espaco = document.getElementById("espaco")
    let saldo = formulario[0].value - formulario[1].value
    
    espaco.innerHTML = `Seu saldo é de:<span id="saldo">${saldo}</span>`
    
    if(saldo>0){
       document.getElementById("saldo").classList.add("verde")
    }else{       
        document.getElementById("saldo").classList.add("vermelho")

    }
}