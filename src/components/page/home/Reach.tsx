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
    const phoneRef = useRef<HTMLInputElement>(null);
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
        phone: false,
    });

    const modalHandler = (visibleStatus: boolean, msg: string) => {
        setPopup({
            isVisible: visibleStatus,
            message: msg,
        });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (flag.success) return;

        setError({
            email: false,
            fullname: false,
            message: false,
            phone: false,
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
            messageRef.current!.value.trim().length < 10 ||
            messageRef.current!.value.length > 250
        ) {
            setError((oldState) => ({
                ...oldState,
                message: true,
            }));
            return;
        }

        if (
            phoneRef.current!.value.trim() === '' ||
            phoneRef.current!.value.trim().length < 10 ||
            phoneRef.current!.value.length > 20
        ) {
            setError((oldState) => ({
                ...oldState,
                phone: true,
            }));
            return;
        }

        setFlag((oldState) => ({
            ...oldState,
            loading: true,
        }));

        fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullNameRef.current!.value,
                email: emailRef.current!.value,
                message: messageRef.current!.value,
                phone: phoneRef.current!.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (
                    data?.message ===
                    'Your message has been sent successfully! You will be contacted within 24 hours.'
                ) {
                    setPopup({
                        isVisible: true,
                        message: data?.message,
                    });
                    setFlag({
                        loading: false,
                        success: true,
                    });
                    fullNameRef.current!.value = '';
                    emailRef.current!.value = '';
                    messageRef.current!.value = '';
                    phoneRef.current!.value = '';
                    return;
                }
                setPopup({
                    isVisible: true,
                    message: data?.message,
                });
                setFlag((oldState) => ({
                    ...oldState,
                    loading: false,
                }));
            })
            .catch(() => {
                setPopup({
                    isVisible: true,
                    message: 'Some Error Occured! Please try again later.',
                });
                setFlag((oldState) => ({
                    ...oldState,
                    loading: false,
                }));
            });
    };

    return (
        <>
            {popup.isVisible ? (
                <Popup
                    text={popup.message}
                    onClose={modalHandler.bind(this, false, '')}
                />
            ) : null}
            <section
                className={styles.reach}
                ref={props.contactRef}
                data-aos='fade-up'
                data-aos-delay='100'
            >
                <Container>
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
                                <input
                                    type='tel'
                                    placeholder='Contact Number'
                                    className='w-100 p-2'
                                    maxLength={20}
                                    ref={phoneRef}
                                />
                                <p className='error'>
                                    {!!error.phone
                                        ? 'Please enter valid Contact Number'
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
                                    className={`w-100 d-flex justify-content-center align-items-center ${flag.success ? styles.msg_sent : ''
                                        }`}
                                    type='submit'
                                    disabled={flag.loading}
                                >
                                    {flag.success ? (
                                        'Sent'
                                    ) : flag.loading ? (
                                        <Spinner />
                                    ) : (
                                        'Send'
                                    )}
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
