import Chair from '@/assets/icons/chair.png';
import Nurse from '@/assets/icons/nurse.png';
import Stethoscope from '@/assets/icons/stethoscope.png';
import Sl_Image1 from '@/assets/images/moving_slide1.jpg';
import Sl_Image2 from '@/assets/images/moving_slide2.jpg';
import Sl_Image3 from '@/assets/images/moving_slide3.jpg';
import Sl_Image4 from '@/assets/images/moving_slide4.jpg';
import SmilingMan from '@/assets/images/smiling_man.png';
import Header from '@/components/common/Header';
import SlideImage from '@/components/page/home/SlideImage';
import TagCard from '@/components/page/home/TagCard';
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
            <Header activeLink={LINKS.HOME} />
            <section className={styles.home}>
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
            </section>
            <section className={styles.tags}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <TagCard
                                source={Stethoscope}
                                text='Lorem ipsum dolor sit'
                                onClick={() => {}}
                            />
                        </Col>
                        <Col md={4}>
                            <TagCard
                                source={Nurse}
                                text='Lorem ipsum dolor sit'
                                onClick={() => {}}
                            />
                        </Col>
                        <Col md={4}>
                            <TagCard
                                source={Chair}
                                text='Lorem ipsum dolor sit'
                                onClick={() => {}}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.welcome}>
                <Container>
                    <p>Welcome To</p>
                    <h1>Parkway Adult Family Homecare</h1>
                    <p>
                        We specialize in providing a home for people that are no
                        longer able to reside in their own homes safely.
                        Certified to care for Dementia and Mental Health. With
                        <span> Parkway Adult Family HomeCare,</span> you can
                        have peace of mind knowing that your loved ones are
                        being cared for by experts who have years of experience
                        in the field.
                    </p>
                </Container>
            </section>
            <section className={styles.auto_slider}>
                <div className={styles.slider}>
                    <SlideImage img={Sl_Image1} text='Lorem ipsum temipsum' />
                    <SlideImage img={Sl_Image2} text='Lorem ipsum temipsum' />
                    <SlideImage img={Sl_Image3} text='Lorem ipsum temipsum' />
                    <SlideImage img={Sl_Image4} text='Lorem ipsum temipsum' />
                </div>
            </section>
        </>
    );
};

export default Home;
