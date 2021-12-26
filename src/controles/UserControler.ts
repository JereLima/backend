import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {name: 'Jeremias', lastName: 'Lima'},
    {name: 'Bruna', lastName: 'Claro'},
    {name: 'Naty', lastName: 'Silva'}
];
export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            {
                name:'jeremias',
                email: 'jere'},
            {
                subject: 'lastname', 
                body: 'Seja bem vindo'
            });

        return res.send();
    }
};