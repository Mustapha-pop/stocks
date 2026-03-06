import { getStockData } from "./fakestockApi.js";

async function update(data) {
  await saveAndCheck(stock);
  const nameEl = document.getElementById("Name");
  const symEl = document.getElementById("Symbol");
  const timeEl = document.getElementById("Time");
  nameEl.textContent = `Name: ${data.name}`;
  symEl.textContent = `Symbol: ${data.sym}`;
  timeEl.textContent = `Time: ${data.time}`;
}

async function saveAndCheck(data) {
  if (!localStorage.getItem("stockPrices")) {
    localStorage.setItem("stockPrices", data.price);
  }
  const lastPrice = Number(localStorage.getItem("stockPrices"));
  if (lastPrice > data.price) {
    priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔽`;
  } else if (lastPrice < data.price) {
    priceEl.textContent = `Price: ${data.price.toFixed(2)} 🔼`;
  } else {
    priceEl.textContent = `Price: ${data.price.toFixed(2)} ▶️`;
  }
  localStorage.setItem("stockPrices", data.price);
}
const priceEl = document.getElementById("Price");
let stock = getStockData();
setInterval(async () => {
  stock = getStockData();
  await update(stock);
}, 1500);
