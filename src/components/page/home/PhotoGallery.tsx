import pic1 from '@/assets/images/moving_slide1.jpg';
import pic2 from '@/assets/images/moving_slide2.jpg';
import pic3 from '@/assets/images/moving_slide3.jpg';
import pic4 from '@/assets/images/moving_slide4.jpg';
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
                    <Image src={pic1} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={pic2} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={pic3} alt='pic' className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={pic4} alt='pic' className='img-fluid' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PhotoGallery;
