import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import "./Register.css";
import "../FormContainer/FormContainer.css";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import FormError from "../FormError/FormError";

function Register({ isRegistered, pagetype, onRegister, formtype, resError, hasResError }) {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState({
        name: false,
        email: false,
        password: false,
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState({
        name: false,
        email: false,
        password: false,
    });
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        password: "",
    });

    
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
                name: false,
                email: false,
                password: false,
            });
            setErrorMessage({
                name: "",
                email: "",
                password: "",
            });
          }
    };
   
    function handleSubmit(e) {
        e.preventDefault();
        let { name, email, password } = userData;
        onRegister({ name, email, password });
        setIsFormValid(false);
    };
   
    useEffect(() => {
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
            name: false,
            email: false,
            password: false,
        });
        setHasError({
            name: false,
            email: false,
            password: false,
        });
        setIsFormValid(false);
      }, []);

   if (isRegistered) {
        return <Redirect to="/movies" />;
    };

    return (
        <>  <Header
                pagetype={pagetype} />
            <main className="register">
                <FormContainer
                    name="register"
                    greeting="Добро пожаловать!"
                    onSubmit={handleSubmit}
                    aria-label="Зарегистрироваться"
                    buttonText="Зарегистрироваться"
                    pagetype={pagetype}
                    formtype={formtype}
                    isFormValid={isFormValid}
                    resError={resError}
                    hasResError={hasResError}                 
                >
                <fieldset className="form__fieldset">
                    <label 
                        htmlFor="register-name-input" 
                        className="form__label form__label_type_auth">Имя
                    </label>
                    <FormInput
                        type="text"
                        name="name"
                        id="register-name-input"
                        formtype={formtype}
                        required
                        pattern="^[а-яА-ЯёЁa-zA-Z\s-]+$"
                        minLength="2"
                        maxLength="40"
                        onChange={handleInput}
                        value={userData?.name}
                        placeholder="Виталий"
                        hasError={hasError}
                        isValid={isValid}
                    />
                    <FormError
                        formtype={formtype}
                        hasError={hasError}
                        errorMessage={errorMessage?.name}           
                    />
                    <label 
                        htmlFor="register-email-input" 
                        className="form__label form__label_type_auth">E-mail
                    </label>
                    <FormInput
                        type="email"
                        name="email"
                        id="register-email-input"
                        formtype={formtype}
                        required
                        pattern="^[^@]+@[^@]+\.[^a-z-A-Z]{2,4}$"
                        placeholder="pochta@yandex.ru"
                        onChange={handleInput}
                        value={userData?.email}
                        hasError={hasError}
                        isValid={isValid}
                    />
                    <FormError
                        formtype={formtype}
                        hasError={hasError}
                        errorMessage={errorMessage?.email}           
                    />
                    <label 
                        htmlFor="register-password-input" 
                        className="form__label form__label_type_auth">Пароль
                    </label>
                    <FormInput
                        type="password"
                        name="password"
                        id="register-password-input"
                        formtype={formtype}
                        required
                        placeholder=""
                        onChange={handleInput}
                        value={userData?.password}
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
                question="Уже зарегистрированы? "
                path="/signin"
                actionText="Войти"
                pagetype={pagetype}
            />
        </main>
        <Footer
            pagetype={pagetype} />
        </>
    );
};

export default Register;
