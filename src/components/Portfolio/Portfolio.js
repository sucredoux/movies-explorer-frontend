import portfolio__link from "../../images/portfolio__website-link.svg";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio">
            <p className="portfolio__section">Портфолио</p>
            <ul className="portfolio__list list">
                <li className="portfolio__website">
                    <a href="https://github.com/sucredoux/how-to-learn" className="portfolio__website-link link">
                        <p className="portfolio__website-name">Статичный сайт</p>
                        <img className="portfolio__link-arrow" src={portfolio__link} alt="Переход на статичный сайт"/>
                    </a>
                </li>
                <li className="portfolio__website">
                    <a href="https://sucredoux.github.io/russian-travel/index.html" className="portfolio__website-link link">
                        <p className="portfolio__website-name">Адаптивный сайт</p>
                        <img className="portfolio__link-arrow" src={portfolio__link} alt="Переход на адаптивный сайт"/>
                    </a>
                </li>
                <li className="portfolio__website">
                    <a href="https://github.com/sucredoux/react-mesto-auth" className="portfolio__website-link link">
                        <p className="portfolio__website-name">Одностраничное приложение</p>
                        <img className="portfolio__link-arrow" src={portfolio__link} alt="Переход на одностраничное приложение"/>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;