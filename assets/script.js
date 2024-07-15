/*
// Sélectionner toutes les lignes du tbody de la table
const rows = document.querySelectorAll("#table1 tbody tr");

// Initialiser les tableaux pour les labels et les données
const labels = [];
const data = [];

// Parcourir les lignes et extraire les données
for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].querySelectorAll("td");
  labels.push(cells[0].textContent);
  data.push(Number(cells[1].textContent));
}*/

document.addEventListener("DOMContentLoaded", () => {
  // Premier tableau

  const table1_full = document.getElementById("table1");
  const t1_tr = table1_full.querySelectorAll("tbody tr");

  const labels = [];
  const data = [];

  // Itérer sur chaque row pour extraire la data avec for
  for (let i = 0; i < t1_tr.length; i++) {
    const row = t1_tr[i];
    const cells = row.querySelectorAll("td");
    if (cells.length > 0) {
      labels.push(cells[0].innerText); // Extrairent les données
      data.push(parseFloat(cells[1].innerText)); // Extrairent les données + conversion en chiffre
    }
  }

  const ctx = document.getElementById("chartCanvas1").getContext("2d"); // utiliser le canvas de l'HTML et faire le graph
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Values",
          data: data,
          borderWidth: 3,
          backgroundColor: "rgba(75, 192, 192, 1)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // deuxieme tableau
  const table2_full = document.getElementById("table2");
  const t1_tr2 = table2_full.querySelectorAll("tbody tr");

  const labels2 = [];
  const data2 = [];

  for (let i = 0; i < t1_tr2.length; i++) {
    const row = t1_tr2[i];
    const cells2 = row.querySelectorAll("td");
    if (cells2.length > 0) {
      labels2.push(cells2[0].innerText);
      data2.push(parseFloat(cells2[1].innerText));
    }
  }

  const ctx2 = document.getElementById("chartCanvas2").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: labels2,
      datasets: [
        {
          label: "Values",
          data: data2,
          borderWidth: 1,
          backgroundColor: "rgba(153, 102, 255, 1)",
          borderColor: "rgba(128, 0, 0, 1)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
