import Img1 from '@/assets/images/facility_1.jpg';
import Img2 from '@/assets/images/facility_2.jpg';
import Img3 from '@/assets/images/facility_3.jpg';
import Img4 from '@/assets/images/facility_4.jpg';
import Img5 from '@/assets/images/facility_5.jpg';
import Img6 from '@/assets/images/facility_6.jpg';
import Img7 from '@/assets/images/facility_7.jpg';
import Img8 from '@/assets/images/facility_8.jpg';
import FacilityCard from '@/components/common/FacilityCard';
import styles from '@/styles/Facility.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Facilities = () => {
    return (
        <section className={styles.facilities}>
            <Container>
                <p className={styles.breadcrumb}>
                    <span>Home</span> ~~ Facility
                </p>

                <div className={styles.details}>
                    <p>
                        We stay true to our commitment to keeping our residents
                        safe and comfortable. At our facility, your loved ones
                        can enjoy a wide variety of amenities that include:
                    </p>

                    <Row className='my-3'>
                        <Col xxl={6}>
                            <FacilityCard img={Img1} text='Emergency' />
                        </Col>
                        <Col xxl={6}>
                            <FacilityCard
                                img={Img2}
                                text='Spacious rooms'
                                inverted
                            />
                        </Col>
                    </Row>

                    <Row className='my-3'>
                        <Col xxl={6}>
                            <FacilityCard img={Img3} text='Housekeeping' />
                        </Col>
                        <Col xxl={6}>
                            <FacilityCard img={Img4} text='Outing' inverted />
                        </Col>
                    </Row>

                    <Row className='my-3'>
                        <Col xxl={6}>
                            <FacilityCard img={Img5} text='Laundry service' />
                        </Col>
                        <Col xxl={6}>
                            <FacilityCard
                                img={Img6}
                                text='Exercise Programe'
                                inverted
                            />
                        </Col>
                    </Row>

                    <Row className='my-3'>
                        <Col xxl={6}>
                            <FacilityCard
                                img={Img7}
                                text='Entertainment'
                                subheading='(Movies/Popcorn/Puzzles/Visiting Library)'
                            />
                        </Col>
                        <Col xxl={6}>
                            <FacilityCard
                                img={Img8}
                                text='Nutritious home-cooked meals and snacks'
                                inverted
                            />
                        </Col>
                    </Row>
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
