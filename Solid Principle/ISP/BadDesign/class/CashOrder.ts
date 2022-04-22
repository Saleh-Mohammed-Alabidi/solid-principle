/**
 * Bad Design: CashOrder only need to implement Cash Invoice but in this case You Must write other Invoice like online payement invoice ,credit invoice 
 */

 import {IOrder} from '../Builder/IOrder'

export class CashOrder implements IOrder {

    processCashInvoice(): void {
        /** code for cash Invoice */
        /** only need this method */
    }

    processOnlinePaymentInvoice(): void {
        /** code for Online Invoice */
        /** no need this method */
    }

    processCreditInvoice(): void {
        /** code for Credit Invoice */
        /** no need this method */
    }


}