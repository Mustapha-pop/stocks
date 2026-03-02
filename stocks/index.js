import { getStockData } from "./fakestockApi.js";

const stock = getStockData();
const priceEl = document.getElementById("Price");
function update(data) {
  saveAndCheck(stock);
  const nameEl = document.getElementById("Name");
  const symEl = document.getElementById("Symbol");
  const timeEl = document.getElementById("Time");
  if (nameEl) nameEl.textContent = `Name: ${data.name}`;
  if (symEl) symEl.textContent = `Symbol: ${data.sym}`;
  if (timeEl) timeEl.textContent = `Time: ${data.time}`;
}

window.addEventListener("DOMContentLoaded", update(stock));

function saveAndCheck(data) {
  if (!localStorage.getItem("stockPrices")) {
    localStorage.setItem("stockPrices", data.price);
  }
  const lastPrice = localStorage.getItem("stockPrices");
  if (lastPrice > data.price) {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔽`;
  } else if (lastPrice < data.price) {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔼`;
  } else {
    if (priceEl) priceEl.textContent = `Price: ${data.price.toFixed(2)} ▶️`;
  } 
}
