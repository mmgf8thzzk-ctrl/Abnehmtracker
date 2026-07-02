const gewicht = document.getElementById("gewicht");
const ziel = document.getElementById("ziel");

gewicht.addEventListener("input", () => {

let rest = (gewicht.value - 82).toFixed(1);

if(rest < 0){

rest = 0;

}

ziel.innerHTML = rest + " kg";

});
