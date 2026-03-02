import { getStockData } from "./fakestockApi.js";

function update(data) {
  saveAndCheck(stock);
  const nameEl = document.getElementById("Name");
  const symEl = document.getElementById("Symbol");
  const timeEl = document.getElementById("Time");
  if (nameEl) nameEl.textContent = `Name: ${data.name}`;
  if (symEl) symEl.textContent = `Symbol: ${data.sym}`;
  if (timeEl) timeEl.textContent = `Time: ${data.time}`;
}

function saveAndCheck(data) {
  if (!localStorage.getItem("stockPrices")) {
    localStorage.setItem("stockPrices", data.price);
  }
  const lastPrice = Number(localStorage.getItem("stockPrices"));
  if (lastPrice > data.price) {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔽`;
  } else if (lastPrice < data.price) {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔼`;
  } else {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} ▶️`;
  }
}
const priceEl = document.getElementById("Price");
let stock = getStockData();
setInterval(() => {
  stock = getStockData();
  update(stock);
}, 1500);
