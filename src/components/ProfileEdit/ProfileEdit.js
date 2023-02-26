import Footer from '../Footer/Footer';
import FormContainer from '../FormContainer/FormContainer';
import FormError from '../FormError/FormError';
import FormInput from '../FormInput/FormInput';
import Header from '../Header/Header';
import './ProfileEdit.css';
import '../Profile/Profile.css';
import "../FormContainer/FormContainer.css";

function ProfileEdit({ onSubmit, onChange, pagetype }) {
    return (
        <><Header
            pagetype={pagetype} />
            <main className="profile">
                <FormContainer
                    name="profile-edit"
                    greeting="Привет, Виталий!"
                    onSubmit={onSubmit}
                    buttonText="Сохранить"
                    pagetype={pagetype}
                    formtype="profile"
                >
                    <fieldset className="form__fieldset form__fieldset_type_profile">
                        <label
                            for="profile-edit-name-input" 
                            className="form__label form__label_type_profile">Имя
                            <FormInput
                                type="text"
                                name="name"
                                id="profile-edit-name-input"
                                formtype="profile"
                                placeholder="Виталий"
                                value="Виталий"
                                onChange={onChange}
                            />
                        </label>
                        <FormError
                            formtype="profile" />
                        <label
                            for="profile-edit-email-input" 
                            className="form__label form__label_type_profile">E-mail
                            <FormInput
                                type="email"
                                name="email"
                                id="profile-edit-email-input"
                                formtype="profile"
                                placeholder="pochta@yandex.ru"
                                value="pochta@yandex.ru"
                                onChange={onChange}
                            />
                        </label>
                        <FormError
                            formtype="profile" />
                    </fieldset>
            </FormContainer>
                </main>
        <Footer
                pagetype={pagetype} /></>

    );
};

export default ProfileEdit;

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