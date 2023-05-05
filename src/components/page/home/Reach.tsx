import {
    IContactErrorInterface,
    IContactInterface,
} from '@/models/ContactModel';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reach = (props: { contactRef: React.RefObject<HTMLDivElement> }) => {
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
        <section className={styles.reach} ref={props.contactRef}>
            <Container data-aos='fade-up' data-aos-delay='100'>
                <h2>Reach out to us</h2>
                <h1>Send us a message</h1>
                <p>
                    Get your questions or concerns answered in real-time. Reach
                    out to us by sending us a message today.
                </p>
                <form onSubmit={submitHandler}>
                    <Row className='py-3 gap-4 gap-md-0'>
                        <Col md={6}>
                            <input
                                type='text'
                                value={data.fullname}
                                placeholder='Fullname'
                                onChange={changeHandler.bind(this, 'fullname')}
                                className='w-100 p-2'
                                maxLength={30}
                            />
                            <p className='error'>
                                {!!error.fullname
                                    ? 'Please enter valid name'
                                    : ''}
                            </p>
                        </Col>
                        <Col md={6}>
                            <input
                                type='email'
                                value={data.email}
                                placeholder='Email'
                                onChange={changeHandler.bind(this, 'email')}
                                className='w-100 p-2'
                                maxLength={50}
                            />
                            <p className='error'>
                                {!!error.email
                                    ? 'Please enter valid email'
                                    : ''}
                            </p>
                        </Col>
                    </Row>
                    <Row className='py-3'>
                        <Col>
                            <textarea
                                value={data.message}
                                placeholder='Type your message here...'
                                onChange={changeHandler.bind(this, 'message')}
                                className='w-100 p-2'
                                maxLength={250}
                            />
                            <p className='error'>
                                {!!error.message
                                    ? 'Please enter atleast 10 characters'
                                    : ''}
                            </p>
                        </Col>
                    </Row>
                    <Row className='pt-2'>
                        <Col>
                            <button className='w-100' type='submit'>
                                Send
                            </button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </section>
    );
};

export default Reach;
