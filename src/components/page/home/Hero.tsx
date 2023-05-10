import { BannerImages } from '@/constants/Data';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { Autoplay, EffectFade } from 'swiper';
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
                                        .pauseFor(4000)
                                        .start();
                                }}
                                options={{ loop: true, deleteSpeed: 170 }}
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
                            effect={'fade'}
                            modules={[EffectFade, Autoplay]}
                            className='flip-swiper'
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {BannerImages.map((item, index) => (
                                <SwiperSlide key={`header_img_${index}`}>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        className='img-fluid'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
