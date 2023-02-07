import portfolio__link from "../../images/portfolio__website-link.svg";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio">
            <p className="portfolio-section">Портфолио</p>
            <ul className="portfolio_list list">
                <li className="portfolio__website">
                    <p className="portfolio__website-name">Статичный сайт</p>
                    <Link to="#"><img className="portfolio__website-link link" src={portfolio__link} alt="Переход на внешний сайт"/></Link>
                </li>
                <li className="portfolio__website">
                    <p className="portfolio__website-name">Адаптивный сайт</p>
                    <Link to="#"><img className="portfolio__website-link link" src={portfolio__link} alt="Переход на внешний сайт"/></Link>
                </li>
                <li className="portfolio__website">
                    <p className="portfolio__website-name">Одностраничное приложение</p>
                    <Link to="#"><img className="portfolio__website-link link" src={portfolio__link} alt="Переход на внешний сайт"/></Link>
                </li>
            </ul>
        </section>

    );
};

export default Portfolio;