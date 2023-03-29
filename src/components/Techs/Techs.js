import { FormattedMessage } from "react-intl";
import "./Techs.css";

function Techs() {

    return (
        <section className="techs">
            <h3 className="techs__section"><FormattedMessage id="techs__section" /></h3>
            <div className="techs__content">
                <h2 className="techs__content-title"><FormattedMessage id="techs__content_title" /></h2>
                <p className="techs__content-text"><FormattedMessage id="techs__content_text" /></p>
                <ul className="techs__content-list list">
                    <li className="techs__content-item">HTML</li>
                    <li className="techs__content-item">CSS</li>
                    <li className="techs__content-item">JS</li>
                    <li className="techs__content-item">React</li>
                    <li className="techs__content-item">Git</li>
                    <li className="techs__content-item">Express.js</li>
                    <li className="techs__content-item">mongoDB</li>
                </ul>
            </div>
        </section>
    );
};

export default Techs;
