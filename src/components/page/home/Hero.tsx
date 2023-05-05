import SmilingMan from '@/assets/images/smiling_man.png';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const Hero = (props: { onScroll: () => void }) => {
    return (
        <section className={styles.home}>
            <Container className='py-5'>
                <Row className='align-items-center p-4'>
                    <Col
                        className={styles.details}
                        md={6}
                        data-aos='zoom-in'
                        data-aos-delay='200'
                    >
                        <h1>Lending Our Hand for the Service of Others</h1>
                        <p>
                            We offer senior citizen care in a single family home
                            located in a quiet neighborhood in the center of
                            Ephrata, Washington.
                        </p>
                        <button
                            className={`${styles.btn} mx-auto mx-md-0`}
                            onClick={props.onScroll}
                        >
                            Get in touch
                        </button>
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
                            data-aos='flip-right'
                            data-aos-delay='450'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
