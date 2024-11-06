import { Tooltip } from 'flowbite-react';
import { FiFolder, FiHome, FiInstagram, FiMail } from 'react-icons/fi';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-text">
                    2024 orime studio ©
                </span>
                <ul className="footer-icons">
                    <li className="icon-item">
                        <Tooltip content="Home" placement="top" className="tooltip">
                            <a href="/" className="icon-link"><FiHome size={20} /></a>
                        </Tooltip>
                    </li>
                    <li className="icon-item">
                        <Tooltip content="projects" placement="top" className="tooltip">
                            <a href="#firstProject" className="icon-link"><FiFolder size={20} /></a>
                        </Tooltip>
                    </li>
                    <li className="icon-item">
                        <Tooltip content="Contact" placement="top" className="tooltip">
                            <a href="mailto:orime.studio.wd@gmail.com" className="icon-link">
                                <FiMail size={20} />
                            </a>
                        </Tooltip>
                    </li>
                    <li className="icon-item">
                        <Tooltip content="Instagram" placement="top" className="tooltip">
                            <a href="/" className="icon-link">
                                <FiInstagram size={20} />
                            </a>
                        </Tooltip>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;
