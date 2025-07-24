fetch("/")
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const message = doc.querySelector("#message");
    if (message) {
      document.getElementById("message").innerText = message.innerText;
    } else {
      document.getElementById("message").innerText = "Brak komunikatu w odpowiedzi.";
    }
  })
  .catch(error => {
    document.getElementById("message").innerText = "Błąd podczas pobierania danych.";
    console.error("Fetch error:", error);
  });
