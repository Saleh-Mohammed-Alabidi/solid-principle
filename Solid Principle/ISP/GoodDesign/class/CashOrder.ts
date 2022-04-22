/**
 * Good Design: CashOrder only need to implement Cash Invoice
 */

 import {ICashOrder} from '../Builder/ICashOrder'

export class CashOrder implements ICashOrder {

    processCashInvoice(): void {
        /** code for cash Invoice */
    }


}