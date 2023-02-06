import { config } from "./config";
import { ChequeRequestPdfFields, ParseReceipt } from "./types/pdfEntries";

let pdfFiller = require("pdffiller");

function makePdfName(pdfsFolderName: string, sourcePdfName: string, extension: string): string {
  return `${pdfsFolderName}/${sourcePdfName}-${extension}.pdf`;
}

const sourcePDF = `${config.pdfsFolderName}/${config.originalPdfFilename}`;

function MakeFilledPdf(data: ChequeRequestPdfFields, extension: string) {
  for (let i in data.Receipts) {
    data = {...data, ...ParseReceipt(data.Receipts[i], parseInt(i)+1)};
  }

  const destinationPDF = makePdfName(config.pdfsFolderName, config.sourcePdfFilename, extension);
  
  pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err: any) {
    if (err) throw err;
    console.log(`Successfully created filled pdf: ${destinationPDF}`);
  });
}

let data: ChequeRequestPdfFields = {
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

MakeFilledPdf(data, "extension-test");
