interface IMailTo {
    name: string,
    email: string,
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[],
}

class EmailService {
    sendMail(too: IMailTo, message: IMailMessage) {
        console.log(`Email enviado!! ${too.email} ${too.name} ${message.subject}`)
    }
}
export default EmailService;