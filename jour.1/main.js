let number = document.getElementById("valeur");
const m = document.getElementById("moins");
const r = document.getElementById("reset");
const p = document.getElementById("plus");



let compteur = 0; 

p.addEventListener("click", add);
function add () {
compteur++;
number.innerText = compteur;
    number.style.color = compteur > 0 ? "#34d399" : compteur < 0 ? "#f43f5e" : "#ffffff";
}

m.addEventListener("click", minus);
function minus () {
    compteur--
    number.innerHTML = compteur;
    number.style.color = compteur > 0 ? "#34d399" : compteur < 0 ? "#f43f5e" : "#ffffff";
}

r.addEventListener("click", res);
function res () {
    compteur = 0;
    number.innerHTML = compteur;
    number.style.color = compteur > 0 ? "#34d399" : compteur < 0 ? "#f43f5e" : "#ffffff";
}
