import { LINKS } from '@/constants/Links';
import styles from '@/styles/About.module.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const Vision = () => {
    return (
        <section className={styles.vision}>
            <Container>
                <Row className={styles.data}>
                    <Col md={6} lg={8} className='d-flex overflow-hidden'>
                        <div data-aos='fade-right' data-aos-delay='200'>
                            <h1>Our Staff</h1>
                            <p>
                                Parkway Adult Family Home owned and operated by
                                RN-BSN with 9+ years of caregiver experience”.
                                All of our staff will have the necessary
                                knowledge & training to care for our residents.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className='d-flex overflow-hidden'>
                        <div data-aos='fade-left' data-aos-delay='200'>
                            <h1>Our Vision</h1>
                            <p>
                                Our vision is to be the most trusted adult
                                family living home provider in Ephrata
                                Washington and the surrounding towns and cities.
                            </p>
                        </div>
                    </Col>
                </Row>
                <p
                    className={styles.reach}
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    <Link href={LINKS.CONTACT}>
                        <span>Reach Out</span>
                    </Link>{' '}
                    to us today if you have any questions or need additional
                    information about our facility and the services we offer.
                </p>
            </Container>
        </section>
    );
};

export default Vision;
