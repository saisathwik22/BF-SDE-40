document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("clientsChart").getContext("2d");
  const clientsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "2016-17",
        "2017-18",
        "2018-19",
        "2019-20",
        "2020-21",
        "2021-22",
        "2022-23",
        "2023-24",
      ],
      datasets: [
        {
          label: "Angel One",
          data: [0.5, 1, 1.5, 2, 3, 4, 6, 7],
          borderColor: "#f39c12",
          fill: false,
        },
        {
          label: "Zerodha",
          data: [0.2, 0.8, 1.2, 3.5, 5, 6, 7, 7.5],
          borderColor: "#3498db",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Clients (in millions)",
          },
          ticks: {
            beginAtZero: true,
            callback: function (value) {
              return value + "M";
            },
          },
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
