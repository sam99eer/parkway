import Sl_Image1 from '@/assets/images/moving_slide1.jpg';
import Sl_Image2 from '@/assets/images/moving_slide2.jpg';
import Sl_Image3 from '@/assets/images/moving_slide3.jpg';
import Sl_Image4 from '@/assets/images/moving_slide4.jpg';
import SlideImage from '@/components/page/home/SlideImage';
import styles from '@/styles/Home.module.css';

const AutoSlider = () => {
    return (
        <section className={styles.auto_slider}>
            <div className={styles.slider}>
                <SlideImage img={Sl_Image1} text='Lorem ipsum temipsum' />
                <SlideImage img={Sl_Image2} text='Lorem ipsum temipsum' />
                <SlideImage img={Sl_Image3} text='Lorem ipsum temipsum' />
                <SlideImage img={Sl_Image4} text='Lorem ipsum temipsum' />
            </div>
        </section>
    );
};

export default AutoSlider;
