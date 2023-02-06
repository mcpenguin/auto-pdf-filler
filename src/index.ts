import { config } from "./config";
import { ChequeRequestPdfFields, ParseReceipt } from "./types/pdfEntries";

var pdfFiller = require("pdffiller");

function makePdfName(pdfsFolderName: string, sourcePdfName: string, extension: string): string {
  return `${pdfsFolderName}/${sourcePdfName}-${extension}.pdf`;
}

var sourcePDF = `${config.pdfsFolderName}/${config.originalPdfFilename}`;
var destinationPDF = makePdfName(
  config.pdfsFolderName, config.sourcePdfFilename, "extension-test");

var data: ChequeRequestPdfFields = {
  AreaOfSociety: "TestingAreaOfSociety",
  Date: "TestingDate",
  ChequePayableToName: "TestingCheque",
  WatIamID: "TestingWatiamId",
  MailingAddress: "TestingMailingAddress",
  BudgetLineItem: "TestingBudgetLineItem",
  EventID: "TestingEventID",
  DescriptionOfReimbursement: "TestingDescriptionOfReimbursement",
  RequestSubmittedByName: "TestingRequest",
  Email: "TestingEmail",
  SpecialInstructionForCheque: "SpecialInstruction",
  Receipts: [
    {
      ReceiptDescription: "TestingReceiptDesc1",
      Amount: "TestingReceiptAmount1",
    },
    {
      ReceiptDescription: "TestingReceiptDesc2",
      Amount: "TestingReceiptAmount2",
    }
  ],
  Subtotal: "TestingSubtotal",
  TotalTax: "TestingTotalTax",
  TotalDollars: "TestingTotalDollars"
};

for (let i in data.Receipts) {
  data = {...data, ...ParseReceipt(data.Receipts[i], parseInt(i)+1)};
}

pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err: any) {
  if (err) throw err;
  console.log("In callback (we're done).");
});
