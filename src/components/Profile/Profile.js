import AuthReminder from '../AuthReminder/AuthReminder';
import Footer from '../Footer/Footer';
import FormContainer from '../FormContainer/FormContainer';
import FormError from '../FormError/FormError';
import FormInput from '../FormInput/FormInput';
import Header from '../Header/Header';
import './Profile.css';
import "../FormContainer/FormContainer.css";
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ pagetype, onLogout, onUpdateUser, isSuccessful, resError, hasResError, loggedIn }) {

   const currentUser = React.useContext(CurrentUserContext);
   const [userData, setUserData] = useState({
        name: currentUser.name,
        email: currentUser.email,  
    });
    const [isValid, setIsValid] = useState({
        name: false,
        email: false,
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState({
        name: false,
        email: false,
    });
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
    });

    function handleChange(e) {
        let { name, value } = e.target;
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
        if (e.target.value === currentUser.name || e.target.value === currentUser.email) {
            setHasError({
                ...hasError,
                [name]: false,
            });
            setErrorMessage({
                ...errorMessage,
                [name]: "Новые данные совпадают с текущими",
            });
            setIsFormValid(false);
        } else if (isFormValid === true) {
            setHasError({
                name: false,
                email: false,
            });
            setErrorMessage({
                name: "",
                email: "",
            });
            }
    };

    function handleSubmit(e) {
        e.preventDefault();
        let { name, email } = userData;
        onUpdateUser({ name, email });
        setIsFormValid(false);
    };

    useEffect(() => {
        setUserData({
            name: currentUser.name,
            email: currentUser.email,  
        });
        setErrorMessage({
            name: "",
            email: "",
        });
        setIsValid({
            name: false,
            email: false,
        });
        setHasError(false);
        setIsFormValid(false);
    }, [currentUser]);
        
    return (
        <> <Header
                pagetype={pagetype}
                loggedIn={loggedIn} />
            <main className="profile">
                <FormContainer
                    name="profile"
                    greeting={`Привет, ${currentUser.name}!`}
                    onSubmit={handleSubmit}
                    buttonText={`${"form__button:disabled" ? "Редактировать" : "Сохранить"}`}
                    pagetype={pagetype}
                    formtype="profile"
                    isValid={isValid}
                    isFormValid={isFormValid}
                    isSuccessful={isSuccessful}
                    resError={resError}
                    hasResError = {hasResError}
                >
                    <fieldset className="form__fieldset form__fieldset_type_profile">
                        <label
                            htmlFor="profile-name-input" 
                            className="form__label form__label_type_profile">Имя
                            <FormInput
                                type="text"
                                name="name"
                                id="profile-name-input"
                                formtype="profile"
                                placeholder="Виталий"
                                minLength="2"
                                maxLength="40"
                                value={userData?.name}
                                onChange={handleChange}
                                hasError={hasError}
                                isValid={isValid}
                                errorMessage={errorMessage?.email}
                            />
                        </label>
                        <label
                            htmlFor="profile-email-input" 
                            className="form__label form__label_type_profile">E-mail
                            <FormInput
                                type="email"
                                name="email"
                                id="profile-email-input"
                                formtype="profile"
                                placeholder="pochta@yandex.ru"
                                readOnly
                                value={userData?.email}
                                onChange={handleChange}
                                hasError={hasError}
                                isValid={isValid}
                                errorMessage={errorMessage?.password} 
                            />
                        </label>
                        <FormError
                            formtype="profile" />
                    </fieldset>
            </FormContainer>
            {isFormValid
            ?
            <></>
            :
            <AuthReminder
                onClick={onLogout}
                pagetype={pagetype}
                path="/"
                actionText="Выйти из аккаунта" />
            }
            </main>
            <Footer
                pagetype={pagetype} /></>
    );
};

export default Profile;
