import AuthReminder from '../AuthReminder/AuthReminder';
import Footer from '../Footer/Footer';
import FormContainer from '../FormContainer/FormContainer';
import FormError from '../FormError/FormError';
import FormInput from '../FormInput/FormInput';
import Header from '../Header/Header';
import './Profile.css';
import "../FormContainer/FormContainer.css";
import React, { useEffect, useState } from 'react';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onEditClick, pagetype, onLogout }) {

  const currentUser = React.useContext(CurrentUserContext);

    

    return (
        <><Header
            pagetype={pagetype} />
            <main className="profile">
                <FormContainer
                    name="profile"
                    greeting={`Привет, ${currentUser.name}!`}
                    onSubmit={onEditClick}
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
                                readOnly
                                value={currentUser.name}
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
                                readOnly
                                value={currentUser.email}
                            />
                        </label>
                    </fieldset>
            </FormContainer>
            <AuthReminder
                onClick={onLogout}
                pagetype={pagetype}
                path="/"
                actionText="Выйти из аккаунта" />
            </main>
            <Footer
                pagetype={pagetype} /></>

    );
};

export default Profile;

/*
path="/profile"
{ inEditState 
?   component={ProfileEdit}
  onUpdateUser={handleUpdateUser}
  pagetype="profile-edit" 
:   component={Profile}
  pagetype="profile" 
  onEditClick={handleOnEditClick} 
  onLogout={userLogOut}
}*/