function getComputerChoise(uno, dos, tres) {
     const opcionesDeJuego= ['Piedra', 'Papel', 'Tijera']
     const opcionRandom= Math.floor(Math.random() * opcionesDeJuego.length);
     console.log(opcionesDeJuego[opcionRandom]) 
   
}
getComputerChoise()