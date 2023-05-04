import styles from '@/styles/About.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Vision = () => {
    return (
        <section className={styles.vision}>
            <Container>
                <Row className={styles.data}>
                    <Col md={6} lg={8}>
                        <div>
                            <h1>Our Staff</h1>
                            <p>
                                Parkway Adult Family Home owned and operated by
                                RN-BSN with 9+ years of caregiver experience”.
                                All of our staff will have the necessary
                                knowledge & training to care for our residents.
                                We offer individualized assistance in our home
                                on a more personal level. This allows for a more
                                personal touch and awareness to your loved ones
                                changing needs.
                            </p>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className='d-flex'>
                        <div>
                            <h1>Our Vision</h1>
                            <p>
                                Our vision is to be the most trusted adult
                                family living home provider in Ephrata
                                Washington and the surrounding towns and cities.
                            </p>
                        </div>
                    </Col>
                </Row>
                <p className={styles.reach}>
                    <span>Reach Out</span> to us today if you have any questions
                    or need additional information about our facility and the
                    services we offer.
                </p>
            </Container>
        </section>
    );
};

export default Vision;
