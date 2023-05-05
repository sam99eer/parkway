import Chair from '@/assets/svg/Chair';
import Nurse from '@/assets/svg/Nurse';
import Stethoscope from '@/assets/svg/Stethoscope';
import TagCard from '@/components/page/home/TagCard';
import styles from '@/styles/Home.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Tags = () => {
    return (
        <section className={styles.tags}>
            <Container>
                <Row>
                    <Col md={4}>
                        <TagCard
                            icon={<Stethoscope />}
                            text='Lorem ipsum dolor sit'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col md={4}>
                        <TagCard
                            icon={<Nurse />}
                            text='Lorem ipsum dolor sit'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col md={4}>
                        <TagCard
                            icon={<Chair />}
                            text='Lorem ipsum dolor sit'
                            onClick={() => {}}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tags;
