import SmilingMan from '@/assets/images/smiling_man.png';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Autoplay, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typewriter from 'typewriter-effect';

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
                        <h1>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(500)
                                        .typeString(
                                            'Lending Our Hand for the Service of Others'
                                        )
                                        .start();
                                }}
                            />
                        </h1>
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
                    <Col md={6} className='py-2 py-md-0'>
                        <Swiper
                            effect={'flip'}
                            modules={[EffectFlip, Autoplay]}
                            loop
                            className='flip-swiper'
                            flipEffect={{
                                slideShadows: false,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <Image
                                    src={SmilingMan}
                                    alt='Old Man Smiling'
                                    className='img-fluid'
                                    width={400}
                                    data-aos='flip-right'
                                    data-aos-delay='450'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='https://fastly.picsum.photos/id/335/400/350.jpg?hmac=DBECucZD-k_ssT9QMp5TrGxoNryrdRwJ4-TyeltVcwY'
                                    className='img-fluid rounded-circle'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='https://fastly.picsum.photos/id/609/400/350.jpg?hmac=8zcnQ6_dyEjDk8B-LU2dJzXImOxhM9CVqP0AwIHu8hg'
                                    className='img-fluid rounded-circle'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='https://fastly.picsum.photos/id/423/400/350.jpg?hmac=_Uw8SITI_X6jZnl0awQTU3ao4xYeDrq7L-UbrmWpFqw'
                                    className='img-fluid rounded-circle'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
