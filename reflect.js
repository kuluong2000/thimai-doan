const btnAddAddress = document.querySelector(".reflect-btn-map");
console.log(btnAddAddress);
const map = document.querySelector(".reflect-map");
const mapContent = document.querySelector(".refect-map-content");
const mapClose = document.querySelector(".reflect-map-iconClose");
btnAddAddress.addEventListener("click", () => {
  map.classList.add("open");
  mapContent.classList.add("open");
});

mapClose.addEventListener("click", () => {
  map.classList.remove("open");
  mapContent.classList.remove("open");
});
map.addEventListener("click", () => {
  map.classList.remove("open");
  mapContent.classList.remove("open");
});
