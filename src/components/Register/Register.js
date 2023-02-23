import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import FormError from "../FormError/FormError";
import "./Register.css";
import "../FormContainer/FormContainer.css";

function Register({ onSubmit, onChange, pagetype }) {

    return (
        <><Header
            pagetype={pagetype} />
        <main className="register">
                <FormContainer
                    name="register"
                    greeting="Добро пожаловать!"
                    onSubmit={onSubmit}
                    buttonText="Зарегистрироваться"
                    pagetype={pagetype}
                    formtype="auth"
                >
                <fieldset className="form__fieldset">
                    <label 
                        for="register-name-input" 
                        className="form__label form__label_type_auth">Имя
                    </label>
                    <FormInput
                        type="text"
                        name="name"
                        id="register-name-input"
                        formtype="auth"
                        placeholder="Виталий"
                        value="Виталий"
                        onChange={onChange}
                    />
                        <label 
                        for="register-email-input" 
                        className="form__label form__label_type_auth">E-mail</label>
                    <FormInput
                        type="email"
                        name="email"
                        id="register-email-input"
                        formtype="auth"
                        placeholder="pochta@yandex.ru"
                        value="pochta@yandex.ru"
                        onChange={onChange}
                    />
                    <label 
                        for="register-password-input" 
                        className="form__label form__label_type_auth">Пароль</label>
                    <FormInput
                        type="password"
                        name="password"
                        id="register-password-input"
                        formtype="auth"
                        placeholder=""
                        value="123456"
                        onChange={onChange}
                    />
                </fieldset>
            </FormContainer>
            <AuthReminder 
                question="Уже зарегистрированы? "
                path="/signin"
                actionText="Войти"
            />
        </main>
        <Footer
            pagetype={pagetype} />
        </>
    );
};

export default Register;


<FormError
formtype="auth" />
