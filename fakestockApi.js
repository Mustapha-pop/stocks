export function getStockData() {
  return {
    name: "GotaUiTechAI",
    sym: "GUTA",
    price: Math.random() * 3,
    time: new Date().toLocaleDateString("en-CA"),
  };
}
