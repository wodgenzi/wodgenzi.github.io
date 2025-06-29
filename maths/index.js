document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.innerText = "Go Back";
  button.className = "back-button";
  button.onclick = () => history.back();

  const style = document.createElement("style");
  style.textContent = `
    .back-button {
      background-color: #0077cc;
      color: white;
      border: none;
      padding: 10px 18px;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin: 1rem;
    }
    .back-button:hover {
      background-color: #005fa3;
    }
  `;

  document.head.appendChild(style);
  document.body.insertBefore(button, document.body.firstChild);
});
