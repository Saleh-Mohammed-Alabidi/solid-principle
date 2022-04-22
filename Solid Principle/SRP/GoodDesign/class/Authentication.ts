
/**
 * Good Design: a class for validating the user
 */
import { IEmailService } from '../builder/IEmailService'

export class Authentication {

    // dependency injection
    constructor(private readonly emailService: IEmailService) {}

    userValidation(userName: string): boolean {

        // Validate the user
        if (userName != '' && userName == 'Admin') {
            this.emailService.sendEmail();
            return true;
        } else {
            return false;
        }
    }
}
