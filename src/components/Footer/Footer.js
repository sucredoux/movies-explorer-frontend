import React from "react";
import './Footer.css';

function Footer({ pagetype }) {

const footerClassName = `footer footer_type_${pagetype}`;

    return (
        <footer className={footerClassName}>
            <p className="footer__reference">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info-block">
                <p className="footer__data">&copy; 2020</p>
                <ul className="footer__contacts">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__contact-link link">Яндекс.Практикум</a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__contact-link link">Github</a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
