// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen

let hora=new Date().getHours();
let saludo;

console.log(hora);

if (hora < 12){
    saludo="Buen día!";    
} else if (hora < 20) {
    saludo="Buenas tardes!";
} else {
    saludo="Buenas noches!";
}

document.getElementById("saludo").innerHTML = saludo;
