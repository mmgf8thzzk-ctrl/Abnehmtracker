const gewicht = document.getElementById("gewicht");
const ziel = document.getElementById("ziel");

const ziel2=document.getElementById("ziel2");

const percent=document.getElementById("percent");

const datum=document.getElementById("datum");

const checkboxes = document.querySelectorAll("input[type=checkbox]");

const button = document.querySelector(".button");

let scoreElement = document.getElementById("score");

if(!scoreElement){

scoreElement=document.createElement("h2");

scoreElement.id="score";

scoreElement.style.marginTop="20px";

document.querySelector(".card:last-child").appendChild(scoreElement);

}

function update(){

let rest=(gewicht.value||95)-82;

if(rest<0){

rest=0;

}

ziel.innerHTML=rest.toFixed(1)+" kg";

  ziel2.innerHTML=rest.toFixed(1);

let fortschritt=((95-(gewicht.value||95))/13)*100;

fortschritt=Math.max(0,Math.min(100,fortschritt));

percent.innerHTML=Math.round(fortschritt)+"%";

document.querySelector(".circle").style.background =
`conic-gradient(#22C55E ${fortschritt*3.6}deg,#334155 0deg)`;

  const prozent=((95-(gewicht.value||95))/13)*100;

document.getElementById("bar").style.width=Math.max(0,Math.min(100,prozent))+"%";

let score=0;

checkboxes.forEach(cb=>{

if(cb.checked){

score++;

}

});

scoreElement.innerHTML="✅ "+score+" / 7 Ziele";

}

function speichern(){

const daten={

gewicht:gewicht.value,

checks:[...checkboxes].map(c=>c.checked)

};

localStorage.setItem("abnehmtracker",JSON.stringify(daten));

}

function laden(){

const daten=JSON.parse(localStorage.getItem("abnehmtracker"));

if(!daten) return;

gewicht.value=daten.gewicht;

checkboxes.forEach((cb,i)=>{

cb.checked=daten.checks[i];

});

update();

}

gewicht.addEventListener("input",()=>{

update();

speichern();

});

checkboxes.forEach(cb=>{

cb.addEventListener("change",()=>{

update();

speichern();

});

});

button.addEventListener("click",()=>{

speichern();

alert("Gespeichert 👍");

});

laden();

update();

const heute=new Date();

datum.innerHTML=heute.toLocaleDateString("de-DE",{

weekday:"long",

day:"numeric",

month:"long"

});
