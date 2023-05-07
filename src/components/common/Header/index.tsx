import Logo from '@/assets/images/PHlogo.png';
import Fb from '@/assets/svg/Fb';
import Mail from '@/assets/svg/Mail';
import Mobile from '@/assets/svg/Mobile';
import { LINKS } from '@/constants/Links';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props: { activeLink: LINKS }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleHandler = () => {
        setMenuOpen((oldState) => !oldState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar
            expand='lg'
            className={`${styles.navbar} ${
                isScrolled ? styles.navbar_scroll : ''
            }`}
        >
            <Container>
                <Navbar.Brand>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='img-fluid'
                        width={150}
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    className={styles.toggleBtn}
                    aria-controls='basic-navbar-nav'
                    onClick={toggleHandler}
                >
                    <div
                        className={`${styles.hamburger} ${
                            menuOpen ? styles.is_active : ''
                        }`}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse
                    id='basic-navbar-nav'
                    className={`${isScrolled ? '' : styles.menu_box}`}
                >
                    <Nav className='mx-auto my-4 my-lg-0 gap-5'>
                        <Link
                            className={`${styles.middleLink} ${
                                props.activeLink === LINKS.HOME
                                    ? styles.active
                                    : ''
                            }`}
                            href={LINKS.HOME}
                        >
                            Home
                        </Link>
                        <Link
                            className={`${styles.middleLink} ${
                                props.activeLink === LINKS.ABOUT
                                    ? styles.active
                                    : ''
                            }`}
                            href={LINKS.ABOUT}
                        >
                            About us
                        </Link>
                        <Link
                            className={`${styles.middleLink} ${
                                props.activeLink === LINKS.SERVICES
                                    ? styles.active
                                    : ''
                            }`}
                            href={LINKS.SERVICES}
                        >
                            Services
                        </Link>
                        <Link
                            className={`${styles.middleLink} ${
                                props.activeLink === LINKS.FACILITY
                                    ? styles.active
                                    : ''
                            }`}
                            href={LINKS.FACILITY}
                        >
                            Facility
                        </Link>
                        <Link
                            className={`${styles.middleLink} ${
                                props.activeLink === LINKS.CONTACT
                                    ? styles.active
                                    : ''
                            }`}
                            href={LINKS.CONTACT}
                        >
                            Contact us
                        </Link>
                    </Nav>

                    <Nav
                        className={`${styles.icons} flex-row justify-content-center justify-content-lg-end`}
                    >
                        <Link
                            href='https://www.facebook.com/Parkwayadulthomecare/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Fb />
                        </Link>

                        <Link href='tel:509-237-7297'>
                            <Mobile />
                        </Link>

                        <Link href='mailto:parkwayadulthomecare@yahoo.com'>
                            <Mail />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
