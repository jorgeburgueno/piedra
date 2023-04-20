const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
let scoreJugador = 0;
let scoreMaquina = 0;
let empatados= 0 ;


function getComputerChoise() {
     const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
     return opcionRandom= opcionesDeJuego[Math.floor (Math.random() * opcionesDeJuego.length)];
}
function partida(seleccionDelJugador) {

  let seleccionDeMaquina = getComputerChoise();
  console.log(juego(seleccionDelJugador, seleccionDeMaquina));
  
}

const btnPiedra = document.querySelector('#Piedra');
btnPiedra.addEventListener('click', () => {
  partida("piedra")
  scoreGeneral(scoreJugador, scoreMaquina)
  gana(scoreJugador, scoreMaquina)
 });

const btnPapel = document.querySelector('#Papel');
btnPapel.addEventListener('click',  () => {
  partida("papel")
  scoreGeneral(scoreJugador, scoreMaquina)
  gana(scoreJugador, scoreMaquina)
 });

const btnTijera = document.querySelector('#Tijera');
btnTijera.addEventListener('click', () => {
  partida("tijera")
  scoreGeneral(scoreJugador, scoreMaquina)
  gana(scoreJugador, scoreMaquina)
});

const resultadosDiv = document.querySelector ('.resultados');

function juego(seleccionDelJugador, seleccionDeMaquina) {
  
    if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Piedra") {
      scoreMaquina ++;
      const p = document.createElement('p');
      p.innerText = "Pierdes! Piedra vence a Tijera!";
      resultadosDiv.appendChild(p);
    }
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Piedra") {
      empatados ++;
      const p = document.createElement('p');
      p.innerText = "Empate!";
      resultadosDiv.appendChild(p);}    
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Piedra") {
      scoreJugador ++;
      const p = document.createElement('p');
      p.innerText = "Gana Jugador! Papel vence a Piedra!";
      resultadosDiv.appendChild(p);}  
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Papel") {
      scoreJugador ++;
      const p = document.createElement('p');
      p.innerText = "Gana Jugador, Tijera vence a Papel!";
      resultadosDiv.appendChild(p);}     
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Papel") {
      scoreMaquina ++;
      const p = document.createElement('p');
      p.innerText = "Pierdes! Papel vence a Piedra";
      resultadosDiv.appendChild(p);}     
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Papel") {
      empatados++;
      const p = document.createElement('p');
      p.innerText = "Empate!";
      resultadosDiv.appendChild(p);} 
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Tijera") {
      empatados++;
      const p = document.createElement('p');
      p.innerText = "Empate!";
      resultadosDiv.appendChild(p);} 
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Tijera") {
      scoreJugador ++;
      const p = document.createElement('p');
      p.innerText = "Gana Jugador! Piedra vence a Tijera";
      resultadosDiv.appendChild(p);} 
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Tijera") {
      scoreMaquina ++;
      const p = document.createElement('p');
      p.innerText = "Pierdes! Tijera vence a Papel";
      resultadosDiv.appendChild(p);} 
    }
const gana = function (scoreJugador, scoreMaquina){
    if (scoreJugador === 5 || scoreMaquina === 5) {
          if(scoreJugador > scoreMaquina) {
              const h2 = document.createElement('h2');
              h2.classList.add("ganaJugador");
              h2.innerText = 'GANASTE';
              ganador.appendChild(h2); 
    
          }else if (scoreMaquina > scoreJugador) {
              const h2 = document.createElement('h2');
              h2.classList.add("ganaMaquina");
              h2.innerText = 'PERDISTE!';
              ganador.appendChild(h2); 
           }}}
const puntajeJugador = document.querySelector ('#puntajeJugador'); 
const puntajeMaquina = document.querySelector ('#puntajeMaquina'); 

function scoreGeneral () {
  const parra = document.getElementById ("puntajeJugador");
  const parra2 = document.getElementById ("puntajeMaquina");
  
  parra.textContent = `Jugador: ${scoreJugador}`;
  parra2.textContent = `Computadora: ${scoreMaquina}`;
}