import FbLight from '@/assets/svg/FbLight';
import MailLight from '@/assets/svg/MailLight';
import MobileLight from '@/assets/svg/MobileLight';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className='pb-3'>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2>About Us</h2>
                        <p className='w-75'>
                            All of our staff will have the necessary knowledge &
                            trainings to care for our residents.We offer
                            individual assistance in our home on a more personal
                            level <span>View more</span>
                        </p>
                    </Col>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2>Our Location</h2>
                        <a
                            href='https://www.google.com/maps/place/Parkway+Adult+Family+Homecare/@47.3125851,-119.562194,17z/data=!3m1!4b1!4m6!3m5!1s0x54995defa44390eb:0x1464d442cb9fdc67!8m2!3d47.3125851!4d-119.5600053!16s%2Fg%2F11t52rbpgb'
                            target='_blank'
                        >
                            Parkway Adult Family Homecare
                            <br />
                            330 10th Ave S.W.
                            <br />
                            Ephrata WA 98823
                            <br />
                            Washington
                        </a>
                    </Col>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2 className='text-start text-md-end'>Contact Us</h2>
                        <p className='text-start text-md-end'>
                            <a href='tel:509-237-7297'>509-237-7297</a>
                            <br />
                            Fax no. 509-214-7696
                            <br />
                            <a href='mailto:parkwayadulthomecare@yahoo.com'>
                                parkwayadulthomecare@yahoo.com
                            </a>
                        </p>
                    </Col>
                </Row>
                <div className={styles.icon}>
                    <Link
                        href='https://www.facebook.com/Parkwayadulthomecare/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FbLight />
                    </Link>
                    <Link href='tel:509-237-7297'>
                        <MobileLight />
                    </Link>
                    <Link href='mailto:parkwayadulthomecare@yahoo.com'>
                        <MailLight />
                    </Link>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
