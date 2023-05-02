import Chair from '@/assets/icons/chair.png';
import Nurse from '@/assets/icons/nurse.png';
import Stethoscope from '@/assets/icons/stethoscope.png';
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
                            source={Stethoscope}
                            text='Lorem ipsum dolor sit'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col md={4}>
                        <TagCard
                            source={Nurse}
                            text='Lorem ipsum dolor sit'
                            onClick={() => {}}
                        />
                    </Col>
                    <Col md={4}>
                        <TagCard
                            source={Chair}
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
