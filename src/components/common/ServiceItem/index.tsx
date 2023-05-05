import Check from '@/assets/svg/Check';
import styles from '@/styles/Services.module.css';

const ServiceItem = (props: { text: string }) => {
    return (
        <div className={styles.service_item}>
            <Check />
            <p>{props.text}</p>
        </div>
    );
};

export default ServiceItem;
