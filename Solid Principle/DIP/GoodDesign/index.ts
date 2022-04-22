/**
 *  Good Design
 */

 import {Notification} from './class/Notification'
 import {Gmail} from './class/Gmail'
 import {Hotmail} from './class/Hotmail'
  // send gmail
  const gmail=new Gmail()
        gmail.address="Address"
        gmail.from="From"
        gmail.toAddress="To Address "

 var notification=new Notification(gmail)

 notification.send();
 
 //send hotmail
 const hotmail=new Hotmail()
       hotmail.address="Address"
       hotmail.from="From"
       hotmail.toAddress="To Address "

 notification=new Notification(hotmail)      
 notification.send()
