/**
 * Bad Design: a class with two methods, one for validating the user and other for sending the email.
 */
export class Authentication {
    constructor() { }

    userValidation(name: string): boolean {
        // Validate the user
        if (name != '' && name == 'Admin') {
            this.sendEmail();
            return true;
        } else {
            return false;
        }
    }

    private sendEmail(): void {
        // Send email to user.
        // Email send code goes here.
        console.log("Email sent to the user")
    }

}

