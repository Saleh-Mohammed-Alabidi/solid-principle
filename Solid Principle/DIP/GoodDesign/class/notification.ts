/** */

import { Imessage } from '../builder/IMessage'
export class Notification {

    constructor(private readonly mailService: Imessage) { }

    send(): void {
        this.mailService.send()
    }


}