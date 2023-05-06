import Popup from '@/components/common/Popup';
import { IContactErrorInterface } from '@/models/ContactModel';
import { ILoadingModel } from '@/models/LoadingModel';
import { IPopupModel } from '@/models/PopupModel';
import styles from '@/styles/Home.module.css';
import { useRef, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Reach = (props: { contactRef: React.RefObject<HTMLDivElement> }) => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [flag, setFlag] = useState<ILoadingModel>({
        loading: false,
        success: false,
    });

    const [popup, setPopup] = useState<IPopupModel>({
        isVisible: false,
        message: '',
    });

    const [error, setError] = useState<IContactErrorInterface>({
        email: false,
        fullname: false,
        message: false,
    });

    const modalHandler = (visibleStatus: boolean, msg: string) => {
        setPopup({
            isVisible: visibleStatus,
            message: msg,
        });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setError({
            email: false,
            fullname: false,
            message: false,
        });

        if (
            emailRef.current!.value.trim().length < 5 ||
            !emailRef.current!.value.includes('@') ||
            emailRef.current!.value.length > 100
        ) {
            setError((oldState) => ({
                ...oldState,
                email: true,
            }));
            return;
        }

        if (
            fullNameRef.current!.value.trim() === '' ||
            fullNameRef.current!.value.trim().length < 3 ||
            fullNameRef.current!.value.length > 100
        ) {
            setError((oldState) => ({
                ...oldState,
                fullname: true,
            }));
            return;
        }

        if (
            messageRef.current!.value.trim() === '' ||
            messageRef.current!.value.trim().length < 11 ||
            messageRef.current!.value.length > 250
        ) {
            setError((oldState) => ({
                ...oldState,
                message: true,
            }));
            return;
        }
    };

    return (
        <>
            {popup.isVisible ? (
                <Popup
                    text={popup.message}
                    onClose={modalHandler.bind(this, false, '')}
                />
            ) : null}
            <section className={styles.reach} ref={props.contactRef}>
                <Container data-aos='fade-up' data-aos-delay='100'>
                    <h2>Reach out to us</h2>
                    <h1>Send us a message</h1>
                    <p>
                        Get your questions or concerns answered in real-time.
                        Reach out to us by sending us a message today.
                    </p>
                    <form onSubmit={submitHandler}>
                        <Row className='py-3 gap-4 gap-md-0'>
                            <Col md={6}>
                                <input
                                    type='text'
                                    placeholder='Fullname'
                                    className='w-100 p-2'
                                    maxLength={30}
                                    ref={fullNameRef}
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
                                    placeholder='Email'
                                    className='w-100 p-2'
                                    maxLength={50}
                                    ref={emailRef}
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
                                    placeholder='Type your message here...'
                                    className='w-100 p-2'
                                    maxLength={250}
                                    ref={messageRef}
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
                                <button
                                    className='w-100 d-flex justify-content-center align-items-center'
                                    type='submit'
                                    disabled={flag.loading}
                                >
                                    {flag.loading ? <Spinner /> : 'Send'}
                                </button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </section>
        </>
    );
};

export default Reach;
