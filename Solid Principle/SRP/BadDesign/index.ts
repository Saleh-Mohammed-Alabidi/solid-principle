/**
 *  client side use Authentication class to validation and send email in the same class (Bad Design)
 */

import { Authentication } from './Authentication'

const _authentication = new Authentication();
const userStatus: boolean = _authentication.userValidation('Admin');
console.log('User authentication status is ', userStatus)
