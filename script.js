const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']

function getComputerChoise() {
     const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
     return opcionRandom= opcionesDeJuego[Math.floor (Math.random() * opcionesDeJuego.length)];
}

function eleccionDelJugador() {
  return prompt('Piedra,papel o tijera?');
}


function juego () {

    if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Piedra") {
        alert ("Pierdes!, Piedra gana a Tijera");}
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Piedra") {
      alert ("Empate!");}    
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Piedra") {
      alert ("Tu ganas!, Papel gana a Piedra!");}  
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Papel") {
      alert ("Tu ganas!, Tijera gana a Papel!");}     
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Papel") {
      alert ("Pierdes!,Papel gana a Piedra");}     
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Papel") {
      alert ("Empate!");} 
    else if (seleccionDelJugador.toLowerCase() == "tijera" && seleccionDeMaquina == "Tijera") {
      alert ("Empate");} 
    else if (seleccionDelJugador.toLowerCase() == "piedra" && seleccionDeMaquina == "Tijera") {
      alert ("Tu ganas!, Piedra gana a Tijeras");} 
    else if (seleccionDelJugador.toLowerCase() == "papel" && seleccionDeMaquina == "Tijera") {
      alert ("Pierdes!, Tijera gana a Papel");} 
    
}
  
   



const seleccionDelJugador = eleccionDelJugador();
const seleccionDeMaquina = getComputerChoise();
console.log(juego(seleccionDelJugador, seleccionDeMaquina));