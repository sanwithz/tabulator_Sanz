function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  var ss = SpreadsheetApp.getActive().getSheets()[0];
  const dataRange = ss.getRange("A1").getDataRegion();
  const data = dataRange.getDisplayValues();
  const headers = data.shift();
  
  const tableData = data.map(r => {
    const tempObject = {};
    headers.forEach((header, i) => {
      tempObject[header] = r[i];
    });
    return tempObject;
  });
  Logger.log(tableData)
  return tableData;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
