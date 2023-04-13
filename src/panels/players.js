const util = require('minecraft-server-util'); // Importamos la biblioteca minecraft-server-util

const serverIP = 'play-us3.pancadev.com'; // Definimos la dirección IP del servidor
const serverPort = 44514; // Definimos el puerto del servidor

// Función para actualizar la cantidad de jugadores en línea en el elemento HTML correspondiente
function updatePlayerCount(playerCount) {
  const playerCountElement = document.getElementById('player-count'); // Obtenemos el elemento HTML correspondiente
  playerCountElement.textContent = playerCount; // Actualizamos el contenido del elemento con la cantidad de jugadores en línea
}

// Ping al servidor para obtener información en tiempo real, incluyendo la cantidad de jugadores en línea
util.ping(serverIP, serverPort)
  .then((response) => {
    const playerCount = response.players.online; // Obtenemos la cantidad de jugadores en línea
    updatePlayerCount(playerCount); // Actualizamos la cantidad de jugadores en línea en el elemento HTML correspondiente
  })
  .catch((error) => {
    console.error(error); // Si ocurre un error, lo mostramos en la consola
  });
