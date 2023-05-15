import img from '@/assets/images/mom_and_daughter.jpg';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const WhoWeAre = () => {
    return (
        <section className={styles.who_we_are}>
            <Container>
                <p
                    className={styles.breadcrumb}
                    data-aos='fade-right'
                    data-aos-delay='200'
                >
                    <Link href={LINKS.HOME}>
                        <span>Home</span>
                    </Link>{' '}
                    ~~ About Us
                </p>
                <p
                    className={styles.highlight}
                    data-aos='zoom-in'
                    data-aos-delay='200'
                >
                    Ensuring your loved ones’ wellness and safety
                </p>
                <h1>Who we are</h1>
                <Row className={styles.details}>
                    <Col lg={6} xl={8}>
                        <p
                            className='m-0'
                            data-aos='fade-right'
                            data-aos-delay='200'
                        >
                            <span>Parkway Adult Family Homecare</span> is an
                            adult family home that specializes in care for the
                            elderly with dementia, Alzheimer’s, and Parkinson’s
                            along with developmentally delayed populations. We
                            provide a great atmosphere, good food, kind care,
                            fun outings and other substantial activities to
                            ensure a higher quality of life.
                            <br />
                            <br />
                            We have plenty of outdoor space where you can relax
                            on the patio enjoy conversation or quiet time. Our
                            home is located across from parkway school and
                            parkway ball field which make an excellent outing.
                            One of which has little league games which can be
                            quite fun to watch.
                        </p>
                    </Col>
                    <Col lg={6} xl={4} className='d-flex align-items-center'>
                        <div className='rounded-5 overflow-hidden'>
                            <Image
                                src={img}
                                alt='Mom and Daughter'
                                className='img-fluid'
                                data-aos='fade-left'
                                data-aos-delay='200'
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhoWeAre;
