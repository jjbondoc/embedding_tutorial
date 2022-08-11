console.log("B2S 2 DS23");
let viz;

//TODO: Create a variable to store the viz container
const vizContainer = document.getElementById("vizContainer");

//TODO: Create a variable to store the dashboard options
const option = {
  device: "desktop",
  height: "1100px",
  width: "1100px",
  hideToolbar: true,
};

//TODO: Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

function initViz() {
  viz = new tableau.Viz(vizContainer, url, option); //tableau is a class in tableau-2.min.js
}

//TODO: Listerners go here
document.addEventListener("DOMContentLoaded", initViz);

//TODO: Buttons go here
const exportPdfButton = document.getElementById("exportPDF"); //document because we are refering to the HTML body
function exportPdfFunction() {
  viz.showExportPDFDialog();
}
exportPdfButton.addEventListener("click", exportPdfFunction);

const exportPpButton = document.getElementById("exportPP");
function exportPpFunction() {
  viz.showExportPowerPointDialog();
}

function exportImage() {
  viz.showExportImageDialog();
}
exportPpButton.addEventListener("click", exportPpFunction);
exportPpButton.addEventListener("mouseover", exportImage);

//TODO: Filter function
function applyFilterFunction() {
  // console.log("Hello World")
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Viz is filtered"));
}
document
  .getElementById("filterButton")
  .addEventListener("click", applyFilterFunction);
