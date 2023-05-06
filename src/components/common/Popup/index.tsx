import styles from '@/styles/Popup.module.css';

const Popup = (props: { text: string; onClose: () => void }) => {
    return (
        <div className={styles.container} onClick={props.onClose}>
            <div
                className={styles.popup}
                data-aos='fade-up'
                data-aos-delay='100'
            >
                <button onClick={props.onClose}>&times;</button>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Popup;
