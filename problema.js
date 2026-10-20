document.addEventListener("DOMContentLoaded", () => {
const d = document.getElementById("descripcion");
const da = document.getElementById("datos");
const f = document.getElementById("formula");
const p = document.getElementById("procedimiento");
const r = document.getElementById("resultado");
const b = document.getElementById("boton");

const d1 = document.getElementById("descripcion");
const da1 = document.getElementById("datos");
const f1 = document.getElementById("formula");
const p1 = document.getElementById("procedimiento");
const r1 = document.getElementById("resultado");
const b1 = document.getElementById("boton");

const d2 = document.getElementById("descripcion");
const da2 = document.getElementById("datos");
const f2 = document.getElementById("formula");
const p2 = document.getElementById("procedimiento");
const r2 = document.getElementById("resultado");
const b2 = document.getElementById("boton");

d.textContent = "un auto experimenta una aceleracion uniforme";
d.innerHTML = "velocidadinicial = 0m/s<br>velocidadfinal = 20 m/s<br>tiempo = 4 s";
f.textContent = "a=(vf-vi)/t";
p.textContent = "calcular a=(20-0)/4";
r.textContent = "";

d1.textContent = "Un tren reduce su velocidad de 60 km/h a 20 km/h en un tiempo de 8 segundos. Encontrar la aceleración en unidades del SI.";
da1.innerHTML = "velocidadinicial = 16m/s<br>velocidadfinal = 5.56 m/s<br>tiempo = 8 s";
f1.textContent = "aceleracion = (velocidadfinal - velocidadinicial) / tiempo";
p1.textContent = "calcular a=(5.56-16.67)/8";
r1.textContent = "";

d2.textContent = "una flecha se acelera de cero a 40 m/s en 0.5 que permanece en contacto con la cuerda del arco.¿cual es su aceleracion?";
da2.innerHTML = "velocidadinicial = 0m/s<br>velocidadfinal = 40m/s<br>tiempo = 0.5s";
f2.textContent = "aceleracion = (velocidadfinal - velocidadinicial) / tiempo";
p2.textContent = "calcular a=(0m/s-40m/s)/0.5";
r2.textContent = " 80 m/s²";


console.log("descripcion:", d.textContent);
console.log("datos:", da.textContent);
console.log("formula:", f.textContent);
console.log("calculo:", p.textContent);
console.log("descripcion:", d1.textContent);
console.log("datos:", da1.textContent);
console.log("formula:", f1.textContent);
console.log("calculo:", p1.textContent);
console.log("descripcion:", d2.textContent);
console.log("datos:", da2.textContent);
console.log("formula:", f2.textContent);
console.log("calculo:", p2.textContent);


function mostrar() {
r.textContent = "aceleracion = 5/s^2"
r1.textContent = "aceleracion = -1.39 m/s^2s"
console.log("resultado al final:", r.textContent,r1.textContent);
}

b.addEventListener("click", mostrar);
});

