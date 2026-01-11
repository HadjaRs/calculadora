function mostrar(num){
    let input = document.getElementById("valores").value
    document.getElementById("valores").value = input + num
}

function apagar(){
    let input = document.getElementById("valores").value
    document.getElementById("valores").value = " "
}

function negpos(){
   let input = document.getElementById("valores").value
   document.getElementById("valores").value = input * -1
}

function porcent(){
    let input = document.getElementById("valores").value
   document.getElementById("valores").value = eval(input) / 100
}

function result(){
    let input = document.getElementById("valores").value
   document.getElementById("valores").value = eval(input)
}