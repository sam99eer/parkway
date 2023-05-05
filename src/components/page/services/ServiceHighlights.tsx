import ServiceItem from '@/components/common/ServiceItem';
import styles from '@/styles/Services.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceHighlights = () => {
    return (
        <section className={styles.service_highlights}>
            <Container>
                <h1>Our Services are :</h1>

                <div className={styles.service_container}>
                    <Row>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Owners reside in the home and therefore, they are able to evaluate residents changing needs in a timely manner' />
                        </Col>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Home doctor and therapists visits' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Professionally trained staff available 24 hours a day' />
                        </Col>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Activity/Exercise coordinator on staff' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Wheelchair/walker accommodations' />
                        </Col>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Personal call button and emergency call system' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='my-4' md={6}>
                            <ServiceItem text='Medication assistance and monitoring; coordination with doctors and pharmacy' />
                        </Col>
                        <Col className='my-4' md={6}>
                            <ServiceItem text="Alzheimer's/Dementia certified" />
                        </Col>
                    </Row>
                </div>

                <p className={styles.reach}>
                    <span>Reach Out</span> to us today if you have any questions
                    or need additional information about our facility and the
                    services we offer.
                </p>
            </Container>
        </section>
    );
};

export default ServiceHighlights;
