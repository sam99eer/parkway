import pic1 from '@/assets/images/moving_slide1.jpg';
import pic2 from '@/assets/images/moving_slide2.jpg';
import pic3 from '@/assets/images/moving_slide3.jpg';
import pic4 from '@/assets/images/moving_slide4.jpg';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const PhotoGallery = () => {
    return (
        <section className={styles.gallery}>
            <h1>Our Photogallery</h1>
            <Image src={pic1} alt='pic' />
            <Image src={pic2} alt='pic' />
            <Image src={pic3} alt='pic' />
            <Image src={pic4} alt='pic' />
        </section>
    );
};

export default PhotoGallery;
