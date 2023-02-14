import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormError from "../FormError/FormError";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import "./Login.css";
import "../FormContainer/FormContainer.css"

function Login({ onSubmit, onChange, pagetype }) {

    return (
        <><Header
            pagetype={pagetype} />
        <main className="login">
                <FormContainer
                    name="login"
                    greeting="Рады видеть!"
                    onSubmit={onSubmit}
                    buttonText="Войти"
                    pagetype={pagetype}
                    formtype="auth"
                >
                <fieldset className="form__fieldset">
                <label 
                    for="login-email-input" 
                    className="form__label form__label_type_auth">E-mail</label>
                    <FormInput
                        label="E-mail"
                        type="email"
                        name="email"
                        id="login-email-input"
                        formtype="auth"
                        placeholder="pochta@yandex.ru"
                        value="pochta@yandex.ru"
                        onChange={onChange} />
                    <FormError />
                    <label 
                        for="login-password-input" 
                        className="form__label form__label_type_auth">Пароль</label>
                    <FormInput
                        label="Пароль"
                        type="password"
                        name="password"
                        id="login-password-input"
                        formtype="auth"
                        placeholder=""
                        value="123456"
                        onChange={onChange} />
                    <FormError />
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
