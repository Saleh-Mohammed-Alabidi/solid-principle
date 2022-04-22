/**
 * 
 */

import {Imessage} from '../builder/IMessage'

export class Hotmail implements Imessage {

    address: string = "";

    from: string = "";

    toAddress: string = "";

    send(): void {/** code  */ console.log("Successfully send Hotmail") }

}