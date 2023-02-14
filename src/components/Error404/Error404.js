import AuthReminder from "../AuthReminder/AuthReminder";
import { useHistory } from "react-router-dom";
import "./Error404.css";

function Error404() {

    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    return (
        <section className="error">
            <div className="error__block">
                <p className="error__number">404</p>
                <p className="error__text">Страница не найдена</p>
            </div>
            <AuthReminder
                path={goBack}
                actionText="Назад"
            />
        </section>
    );
};

export default Error404;