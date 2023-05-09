import Chair from '@/assets/svg/Chair';
import Nurse from '@/assets/svg/Nurse';
import Stethoscope from '@/assets/svg/Stethoscope';
import TagCard from '@/components/page/home/TagCard';
import styles from '@/styles/Home.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Tags = () => {
    return (
        <section className={styles.tags}>
            <Container data-aos='fade-up' data-aos-delay='100'>
                <Row>
                    <Col lg={4}>
                        <TagCard
                            icon={<Stethoscope />}
                            text='Home docotor and therapists'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col lg={4}>
                        <TagCard
                            icon={<Nurse />}
                            text='Profesional trained staff available'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col lg={4}>
                        <TagCard
                            icon={<Chair />}
                            text='Alzherimer/Dementia certified'
                            onClick={() => {}}
                            endCard
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tags;
