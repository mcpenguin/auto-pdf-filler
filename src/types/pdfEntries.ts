class Receipt {
  ReceiptDescription!: string;
  Amount!: string;

  Parse(n: number) {
    var result: any = {};
    result[`ReceiptDescription${n}`] = this.ReceiptDescription;
    result[`Amount${n}`] = this.Amount;
    return result;
  }
}

export default class ChequeRequestPdfFields {
  AreaOfSociety!: string;
  Date!: string;
  ChequePayableToName!: string;
  WatIamId!: string;
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
