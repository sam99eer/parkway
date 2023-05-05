import styles from '@/styles/Services.module.css';
import { Container } from 'react-bootstrap';

const ServiceDetails = () => {
    return (
        <section className={styles.service}>
            <Container>
                <p className={styles.breadcrumb}>
                    <span>Home</span> ~~ Our Services
                </p>
                <p className={styles.highlight}>
                    Our genuine services offer specialized care that truly
                    matters
                </p>
                <p className={styles.service_para}>
                    We offer senior citizen care in a single family home. So,
                    our door and windows are equipped with sensors that alert us
                    to any potential wandering of residents. As well, we also
                    have emergency assist call bell system installed in the
                    bathroom. Along with individual personal call bells that
                    your loved one carry with them at all times if they choose.
                    We want you to know the safety of your loved ones is our
                    main focus.
                </p>
            </Container>
        </section>
    );
};

export default ServiceDetails;
