import AuthReminder from "../AuthReminder/AuthReminder";
import Footer from "../Footer/Footer";
import FormContainer from "../FormContainer/FormContainer";
import FormInput from "../FormInput/FormInput";
import Header from "../Header/Header";
import FormError from "../FormError/FormError";
import "./Register.css";
import "../FormContainer/FormContainer.css";
import { useCallback, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Register({ loggedIn, pagetype, onRegister, isRegistered, resError, onSubmit, onChange, inputData }) {

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
    const [isFormValid, setIsFormValid] = useState(false);
    const [formHasError, setFormHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        name: "",
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
        setIsFormValid(e.target.closest("form").checkValidity());
        setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
            }
        );
        setFormHasError(!isFormValid);
        if (e.target.validity.valid === false) {
            setHasError(true);
            
          }/* else if () {
            setFormHasError(true);
          }*/ else {
            setHasError(false);
            setFormHasError(false);
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
          }
    };
    /*else if (isValid.some(i => i !== false)) {
            setHasError(false);
            setIsFormValid(true);
          }*/
          /* (e.target.validity.valid === false)*/

    function handleSubmit(e) {
        e.preventDefault();
        let { name, email, password } = userData;
        onRegister({ name, email, password });
      /*  resetForm();*/
    };

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

console.log(userData);
console.log(isValid);
console.log(hasError);
console.log(formHasError);
console.log(errorMessage);
console.log(isActive);
console.log(isFormValid);


const classNameError = "form__input_type_error";
const classNameCorrect = "form__input_type_correct";

   if (isRegistered) {
        return <Redirect to="/signin" />;
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
                    isActive={isActive}
                    isValid={isValid}
                    formHasError={formHasError}
                    resError={resError}                 
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
                        required
                        minLength="2"
                        maxLength="40"
                        onChange={handleInput}
                        value={userData?.name}
                        placeholder="Виталий"
                        hasError={hasError}
                        isValid={isValid}
                        errorMessage={errorMessage?.name}
                        className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}           
                    />
                        <label 
                        for="register-email-input" 
                        className="form__label form__label_type_auth">E-mail</label>
                    <FormInput
                        type="email"
                        name="email"
                        id="register-email-input"
                        formtype="auth"
                        required
                        placeholder="pochta@yandex.ru"
                        onChange={handleInput}
                        value={userData?.email}
                        hasError={hasError}
                        isValid={isValid}
                        errorMessage={errorMessage?.email} 
                        className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}
                    />
                    <label 
                        for="register-password-input" 
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
                        errorMessage={errorMessage?.password} 
                        className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}           
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