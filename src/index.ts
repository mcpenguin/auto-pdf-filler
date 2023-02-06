import { config } from "./config";

var pdfFiller = require("pdffiller");

var sourcePDF = `${config.pdfsFolderName}/${config.originalPdfFilename}`;
var destinationPDF = `${config.pdfsFolderName}/test_complete.pdf`;

var data = {
  AreaOfSociety: "Testing",
};

pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err: any) {
  if (err) throw err;
  console.log("In callback (we're done).");
});
