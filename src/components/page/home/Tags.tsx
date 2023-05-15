import Chair from '@/assets/svg/Chair';
import Nurse from '@/assets/svg/Nurse';
import Stethoscope from '@/assets/svg/Stethoscope';
import TagCard from '@/components/page/home/TagCard';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

const Tags = () => {
    const router = useRouter();

    const navigateHandler = () => {
        router.push(LINKS.SERVICES);
    };

    return (
        <section className={styles.tags}>
            <Container data-aos='fade-up' data-aos-delay='100'>
                <Row>
                    <Col lg={4}>
                        <TagCard
                            icon={<Stethoscope />}
                            text='Home doctor and therapists'
                            onClick={navigateHandler}
                        />
                    </Col>
                    <Col lg={4}>
                        <TagCard
                            icon={<Nurse />}
                            text='Professional trained staff available'
                            onClick={navigateHandler}
                        />
                    </Col>
                    <Col lg={4}>
                        <TagCard
                            icon={<Chair />}
                            text='Alzherimer/Dementia certified'
                            onClick={navigateHandler}
                            endCard
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tags;
