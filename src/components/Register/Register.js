import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import FormError from "../FormError/FormError";
import "./Register.css";
import "../FormContainer/FormContainer.css";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function Register({ loggedIn, pagetype, onRegister, isRegistered, isActive, onSubmit, onChange, inputData }) {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
   /* const [isActive, setIsActive] = useState(false);*/
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrorMessage({
            ...errorMessage,
            [name]: e.target.validationMessage,
          });
        setIsValid(
            e.target.closest("form").checkValidity()
        );
        if (isValid === false) {
            setHasError(true);
          } else {
            setHasError(false);
            setErrorMessage({
              name: "",
              about: "",
            });
            setIsValid(true);
           /* setIsActive(true);*/
          }
        
    };

    console.log(hasError);
console.log(isValid);
console.log(errorMessage);

    function handleSubmit(e) {
        e.preventDefault();
        let { name, email, password } = userData;
        onRegister({ name, email, password });
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
        setIsValid(false);
        setHasError(false);
      }, []);


    if (isRegistered) {
        return <Redirect to="/signin" />;
    }

    return (
        <><Header
            pagetype={pagetype} />
        <main className="register">
                <FormContainer
                    name="register"
                    greeting="Добро пожаловать!"
                    onSubmit={handleSubmit}
                    aria-label="Зарегистрироваться"
                    buttonText="Зарегистрироваться"
                    pagetype={pagetype}
                    formtype="auth"
                    isValid={isValid}
                    isActive={isActive}
                    onChange={handleChange}
                    hasError={hasError}
                    errorMessage={errorMessage}
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
                        minLength="2"
                        maxLength="40"
                        placeholder="Виталий"                       
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

/*
<FormError
formtype="auth" />


hasError={hasError}
                    isActive={isActive}
                    isValid={isValid}

onChange={handleChange}
                        isValid={isValid}
                        isActive={isActive}
                        hasError={hasError}
                        errorMessage={errorMessage}
value={userData?.name}
value={userData?.email}
value={userData?.password}

const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [hasError, setHasError] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
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
              name: "",
              about: "",
            });
            setIsValid({
              name: "",
              about: "",
            });
            setIsActive(true);
          }
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        let { name, email, password } = userData;
        onRegister({ name, email, password });
    }

    */