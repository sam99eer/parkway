import { IContactInterface } from '@/models/ContactModel';
import styles from '@/styles/Contact.module.css';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
    const [data, setData] = useState<IContactInterface>({
        email: '',
        fullname: '',
        message: '',
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

    return (
        <Col lg={6}>
            <div
                className={styles.send_form}
                data-aos='fade-left'
                data-aos-delay='200'
            >
                <h1>Send Message</h1>
                <input
                    type='text'
                    onChange={changeHandler.bind(this, 'fullname')}
                    placeholder='Full Name'
                    maxLength={30}
                />
                <input
                    type='email'
                    onChange={changeHandler.bind(this, 'email')}
                    placeholder='Email'
                    maxLength={50}
                />
                <textarea
                    onChange={changeHandler.bind(this, 'message')}
                    placeholder='Type your message...'
                    maxLength={300}
                />
                <button>Send</button>
            </div>
        </Col>
    );
};

export default ContactForm;
