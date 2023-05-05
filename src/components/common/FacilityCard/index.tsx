import PointArrow from '@/assets/svg/PointArrow';
import styles from '@/styles/Facility.module.css';
import Image, { StaticImageData } from 'next/image';

const FacilityCard = (props: {
    text: string;
    inverted?: boolean;
    img: StaticImageData;
    subheading?: string;
}) => {
    return (
        <div
            className={`${styles.facility_card} ${
                !!props.inverted ? styles.inverted_card : ''
            }`}
        >
            <h2>
                {props.text}
                {!!props.subheading ? (
                    <span>
                        <br />
                        {props.subheading}
                    </span>
                ) : (
                    ''
                )}
            </h2>
            <div
                className={`${styles.arrow} ${
                    !!props.inverted ? styles.inverted_arrow : ''
                }`}
            >
                <PointArrow />
            </div>
            <Image src={props.img} alt={props.text} />
        </div>
    );
};

export default FacilityCard;
