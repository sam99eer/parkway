import QuadPic from '@/assets/images/quad_pic.jpg';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const Mission = () => {
    return (
        <section className={styles.mission}>
            <Row className='g-0'>
                <Col className={styles.mission_details} md={6}>
                    <h1>Our Mission</h1>
                    <p>
                        The mission and intent of PARKWAY{' '}
                        <span>ADULT FAMILY HOMECARE</span> is to make a positive
                        difference in every life we touch, promoting health,
                        safety and individual rights. Our home will provide
                        housing for up to 6 adult persons who are unable to live
                        independently within the community. Residents will be
                        able to decorate and furnish their own living spaces in
                        a way that reminds them of their own home complete with
                        family pictures. We will offer both individual rooms as
                        well as double occupancy .{' '}
                        <span className={styles.link}>Know More</span>
                    </p>
                </Col>
                <Col
                    md={6}
                    className='d-flex justify-content-center justify-content-md-end'
                >
                    <Image src={QuadPic} alt='Quad' className='img-fluid' />
                </Col>
            </Row>
        </section>
    );
};

export default Mission;
