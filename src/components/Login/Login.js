import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import "./Login.css";
import "../FormContainer/FormContainer.css";
import { useEffect, useState } from "react";
import FormError from "../FormError/FormError";
import { FormattedMessage, useIntl } from "react-intl";

function Login({ onLogin, formtype, pagetype, resError, hasResError }) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState({
        email: false,
        password: false,
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState({
        email: false,
        password: false,
    });
    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
    });

    const intl = useIntl();

    function handleInput(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrorMessage({
            ...errorMessage,
            [name]: e.target.validationMessage,
          });
        setIsFormValid(e.target.closest("form").checkValidity());
        setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
        });
        setHasError({
            ...hasError,
            [name]: !e.target.validity.valid,
        });
        if (isFormValid === true) {
            setHasError({
                email: false,
                password: false,
            });
            setErrorMessage({
                email: "",
                password: "",
            });
            }
    };

    function handleSubmit(e) {
        e.preventDefault();
        let { email, password } = userData;
        onLogin({ email, password });
        setIsFormValid(false);
    };

    useEffect(() => {
        setUserData({
            email: "",
            password: "",
        });
        setErrorMessage({
            email: "",
            password: "",
        });
        setIsValid({
            email: false,
            password: false,
        });
        setHasError(false);
        setIsFormValid(false);
      }, []);

    return (
        <><Header
            pagetype={pagetype} />
        <main className="login">
                <FormContainer
                    name="login"
                    greeting={intl.formatMessage({ id: "login__greeting" })}
                    onSubmit={handleSubmit}
                    buttonText={intl.formatMessage({ id: "login__button" })}
                    pagetype={pagetype}
                    formtype="auth"
                    isValid={isValid}
                    isFormValid={isFormValid}
                    hasResError={hasResError}
                    resError = {resError}
                >
                <fieldset className="form__fieldset">
                    <label 
                        htmlFor="login-email-input" 
                        className="form__label form__label_type_auth"><FormattedMessage id="login__form_label_email" />
                    </label>
                    <FormInput
                        label="E-mail"
                        type="email"
                        name="email"
                        id="login-email-input"
                        formtype="auth"
                        required
                        placeholder={intl.formatMessage({ id: "login__placeholder_email" })}
                        minLength="2"
                        maxLength="40"
                        value={userData?.email}
                        onChange={handleInput}
                        hasError={hasError}
                        isValid={isValid}             
                        />
                    <FormError
                        formtype={formtype}
                        hasError={hasError}
                        errorMessage={errorMessage?.email} 
                     />
                    <label 
                            htmlFor="login-password-input" 
                            className="form__label form__label_type_auth"><FormattedMessage id="login__form_label_password" />
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
                        />
                    <FormError
                        formtype={formtype}
                        hasError={hasError}
                        errorMessage={errorMessage?.password}
                     />
                </fieldset>
            </FormContainer>
            <AuthReminder
                question={intl.formatMessage({ id: "login__question" })}
                path="/signup"
                actionText={intl.formatMessage({ id: "login__action_text" })}
                pagetype={pagetype} />
        </main>
        <Footer
            pagetype={pagetype} />
        </>
    );
};

export default Login;
