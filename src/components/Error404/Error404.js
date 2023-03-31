import "./Error404.css";
import "../AuthReminder/AuthReminder.css";
import { FormattedMessage } from "react-intl";

function Error404({ pagetype, onClick }) {

    return (
        <section className="error">
            <div className="error__block">
                <p className="error__number">404</p>
                <p className="error__text"><FormattedMessage id="error__page_not_found" /></p>
            </div>
            <div className={`auth__reminder auth__reminder_type_${pagetype}`}>
                <div className="auth__reminder-text">
                        <button onClick={onClick} className={`link auth__reminder-link auth__reminder-link_type_${pagetype}`}>
                            <FormattedMessage id="error__back" /> 
                        </button>
                </div>
            </div>           
        </section>
    );
};

export default Error404;
