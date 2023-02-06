export class Receipt {
  ReceiptDescription!: string;
  Amount!: string;
}

export function ParseReceipt(receipt: Receipt, n: number) {
  var result: any = {};
  result[`ReceiptDescription${n}`] = receipt.ReceiptDescription;
  result[`Amount${n}`] = receipt.Amount;
  return result;
}

export class ChequeRequestPdfFields {
  AreaOfSociety!: string;
  Date!: string;
  ChequePayableToName!: string;
  WatIamID!: string;
  MailingAddress!: string;
  BudgetLineItem!: string;
  EventID!: string;
  DescriptionOfReimbursement!: string;
  RequestSubmittedByName!: string;
  Email!: string;
  SpecialInstructionForCheque!: string;
  Receipts!: Receipt[];
  Subtotal!: string;
  TotalTax!: string;
  TotalDollars!: string;
}
