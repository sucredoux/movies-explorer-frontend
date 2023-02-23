import { useState } from "react";
import FormError from "../FormError/FormError";
import "./FormInput.css";

function FormInput({ type, name, id, formtype, placeholder, value, onChange }) {

    const[isActive, setIsActive] = useState(false);
    const[isValid, setIsValid] = useState(true);
    const[hasError, setHasError] = useState(false);

    const classNameActive = `${isActive ? "form__input_type_correct" : "" }`;

    return (
        <>
            <input
                type={type}
                name={name}
                id={id}
                className={`form__input form__input_type_${formtype} ${ !isValid ? "form__input_type_error" : classNameActive }`}
                required
                placeholder={placeholder}
                minLength="2"
                maxLength="40"
                value={value}
                onChange={onChange}
                 />
                <FormError
                    formtype={formtype}
                    hasError={hasError} />
        </>
    );
};

export default FormInput;