/**
 * Bad Design: CashOrder only need to implement Credit Invoice but in this case You Must write other Invoice like online payement invoice ,Cash invoice 
 */

import {IOrder} from '../Builder/IOrder'

export class CreditOrder implements IOrder {

    processCashInvoice(): void {
        /** code for cash Invoice */
        /** no need this method */
    }

    processOnlinePaymentInvoice(): void {
        /** code for Online Invoice */
        /** no need this method */
    }

    processCreditInvoice(): void {
        /** code for Credit Invoice */
        /** only need this method */
    }


}