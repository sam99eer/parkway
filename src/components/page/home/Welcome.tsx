import styles from '@/styles/Home.module.css';
import Container from 'react-bootstrap/Container';

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <Container data-aos='fade-right' data-aos-delay='150'>
                <p>Welcome To</p>
                <h1>Parkway Adult Family Homecare</h1>
                <p>
                    We specialize in providing a home for people that are no
                    longer able to reside in their own homes safely. Certified
                    to care for Dementia and Mental Health. With
                    <span> Parkway Adult Family HomeCare,</span> you can have
                    peace of mind knowing that your loved ones are being cared
                    for by experts who have years of experience in the field.
                </p>
            </Container>
        </section>
    );
};

export default Welcome;
