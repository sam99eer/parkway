// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IContactInterface } from '@/models/ContactModel';
import { IMailResponse } from '@/models/MailModel';
import type { NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
    req: IContactInterface,
    res: NextApiResponse<IMailResponse>
) {
    try {
        if (req.method !== 'POST')
            throw new ReferenceError('Method not allowed');

        const { fullname, email, message } = req.body;

        if (fullname?.trim()?.length < 3 || fullname?.length > 100)
            throw new ReferenceError('Please enter a valid name');
        if (
            email?.trim()?.length < 3 ||
            email?.length > 100 ||
            !email?.includes('@')
        )
            throw new ReferenceError('Please enter a valid email address');
        if (message?.trim()?.length < 10 || message?.length > 250)
            throw new ReferenceError(
                'Please enter a message between 10 to 250 characters'
            );

        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.mail.yahoo.com',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            secure: true,
        });

        const mailData = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Message From ${fullname}`,
            text: `${message} | Sent from: ${fullname} | Email: ${email}`,
            html: `<div>${req.body.message}</div><p>Sent from:
                ${fullname}</p><p>Sender's Email: ${email}</p>`,
        };

        const sendMail = await transporter.sendMail(mailData);
        if (!!(sendMail?.accepted?.length > 0)) {
            res.status(200).json({
                message:
                    'Your message has been sent successfully! You will be contacted within 24 hours.',
            });
        } else
            throw new ReferenceError(
                sendMail.response ||
                    'Unable to send mail this time! Please try again later.'
            );
    } catch (err) {
        if (err instanceof ReferenceError) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(500).json({
                message: 'Server Error occured! Please try again later.',
            });
        }
    }
}
