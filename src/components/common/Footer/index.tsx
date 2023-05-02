import styles from '@/styles/Footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container fluid className='px-3 px-md-5'>
                <Row>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2 className='p-2'>About Us</h2>
                        <p>
                            All of our staff will have the necessary knowledge &
                            trainings to care for our residents.We offer
                            individual assistance in our home on a more personal
                            level <span>View more</span>
                        </p>
                    </Col>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2 className='p-2'>Our Location</h2>
                        <a
                            href='https://www.google.com/maps/place/Parkway+Adult+Family+Homecare/@47.3125851,-119.562194,17z/data=!3m1!4b1!4m6!3m5!1s0x54995defa44390eb:0x1464d442cb9fdc67!8m2!3d47.3125851!4d-119.5600053!16s%2Fg%2F11t52rbpgb'
                            target='_blank'
                        >
                            Parkway Adult Family Homecare 330 10th Ave S.W.
                            Ephrata WA.98823 Washington
                        </a>
                    </Col>
                    <Col md={4} className='py-3 py-md-0'>
                        <h2 className='p-2'>Contact Us</h2>
                        <p>
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
            </Container>
        </footer>
    );
};

export default Footer;
