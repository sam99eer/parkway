import SmilingMan from '@/assets/images/smiling_man.png';
import Header from '@/components/common/Header';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <Header activeLink={LINKS.HOME} />
                <Container className='py-5'>
                    <Row className='align-items-center p-4'>
                        <Col className={styles.details} md={6}>
                            <h1>Lending Our Hand for the Service of Others</h1>
                            <p>
                                We offer senior citizen care in a single family
                                home located in a quiet neighborhood in the
                                center of Ephrata, Washington.
                            </p>
                            <Link className={styles.btn} href='/#contact'>
                                Get in touch
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Image
                                src={SmilingMan}
                                alt='Old Man Smiling'
                                className='img-fluid'
                                width={400}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
