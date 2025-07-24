fetch("/")
  .then(response => response.text())
  .then(data => {
    document.getElementById("message").innerText = data;
  })
  .catch(error => {
    document.getElementById("message").innerText = "Błąd podczas pobierania danych.";
    console.error("Fetch error:", error);
  });
