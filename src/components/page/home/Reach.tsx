import { IContactInterface } from '@/models/ContactModel';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reach = () => {
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
        <section className={styles.reach}>
            <Container>
                <h2>Reach out to us</h2>
                <h1>Send us a message</h1>
                <p>
                    Get your questions or concerns answered in real-time. Reach
                    out to us by sending us a message today.
                </p>
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
                    </Col>
                </Row>
                <Row className='pt-2'>
                    <Col>
                        <button className='w-100'>Send</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Reach;
