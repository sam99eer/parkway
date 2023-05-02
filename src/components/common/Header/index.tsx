import Logo from '@/assets/icons/PHlogo.png';
import FB from '@/assets/icons/fb.png';
import Mail from '@/assets/icons/mail.png';
import Mobile from '@/assets/icons/mobile.png';
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
                        <Link href={LINKS.HOME}>
                            <Image src={FB} alt='FB' />
                        </Link>
                        <Link href={LINKS.HOME}>
                            <Image src={Mail} alt='Mail' />
                        </Link>
                        <Link href={LINKS.HOME}>
                            <Image src={Mobile} alt='Mobile' />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
