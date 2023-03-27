import React from "react";
import { FormattedDate } from "react-intl";
import './Footer.css';

function Footer({ pagetype }) {

const footerClassName = `footer footer_type_${pagetype}`;

    return (
        <footer className={footerClassName}>
            <p className="footer__reference">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info-block">
                <p className="footer__data">&copy; <FormattedDate value={Date.now()} /></p>
                <ul className="list footer__contacts">
                    <li className="footer__contact-item">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="link footer__contact-link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__contact-item">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="link footer__contact-link">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
