import { Link } from "react-router-dom";
import "./AuthReminder.css";

function AuthReminder({ question, path, actionText, pagetype }) {

    return (
        <div className={`auth__reminder auth__reminder_type_${pagetype}`}>
            <p className="auth__reminder-text">
                    {question}
                    <Link to={path} className={`link auth__reminder-link auth__reminder-link_type_${pagetype}`}>
                        {actionText}
                    </Link>
            </p>
        </div>
    );
};

export default AuthReminder;