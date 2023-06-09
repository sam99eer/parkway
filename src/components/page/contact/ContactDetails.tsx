import Email from '@/assets/svg/Email';
import MapPin from '@/assets/svg/MapPin';
import Telephone from '@/assets/svg/Telephone';
import ContactForm from '@/components/page/contact/ContactForm';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/Contact.module.css';
import Link from 'next/link';
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactDetails = () => {
    const contactSectionRef = useRef<HTMLDivElement>(null);

    const scrollHandler = () => {
        contactSectionRef.current?.scrollIntoView();
    };

    return (
        <section className={styles.contactus}>
            <Container>
                <p
                    className={styles.breadcrumb}
                    data-aos='fade-right'
                    data-aos-delay='200'
                >
                    <Link href={LINKS.HOME}>
                        <span>Home</span>
                    </Link>{' '}
                    ~~ Contact Us
                </p>

                <div className={styles.contact_details} ref={contactSectionRef}>
                    <p data-aos='zoom-in' data-aos-delay='200'>
                        Do you have any inquiries about our services? We are
                        always here for you. We’ll respond to you as soon as we
                        can.
                    </p>

                    <Row className='py-5'>
                        <Col lg={6} className={styles.address_container}>
                            <div
                                className={styles.address_info}
                                data-aos='fade-right'
                                data-aos-delay='200'
                            >
                                <div className={styles.icon}>
                                    <MapPin />
                                </div>
                                <div>
                                    <h1>Our Location</h1>
                                    <a
                                        href='https://www.google.com/maps/place/Parkway+Adult+Family+Homecare/@47.3125851,-119.562194,17z/data=!3m1!4b1!4m6!3m5!1s0x54995defa44390eb:0x1464d442cb9fdc67!8m2!3d47.3125851!4d-119.5600053!16s%2Fg%2F11t52rbpgb'
                                        target='_blank'
                                    >
                                        Parkway Adult Family Homecare, 330 10th
                                        Ave
                                        <br />
                                        S.W. Ephrata WA.98823 Washington
                                    </a>
                                </div>
                            </div>
                            <div
                                className={styles.address_info}
                                data-aos='fade-right'
                                data-aos-delay='200'
                            >
                                <div className={styles.icon}>
                                    <Telephone />
                                </div>
                                <div>
                                    <h1>Phone</h1>
                                    <p>
                                        <a href='tel:509-237-7297'>
                                            509-237-7297
                                        </a>
                                        <br />
                                        Fax no. 509-214-7696
                                    </p>
                                </div>
                            </div>
                            <div
                                className={styles.address_info}
                                data-aos='fade-right'
                                data-aos-delay='200'
                            >
                                <div className={styles.icon}>
                                    <Email />
                                </div>
                                <div>
                                    <h1>Email</h1>
                                    <a href='mailto:parkwayadulthomecare@yahoo.com'>
                                        parkwayadulthomecare@yahoo.com
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <ContactForm />
                    </Row>
                </div>

                <p
                    className={styles.reach}
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    <button onClick={scrollHandler}>
                        <span>Reach Out</span>
                    </button>{' '}
                    to us today if you have any questions or need additional
                    information about our facility and the services we offer.
                </p>
            </Container>
        </section>
    );
};

export default ContactDetails;
