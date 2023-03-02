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

function Login({ loggedIn, onLogin, pagetype }) {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let { email, password } = userData;
        onLogin({ email, password });
    }

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
                        placeholder="pochta@yandex.ru"
                        minLength="2"
                        maxLength="40"
                        value={userData?.email}
                        onChange={handleChange} />
                    <FormError
                        formtype="auth" />
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
                        placeholder=""
                        value={userData?.password}
                        onChange={handleChange} />
                    <FormError
                        formtype="auth" />
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
