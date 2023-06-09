import ServiceItem from '@/components/common/ServiceItem';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/Services.module.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceHighlights = () => {
    return (
        <section className={styles.service_highlights}>
            <Container>
                <h1>Our Services are :</h1>

                <div className={styles.service_container}>
                    <Row>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-right'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Owners reside in the home and therefore, they are able to evaluate residents changing needs in a timely manner' />
                        </Col>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-left'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Home doctor and therapists visits' />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-right'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Professionally trained staff available 24 hours a day' />
                        </Col>

                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-right'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Medication assistance and monitoring; coordination with doctors and pharmacy' />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-right'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Wheelchair/walker accommodations' />
                        </Col>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-left'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Personal call button and emergency call system' />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-left'
                            data-aos-delay='100'
                        >
                            <ServiceItem text="Alzheimer's/Dementia certified" />
                        </Col>
                        <Col
                            className='my-4'
                            md={6}
                            data-aos='fade-left'
                            data-aos-delay='100'
                        >
                            <ServiceItem text='Activity/Exercise coordinator on staff' />
                        </Col>
                    </Row>
                </div>

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

export default ServiceHighlights;
