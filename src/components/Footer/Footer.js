import React, { useState, useEffect } from 'react';
import './Footer.css'
import Container from '../Container'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Hsplitter from '../Hsplitter';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [sectionsExpanded, setSectionsExpanded] = useState({
        'Chicks Gold': false,
        'Support': false,
        'Legal': false,
    });

    const toggleSection = (section) => {
        setSectionsExpanded(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <footer>
            <Container transparent>
                {isMobile ? (
                    <div className='footer-section-mobile'>
                        <div className='footer-logo mobile-logo'>
                            <div className='footer-logo-img'>
                                <img src={('../../images/chicks-logo-large.svg')} alt='logo'></img>
                            </div>
                            <div className='logo-email'>support@chicksgold.com</div>
                        </div>
                        <div className='footer-links-mobile'>
                            <div className='header-link-mobile' onClick={() => toggleSection('Chicks Gold')}>
                                <h2 >Chicks Gold</h2>
                                {sectionsExpanded['Chicks Gold'] ? (
                                    <FiChevronUp size={20} color='#fff' />
                                ) : (
                                    <FiChevronDown size={20} color='#fff' />
                                )}
                            </div>
                            {sectionsExpanded['Chicks Gold'] && (
                                <div className='mobile-links'>
                                    <h3>Games</h3>
                                    <h3>About Us</h3>
                                    <h3>Blog</h3>
                                    <h3>Sitemap</h3>
                                </div>
                            )}
                            <div className='footer-splitter'><Hsplitter /></div>
                        </div>
                        <div className='footer-links-mobile'>
                            <div className='header-link-mobile' onClick={() => toggleSection('Support')}>
                                <h2 >Support</h2>
                                {sectionsExpanded['Support'] ? (
                                    <FiChevronUp size={20} color='#fff' />
                                ) : (
                                    <FiChevronDown size={20} color='#fff' />
                                )}
                            </div>
                            {sectionsExpanded['Support'] && (
                                <div className='mobile-links'>
                                    <h3>Contact Us</h3>
                                    <h3>FAQ</h3>
                                </div>
                            )}
                            <div className='footer-splitter'><Hsplitter /></div>
                        </div>
                        <div className='footer-links-mobile'>
                            <div className='header-link-mobile' onClick={() => toggleSection('Legal')}>
                                <h2 >Legal</h2>
                                {sectionsExpanded['Legal'] ? (
                                    <FiChevronUp size={20} color='#fff' />
                                ) : (
                                    <FiChevronDown size={20} color='#fff' />
                                )}
                            </div>
                            {sectionsExpanded['Legal'] && (
                                <div className='mobile-links'>
                                    <h3>Privacy Policy</h3>
                                    <h3>Terms of Service</h3>
                                    <h3>Copyright Policy</h3>
                                </div>
                            )}
                            <div className='footer-splitter'><Hsplitter /></div>
                            <div className='mobile-review'>
                                <div className='footer-review'>
                                    <img src={('../../images/stars-5-1.svg')} alt='stars'></img>
                                    <h3>Trustpilot Reviews </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='footer-section'>
                        <div className='footer-logo'>
                            <div className='footer-logo-img'>
                                <img src={('../../images/chicks-logo-large.svg')} alt='logo'></img>
                            </div>
                            <div className='logo-email'>support@chicksgold.com</div>
                        </div>
                        <div className='footer-links'>
                            <h2>Chicks Gold</h2>
                            <div className='links'>
                                <h3>Games</h3>
                                <h3>About Us</h3>
                                <h3>Blog</h3>
                                <h3>Sitemap</h3>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <h2>Support</h2>
                            <div className='links'>
                                <h3>Conctact Us</h3>
                                <h3>FAQ</h3>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <h2>Legal</h2>
                            <div className='links'>
                                <h3>Privacy Policy</h3>
                                <h3>Terms of Service</h3>
                                <h3>Copyright Policy</h3>
                            </div>
                        </div>
                        <div className='footer-review'>
                            <img src={('../../images/stars-5-1.svg')} alt='stars'></img>
                            <h3>Trustpilot Reviews </h3>
                        </div>
                    </div>
                )}
            </Container>
        </footer>
    )
}

export default Footer
