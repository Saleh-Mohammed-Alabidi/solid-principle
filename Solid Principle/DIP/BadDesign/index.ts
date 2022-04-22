/**
 *  Bad Design
 */

 import {Notification} from './class/Notification'


 const notification=new Notification()

 // send gmail
 notification.gmail.address="Address"
 notification.gmail.from="From"
 notification.gmail.toAddress="To Address "
 notification.sendGmail();
 
 //send hotmail
 notification.hotmail.address="Address"
 notification.hotmail.from="From"
 notification.hotmail.toAddress="To Address "
 notification.sendHotmail()
