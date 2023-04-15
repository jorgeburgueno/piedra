const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
let scoreJugador = 0;
let scoreMaquina = 0;
let empatados= 0 ;
let ganaPiedra = "Ganaste!, Piedra gana a Tijera"
let ganaTijera = "Ganaste!, Tijera gana a Papel"
let ganaPapel  = "Ganaste!, Papel gana a Piedra"
let pierdePiedra = "Perdiste!, Papel gana a Tijera"
let pierdePapel = "Perdiste!, Tijera gana a Piedra"
let pierdeTijera = "Perdiste!, Piedra gana a Tijera"
let empate = "Empate!"

function getComputerChoise() {
     const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
     return opcionRandom= opcionesDeJuego[Math.floor (Math.random() * opcionesDeJuego.length)];
}
function partida() {
 
  
  let seleccionDelJugador = prompt ('Piedra, Papel o Tijera?');
  let seleccionDeMaquina = getComputerChoise();
  console.log(juego(seleccionDelJugador, seleccionDeMaquina));
  
}


function juego(seleccionDelJugador, seleccionDeMaquina) {

    if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Piedra") {
      scoreMaquina ++;
      return pierdeTijera;}
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Piedra") {
      empatados ++;
      return empate;}    
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Piedra") {
      scoreJugador ++;
      return ganaPapel;}  
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Papel") {
      scoreJugador ++;
      return ganaTijera;}     
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Papel") {
      scoreMaquina ++;
      return pierdePiedra;}     
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Papel") {
      empatados++;
      return empate;} 
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Tijera") {
      empatados++;
      return empate} 
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Tijera") {
      scoreJugador ++;
      return ganaPiedra;} 
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Tijera") {
      scoreMaquina ++;
      return pierdeTijera;} 
    else { return "Vuelve a intentarlo"}
   
  }

function ganador() {
  if (scoreJugador > scoreMaquina && empatados) {
    return "GANASTE!"
  }
  else if (scoreMaquina > scoreJugador && empatados) {
    return "PERDISTE!"
  }
  else if (empatados > scoreJugador && scoreMaquina) {
    return "EMPATADOS!"
  }
  
}
  
partida()
partida()
partida()
partida()
partida()
console.log("Jugador" + " " +scoreJugador);
console.log("Maquina"+" " +scoreMaquina);
console.log("Empates" + " " +empatados)
console.log(ganador())
 