function createGame(firstTeam, time, secondTeam) {
  return `
    <li>
      <img src="./assets/flags/icon-${firstTeam}.svg" alt="${firstTeam[0].toUpperCase() + firstTeam.substring(1)}">
      <strong>${time}</strong>
      <img src="./assets/flags/icon-${secondTeam}.svg" alt="${secondTeam[0].toUpperCase() + secondTeam.substring(1)}">
    </li>
  `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard("23/11", "quarta",
    createGame("morroco", "07:00", "croatia") +
    createGame("germany", "10:00", "japan") +
    createGame("spain", "13:00", "costa-rica") +
    createGame("belgium", "16:00", "canada")) +
  createCard("24/11", "quinta",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguay", "10:00", "south-korea") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda",
    createGame("cameroon", "07:00", "serbia") +
    createGame("south-korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")) +
  createCard("02/12", "sexta",
    createGame("south-korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil"));
