import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const PhotoGallery = () => {
    return (
        <section className={styles.gallery}>
            <h1>Our Photogallery</h1>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides
                autoplay
                className='mySwiper'
            >
                <SwiperSlide>
                    <Image src={home1} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={home2} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={home3} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={home4} alt='pic' className='img-fluid' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PhotoGallery;
