const button = document.querySelector("button");
const p = document.querySelector("p");


let contador = 0 ; 

button.addEventListener("click" , function(){
    //console.log("Hello World");
    contador ++; 
    p.innerText = contador;
});