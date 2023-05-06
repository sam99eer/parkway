import { NextApiRequest } from 'next';

export interface IContactErrorInterface {
    fullname: boolean;
    email: boolean;
    message: boolean;
}

export interface IContactInterface extends NextApiRequest {
    body: {
        fullname: string;
        email: string;
        message: string;
    };
}
