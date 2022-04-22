
/**
 * Good Design: a class for sending the email.
 */
import { IEmailService } from '../builder/IEmailService'
export class EmailService implements IEmailService {

    sendEmail(): void {
        // Send email to user.
        // Email send code goes here.
        console.log("Email sent to the user")
    }
}
