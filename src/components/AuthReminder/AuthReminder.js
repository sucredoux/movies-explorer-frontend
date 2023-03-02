import { Link } from "react-router-dom";
import "./AuthReminder.css";

function AuthReminder({ question, path, actionText, pagetype, onLogout }) {

    return (
        <div className={`auth__reminder auth__reminder_type_${pagetype}`}>
            <p className="auth__reminder-text">
                    {question}
                    <Link to={path} onClick={onLogout} className={`link auth__reminder-link auth__reminder-link_type_${pagetype}`}>
                        {actionText}
                    </Link>
            </p>
        </div>
    );
};

export default AuthReminder;

/*
<Switch>
            <Route path="/signin" exact>
              <Link
                to="/signup"
                className="auth__reminder-link"
              >
                {actionText}
              </Link>
            </Route>
            <Route path="/signin" exact>
              <Link to="/signup" className="auth__reminder-link">
                Регистрация
              </Link>
            </Route>
            <Route path="/signup" exact>
              <Link to="/signin" className="auth__reminder-link">
                Войти
              </Link>
            </Route>
          </Switch>
*/