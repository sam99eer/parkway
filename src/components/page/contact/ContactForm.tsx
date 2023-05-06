import Popup from '@/components/common/Popup';
import { IContactErrorInterface } from '@/models/ContactModel';
import { ILoadingModel } from '@/models/LoadingModel';
import { IPopupModel } from '@/models/PopupModel';
import styles from '@/styles/Contact.module.css';
import { useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const ContactForm = () => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [error, setError] = useState<IContactErrorInterface>({
        email: false,
        fullname: false,
        message: false,
    });

    const [flag, setFlag] = useState<ILoadingModel>({
        loading: false,
        success: false,
    });

    const [popup, setPopup] = useState<IPopupModel>({
        isVisible: false,
        message: '',
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
                        placeholder='Full Name'
                        maxLength={30}
                        ref={fullNameRef}
                        required
                    />
                    <p className='error'>
                        {!!error.fullname ? 'Please enter valid name' : ''}
                    </p>
                    <input
                        type='email'
                        placeholder='Email'
                        maxLength={50}
                        ref={emailRef}
                        required
                    />
                    <p className='error'>
                        {!!error.email ? 'Please enter valid email' : ''}
                    </p>

                    <textarea
                        placeholder='Type your message...'
                        maxLength={300}
                        ref={messageRef}
                        required
                    />
                    <p className='error'>
                        {!!error.message
                            ? 'Please enter atleast 10 characters'
                            : ''}
                    </p>
                    <button disabled={flag.loading}>
                        {flag.loading ? <Spinner /> : 'Send'}
                    </button>
                </form>
            </Col>
        </>
    );
};

export default ContactForm;
