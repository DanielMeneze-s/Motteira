const checkBox = document.getElementById('menu-hamburguer');
checkBox.addEventListener("change", updateBackground);
updateBackground();

function updateBackground() {
  document.body.className = checkBox.checked ? "" : "blue";
}