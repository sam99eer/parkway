import {
    IContactErrorInterface,
    IContactInterface,
} from '@/models/ContactModel';
import { ILoadingModel } from '@/models/LoadingModel';
import styles from '@/styles/Contact.module.css';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
    const [data, setData] = useState<IContactInterface>({
        email: '',
        fullname: '',
        message: '',
    });

    const [error, setError] = useState<IContactErrorInterface>({
        email: false,
        fullname: false,
        message: false,
    });

    const [flag, setFlag] = useState<ILoadingModel>({
        loading: false,
        success: false,
    });

    const changeHandler = (
        uid: keyof IContactInterface,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: event.target.value,
        }));
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setError({
            email: false,
            fullname: false,
            message: false,
        });

        if (
            data.email.trim().length < 5 ||
            !data.email.includes('@') ||
            data.email.length > 100
        ) {
            setError((oldState) => ({
                ...oldState,
                email: true,
            }));
            return;
        }

        if (
            data.fullname.trim() === '' ||
            data.fullname.trim().length < 3 ||
            data.fullname.length > 100
        ) {
            setError((oldState) => ({
                ...oldState,
                fullname: true,
            }));
            return;
        }

        if (
            data.message.trim() === '' ||
            data.message.trim().length < 11 ||
            data.message.length > 250
        ) {
            setError((oldState) => ({
                ...oldState,
                message: true,
            }));
            return;
        }
    };

    return (
        <Col lg={6}>
            <form
                className={styles.send_form}
                data-aos='fade-left'
                data-aos-delay='200'
                onSubmit={submitHandler}
            >
                <h1>Send Message</h1>
                <input
                    type='text'
                    onChange={changeHandler.bind(this, 'fullname')}
                    placeholder='Full Name'
                    maxLength={30}
                    value={data.fullname}
                    required
                />
                <p className='error'>
                    {!!error.fullname ? 'Please enter valid name' : ''}
                </p>
                <input
                    type='email'
                    onChange={changeHandler.bind(this, 'email')}
                    placeholder='Email'
                    maxLength={50}
                    value={data.email}
                    required
                />
                <p className='error'>
                    {!!error.email ? 'Please enter valid email' : ''}
                </p>

                <textarea
                    onChange={changeHandler.bind(this, 'message')}
                    placeholder='Type your message...'
                    maxLength={300}
                    value={data.message}
                    required
                />
                <p className='error'>
                    {!!error.message
                        ? 'Please enter atleast 10 characters'
                        : ''}
                </p>
                <button>{flag.loading ? <Spinner /> : 'Send'}</button>
            </form>
        </Col>
    );
};

export default ContactForm;
