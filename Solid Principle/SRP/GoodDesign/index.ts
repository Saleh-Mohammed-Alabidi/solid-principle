/**
 *  client side use Authentication class to validtion user then send email (Good Design)
 */

import { Authentication } from './class/Authentication'
import { EmailService } from './class/EmailService'

const authentication = new Authentication(new EmailService());
const userStatus: boolean = authentication.userValidation('Admin');
console.log('User authentication status is ', userStatus)
