function loadLeaderboard() {

  fetch("backend/leaderboard-data.json")
    .then(response => response.json())
    .then(data => {

      let players = data.players;

      // Sort by score (descending)
      players.sort((a, b) => b.score - a.score);

      let tableBody = document.querySelector("#leaderboardTable tbody");
      tableBody.innerHTML = ""; // clear old rows

      players.forEach((player, index) => {

        let row = document.createElement("tr");

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${player.playerName}</td>
          <td>${player.gameName}</td>
          <td>${player.score}</td>
        `;

        tableBody.appendChild(row);
      });

    })
    .catch(error => {
      document.getElementById("message")
        .innerText = "Error loading leaderboard data.";
      console.error(error);
    });

}

