import { FormattedMessage } from "react-intl";
import "./AboutProject.css";

function AboutProject() {

    return (
        <section id="project" className="project">
            <h3 className="project__section"><FormattedMessage id="project__section" /></h3>
            <ul className="project__description list">
                <li className="project__column">
                    <h4 className="project__column-title"><FormattedMessage id="project__column_title" /></h4>
                    <p className="project__column-text"><FormattedMessage id="project__column_text" /></p>
                </li>
                <li className="project__column">
                    <h4 className="project__column-title"><FormattedMessage id="project__column_title2" /></h4>
                    <p className="project__column-text"><FormattedMessage id="project__column_text2" /></p>
                </li>
            </ul>
            <ul className="project__timeline list">
                <li className="project__period">
                    <p className="project__period-length project__period-length_type_first"><FormattedMessage id="project__period_length_back" /></p>
                    <p className="project__period-subject"><FormattedMessage id="project__period_subject_back" /></p>
                </li>
                <li className="project__period">
                    <p className="project__period-length project__period-length_type_last"><FormattedMessage id="project__period_length_front" /></p>
                    <p className="project__period-subject"><FormattedMessage id="project__period_subject_front" /></p>
                </li>
            </ul>
        </section>
    );
};

export default AboutProject;
