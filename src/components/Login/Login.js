import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormError from "../FormError/FormError";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import "./Login.css";
import "../FormContainer/FormContainer.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login({ loggedIn, onLogin, pagetype, resError }) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState({
        email: "",
        password: "",
    });
    const [hasError, setHasError] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
    });

    function handleInput(e) {
        setIsActive(true);
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrorMessage({
            ...errorMessage,
            [name]: e.target.validationMessage,
          });
        setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
        });
        if (e.target.validity.valid === false) {
            setHasError(true);
          } else {
            setHasError(false);
            setErrorMessage({
                email: "",
                password: "",
            });
            setIsValid({
                email: "",
                password: "",
            });
            }
    };

    function handleSubmit(e) {
        e.preventDefault();
        let { email, password } = userData;
        onLogin({ email, password });
    };

 /*   useEffect(() => {
        setUserData({
            name: "",
            email: "",
            password: "",
        });
        setErrorMessage({
            name: "",
            email: "",
            password: "",
        });
        setIsValid({
            name: "",
            email: "",
            password: "",
        });
        setHasError(false);
        setIsActive(false);
      }, []);*/

    const classNameError = "form__input_type_error";
    const classNameCorrect = "form__input_type_correct";

    if (loggedIn) {
        return <Redirect to="/movies" />
    }

    return (
        <><Header
            pagetype={pagetype} />
        <main className="login">
                <FormContainer
                    name="login"
                    greeting="Рады видеть!"
                    onSubmit={handleSubmit}
                    buttonText="Войти"
                    pagetype={pagetype}
                    formtype="auth"
                    isActive={isActive}
                    isValid={isValid}
                    hasError={hasError}
                    resError={resError}
                >
                <fieldset className="form__fieldset">
                    <label 
                        for="login-email-input" 
                        className="form__label form__label_type_auth">E-mail
                    </label>
                    <FormInput
                        label="E-mail"
                        type="email"
                        name="email"
                        id="login-email-input"
                        formtype="auth"
                        required
                        placeholder="pochta@yandex.ru"
                        minLength="2"
                        maxLength="40"
                        value={userData?.email}
                        onChange={handleInput}
                        hasError={hasError}
                        isValid={isValid}
                        errorMessage={errorMessage?.email} 
                        className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}           
                        />
                    <label 
                            for="login-password-input" 
                            className="form__label form__label_type_auth">Пароль
                    </label>
                    <FormInput
                        label="Пароль"
                        type="password"
                        name="password"
                        id="login-password-input"
                        formtype="auth"
                        required
                        placeholder=""
                        value={userData?.password}
                        onChange={handleInput}
                        hasError={hasError}
                        isValid={isValid}
                        errorMessage={errorMessage?.email} 
                        className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}           
                        />
                </fieldset>
                </FormContainer>
                <AuthReminder
                    question="Ещё не зарегистрированы? "
                    path="/signup"
                    actionText="Регистрация" />
        </main>
        <Footer
            pagetype={pagetype} />
        </>
    );
};

export default Login;
