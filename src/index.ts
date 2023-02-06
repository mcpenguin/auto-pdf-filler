var pdfFiller = require("pdffiller");

var sourcePDF = "test/cheque-request-unfilled.pdf";
var destinationPDF = "test/test_complete.pdf";

var data = {
  "AreaOfSociety": "Testing",
};

pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err: any) {
  if (err) throw err;
  console.log("In callback (we're done).");
});
