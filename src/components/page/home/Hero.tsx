import SmilingMan from '@/assets/images/smiling_man.png';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className={styles.home}>
            <Container className='py-5'>
                <Row className='align-items-center p-4'>
                    <Col className={styles.details} md={6}>
                        <h1>Lending Our Hand for the Service of Others</h1>
                        <p>
                            We offer senior citizen care in a single family home
                            located in a quiet neighborhood in the center of
                            Ephrata, Washington.
                        </p>
                        <Link
                            className={`${styles.btn} mx-auto mx-md-0`}
                            href='/#contact'
                        >
                            Get in touch
                        </Link>
                    </Col>
                    <Col
                        md={6}
                        className='d-flex justify-content-center justify-content-md-start py-2 py-md-0'
                    >
                        <Image
                            src={SmilingMan}
                            alt='Old Man Smiling'
                            className='img-fluid'
                            width={400}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
