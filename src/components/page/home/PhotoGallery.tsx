import { GalleryImages } from '@/constants/Data';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const PhotoGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <section className={styles.gallery}>
            <h1>Our Photogallery</h1>
            <Swiper
                data-aos='flip-right'
                data-aos-delay='150'
                initialSlide={1}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={0}
                className='gallery-slider'
                navigation
                modules={[Navigation, Thumbs]}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
            >
                {GalleryImages.map((item, index) => (
                    <SwiperSlide key={`gallery_img_${index}`}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className={styles.swiper_image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className='swiper-preview'
                onSwiper={setThumbsSwiper}
            >
                {GalleryImages.map((item, index) => (
                    <SwiperSlide key={`preview_img_${index}`}>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className='img-fluid'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PhotoGallery;
