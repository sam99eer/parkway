import styles from '@/styles/Home.module.css';
import Image, { StaticImageData } from 'next/image';

const TagCard = (props: {
    text: string;
    onClick: () => void;
    source: StaticImageData;
}) => {
    return (
        <div className={styles.tagCard}>
            <Image
                src={props.source}
                alt={props.text}
                className={styles.tagImg}
            />
            <div className={styles.tagDetails}>
                <p>{props.text}</p>
                <p
                    className={styles.tagBtn}
                    aria-label='button'
                    onClick={props.onClick}
                >
                    View more
                </p>
            </div>
        </div>
    );
};

export default TagCard;
