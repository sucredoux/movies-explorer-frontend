import { useState } from "react";
import FormError from "../FormError/FormError";
import "./FormInput.css";

function FormInput({ type, name, id, formtype, placeholder, value, onChange, minlength, maxlength }) {

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
                className={`input form__input form__input_type_${formtype} ${ !isValid ? "form__input_type_error" : classNameActive }`}
                required
                placeholder={placeholder}
                minlength={minlength}
                maxlength={maxlength}
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