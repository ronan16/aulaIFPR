//Variáveis globais
let vez = "X"

//                PegarElementoPeloId(ID DO HTML)
let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")
let q4 = document.getElementById("q4")
let q5 = document.getElementById("q5")
let q6 = document.getElementById("q6")

let st = document.getElementById("status")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")

function verificaVitoria(){
    if( q1.innerText == "X" && q2.innerText == "X" && q3.innerText == "X" ){
        st.innerHTML = "<b>X Venceu </b><br>"+
        "<button onclick='resetar()'>RESETAR</button>"
        r1.innerText = parseInt(r1.innerText)+1

    }else if(q1.innerText == "O" && q2.innerText == "O" && q3.innerText == "O" ){
        st.innerHTML = "<b>O Venceu </b><br>"+
        "<button onclick='resetar()'>RESETAR</button>"
        r2.innerText = parseInt(r2.innerText)+1        
    }
}


function mudaQuadradinho(quadradinho){
    if(quadradinho.innerText == ""){
        if(vez == "X"){
            quadradinho.innerText = "X"
            vez = "O"
        }else{
            quadradinho.innerText = "O"
            vez = "X"
        }

        verificaVitoria()
    }
}

function resetar(){
    q1.innerText = ""
    q2.innerText = ""
    q3.innerText = ""
    q4.innerText = ""
    q5.innerText = ""
    q6.innerText = ""
}