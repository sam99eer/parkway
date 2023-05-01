import styles from '@/styles/Home.module.css';
import Image, { StaticImageData } from 'next/image';

const SlideImage = (props: { text: string; img: StaticImageData }) => {
    return (
        <div className={styles.slide_image}>
            <Image src={props.img} alt={props.text} />
            <p>{props.text}</p>
        </div>
    );
};

export default SlideImage;
