import AuthReminder from '../AuthReminder/AuthReminder';
import Footer from '../Footer/Footer';
import FormContainer from '../FormContainer/FormContainer';
import FormError from '../FormError/FormError';
import FormInput from '../FormInput/FormInput';
import Header from '../Header/Header';
import './Profile.css';
import "../FormContainer/FormContainer.css";
import React from 'react';
import ProfileEdit from '../ProfileEdit/ProfileEdit';

function Profile({ onSubmit, pagetype }) {

  /* const currentUser = React.useContext();*/
  const currentUser = "Виталий";

   function handleProfileEdit(e) {
    e.preventDefault();
        return (
            <ProfileEdit />
        )
    };

    return (
        <><Header
            pagetype={pagetype} />
            <main className="profile">
                <FormContainer
                    name="profile"
                    greeting="Привет, Виталий!"
                    /*onSubmit={onSubmit}*/
                    onSubmit={handleProfileEdit}
                    buttonText="Редактировать"
                    pagetype={pagetype}
                    formtype="profile"
                >
                    <fieldset className="form__fieldset form__fieldset_type_profile">
                        <label
                            for="profile-name-input" 
                            className="form__label form__label_type_profile">Имя
                            <FormInput
                                type="text"
                                name="name"
                                id="profile-name-input"
                                formtype="profile"
                                placeholder="Виталий"
                                /*readOnly="readOnly"*/
                                value={currentUser.name}
                                onSubmit={onSubmit}
                            />
                        </label>
                        <label
                            for="profile-email-input" 
                            className="form__label form__label_type_profile">E-mail
                            <FormInput
                                type="email"
                                name="email"
                                id="profile-email-input"
                                formtype="profile"
                                placeholder="pochta@yandex.ru"
                               /*readOnly="readOnly"*/
                                value={currentUser.email}
                                onSubmit={onSubmit}
                            />
                        </label>
                    </fieldset>
            </FormContainer>
            <AuthReminder
                path="/"
                actionText="Выйти из аккаунта" />
                </main>
        <Footer
                pagetype={pagetype} /></>

    );
};

export default Profile;

/*
<FormInput
                        label="Имя"
                        type="text"
                        name="name"
                        id="profile-name-input"
                        formtype="profile"
                        placeholder="Виталий"
                        value="Виталий"
                        onChange={onChange}
                    />
                           
                    <FormInput
                        label="E-mail"
                        type="email"
                        name="email"
                        id="profile-email-input"
                        formtype="profile"
                        placeholder="pochta@yandex.ru"
                        value="pochta@yandex.ru"
                        onChange={onChange}
                    />


                     <input

                                type="text"
                                name="name"
                                id="profile-name-input"
                                formtype="profile"
                                className={`form__input form__input_type_profile ${isValid?.name ? "form__input_type_error" : "form__input_type_correct"}`}
                                required
                                minLength="2"
                                maxLength="40"
                                placeholder="Виталий"
                                value="Виталий"
                                onChange={onChange} />

                                            <span className={`form__error ${hasError ? "form__error_active" : ""}`}>Что-то пошло не так...</span>

*/