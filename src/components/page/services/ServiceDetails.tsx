import { LINKS } from '@/constants/Links';
import styles from '@/styles/Services.module.css';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

const ServiceDetails = () => {
    return (
        <section className={styles.service}>
            <Container>
                <p
                    className={styles.breadcrumb}
                    data-aos='fade-right'
                    data-aos-delay='200'
                >
                    <Link href={LINKS.HOME}>
                        <span>Home</span>
                    </Link>{' '}
                    ~~ Our Services
                </p>
                <p
                    className={styles.highlight}
                    data-aos='zoom-in'
                    data-aos-delay='200'
                >
                    Our genuine services offer specialized care that truly
                    matters
                </p>
                <p
                    className={styles.service_para}
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
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
