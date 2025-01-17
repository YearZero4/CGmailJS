var x0 = document.querySelector('#resultados').textContent;
console.log(x0);
if(x0.length === 0){
    document.getElementById('not-found').innerHTML = '<h1 id="not-found">NO EXISTEN CORREOS GENERADOS</h1>';
} 


function generar() {
const nombres = [
'juan', 'pedro', 'elias', 'ramon', 'david', 'karol', 'carmen', 'snake', 'killah', 'Alcohon',
'dinora', 'josefina', 'jennifer', 'cesar', 'alejandra', 'alejandro', 'marcos', 'mirna', 
'erick', 'venesia', 'emily', 'alberto', 'eibar', 'ivan', 'roberto', 'junior', 'lacra', 
'miguel', 'agustin', 'ghost', 'ryder', 'ranyer', 'pepe', 'argelia', 'miranda', 'cilia', 
'anonymous', 'mus', 'mickey', 'lorena', 'ardiente', 'darkfire', 'dark', 'black', 'nirvana', 
'marduk', 'lmentrix', 'humano', 'perro', 'gato', 'kat', 'cat', 'dog', 'pitbull', 'doberman',
'zone', 'mustang', 'cadillac', 'xxx', 'kawasaki', 'puma', 'leon', 'jaguar', 'oso', 'india', 
'xaomi', 'samsung', 'cristian', 'cristos', 'kripton', 'luxec', 'rat', 'penelope', 'kbron', 
'lebron', 'denzel', 'hanset', 'onichan', 'goku', 'veggeta', 'sayayin', 'pandora', 
'kylian', 'messi', 'cristiano', 'ronaldo', 'cr7ronaldo', 'damian', 'engel', 'demond', 
'daemon', 'xnxx', 'oro', 'metal', 'metalero', 'rockero', 'kiss', 'dorks', 'azazel', 
'belcebu', 'crack', 'libertad', 'anarquia', 'power', 'block', 'electrico', 'android', 
'robot', 'pc', 'cpu', 'software', 'axel', 'shemblack', 'alcohonwhite', 'kasper', 'atom', 
'viajero', 'p443', 'puerto80_', 'puerto8080_', 'puta', 'perrisimo', 'perrisima'
];

const username = document.getElementById('usn').value.trim().replace(' ', '_');
let resultados = '';
const cantidad = parseInt(document.getElementById('num').value) || 10; 

for (let i = 1; i <= cantidad; i++) {
let finalUsername;
if (username.length === 0) {
const nxx = Math.floor(Math.random() * nombres.length); 
finalUsername = nombres[nxx];
} else {
finalUsername = username; 
}
const nal = Math.floor(100000 + Math.random() * 900000);
 resultados += '<div id="resx" onclick="copy(\'' + finalUsername + nal + '@gmail.com\')">' + finalUsername + nal + '@gmail.com' + '</div>';
}
document.getElementById('resultados').innerHTML = resultados;
document.getElementById('not-found').innerHTML = '';
}

function copy(email){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = email;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Texto copiado: ' + email);
}