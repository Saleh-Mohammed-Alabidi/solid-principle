/** */

import { Gmail } from './Gmail'
import { Hotmail } from './Hotmail'

export class Notification {

    gmail = new Gmail()

    hotmail = new Hotmail()

    sendGmail() { this.gmail.send() }

    sendHotmail() { this.hotmail.send() }


}