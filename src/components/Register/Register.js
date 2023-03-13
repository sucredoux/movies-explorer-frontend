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

function Register({ loggedIn, pagetype, onRegister, formtype, isRegistered, resError, hasResError, onSubmit, onChange, inputData }) {

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

console.log(userData);
console.log(isValid);
console.log(hasError);

console.log(errorMessage);

console.log(isFormValid);

const resErrorRegister = [
    { name: "Bad Request",
      message: "При регистрации пользователя произошла ошибка." },
    { name: "Conflict", 
      message: "Пользователь с таким email уже существует."}
]

   if (loggedIn) {
        return <Redirect to="/movies" />;
    };

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
                        formtype="auth"
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
                        formtype="auth"
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
                        className="form__label form__label_type_auth">Пароль</label>
                    <FormInput
                        type="password"
                        name="password"
                        id="register-password-input"
                        formtype="auth"
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

/*

${hasError.name  ? classNameError : (isActive ? classNameCorrect : "")}

<FormError
formtype="auth" />


/*(e.target.validity.valid === false) {
            setHasError(true);
            
          } else if*//*

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

     /*  const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
   /* const [isActive, setIsActive] = useState(false);*/
  /*  const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        password: "",
    });


   /* const resetForm = useCallback((
        newUserData = {
            name: "",
            email: "",
            password: "",
        }, 
        newErrorMessage = {
            name: "",
            email: "",
            password: "",
        },
        newIsValid = {
            name: "",
            email: "",
            password: "",
        },
        newHasError = false,
        newIsFormValid = false,
        newIsActive = false,
        newFormHasError = false,
    ) => {
        setUserData(newUserData);
        setErrorMessage(newErrorMessage);
        setIsValid(newIsValid);
        setHasError(newHasError);
        setIsActive(newIsActive);
        setIsFormValid(newIsFormValid);
        setFormHasError(newFormHasError);
    }, [setUserData, setErrorMessage, setIsValid, setHasError, setIsActive, setIsFormValid, setFormHasError]
    );
      */

/*
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
          console.log(errorMessage);
       /*setIsValid(
            e.target.closest("form").checkValidity()
        );*/
      /*  setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
        });
        console.log(isValid);
        console.log(e.target.validity.valid);
        if (e.target.validity.valid === false) {
            setHasError(true);
          } else {
            setHasError(false);
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
           /* setIsActive(true);*/
       /*   }
        
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
        setIsValid({
            name: "",
            email: "",
            password: "",
        });
        setHasError(false);
      }, []);
*/