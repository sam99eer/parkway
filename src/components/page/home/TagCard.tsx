import styles from '@/styles/Home.module.css';

const TagCard = (props: {
    text: string;
    onClick: () => void;
    icon: React.ReactNode;
    endCard?: boolean;
}) => {
    return (
        <div
            className={
                !!props.endCard
                    ? `${styles.tagCard} ${styles.endCard}`
                    : styles.tagCard
            }
        >
            {props.icon}
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
