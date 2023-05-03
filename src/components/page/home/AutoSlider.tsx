import Sl_Image1 from '@/assets/images/moving_slide1.jpg';
import Sl_Image2 from '@/assets/images/moving_slide2.jpg';
import Sl_Image3 from '@/assets/images/moving_slide3.jpg';
import Sl_Image4 from '@/assets/images/moving_slide4.jpg';
import SlideImage from '@/components/page/home/SlideImage';
import styles from '@/styles/Home.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const AutoSlider = () => {
    return (
        <section className={styles.auto_slider}>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1096: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <SlideImage img={Sl_Image1} text='Lorem ipsum temipsum' />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImage img={Sl_Image2} text='Lorem ipsum temipsum' />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImage img={Sl_Image3} text='Lorem ipsum temipsum' />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImage img={Sl_Image4} text='Lorem ipsum temipsum' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default AutoSlider;
