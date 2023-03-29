import { FormattedMessage } from "react-intl";
import student__photo from "../../images/student__photo.png";
import "./AboutMe.css";

function AboutMe() {

    return (
        <section className="student">
            <h3 className="student__section"><FormattedMessage id="student__section" /></h3>
            <div className="student__block">
                <div className="student__block-info">
                    <div className="student__info">
                        <h2 className="student__name"><FormattedMessage id="student__name" /></h2>
                        <p className="student__description"><FormattedMessage id="student__description" /></p>
                        <p className="student__about"><FormattedMessage id="student__about" /> 
                            </p>
                            <p className="student__about">
                                <FormattedMessage id="student__about2" values={{ dash: <>&#8209;</> }} />                            
                            </p>                            
                    </div>
                    <a href="https://github.com/sucredoux" target="_blank" rel="noreferrer" className="student__link link">Github</a>
                </div>
                <img className="student__photo" src={student__photo} alt="Фото студента" />
            </div>
        </section>
    );
};

export default AboutMe;
