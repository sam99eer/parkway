import styles from '@/styles/Facility.module.css';
import { Container } from 'react-bootstrap';

const Facilities = () => {
    return (
        <section className={styles.facilities}>
            <Container>
                <p className={styles.breadcrumb}>
                    <span>Home</span> ~~ Contact Us
                </p>

                <div className={styles.details}>
                    <p>
                        We stay true to our commitment to keeping our residents
                        safe and comfortable. At our facility, your loved ones
                        can enjoy a wide variety of amenities that include:
                    </p>
                </div>

                <p className={styles.reach}>
                    <span>Reach Out</span> to us today if you have any questions
                    or need additional information about our facility and the
                    services we offer.
                </p>
            </Container>
        </section>
    );
};

export default Facilities;
