
export interface IOrder {

    processCashInvoice(): void;

    processOnlinePaymentInvoice(): void;

    processCreditInvoice(): void;

}