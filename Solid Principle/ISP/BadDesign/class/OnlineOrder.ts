/**
 * Bad Design: Online Order only need to implement Online Payment Invoice but in this case You Must write other Invoice like cash invoice ,credit invoice 
 */

import { IOrder } from '../Builder/IOrder'

export class OnlineOrder implements IOrder {

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