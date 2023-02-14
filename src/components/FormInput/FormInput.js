import { useState } from "react";
import "./FormInput.css";

function FormInput({ label, type, name, id, formtype, placeholder, value, onChange }) {

    const[isValid, setIsValid] = useState(false);

    return (
        <>
            <input
                type={type}
                name={name}
                id={id}
                className={`form__input form__input_type_${formtype} ${ isValid?.name ? "form__input_type_error" : "form__input_type_correct" }`}
                required
                placeholder={placeholder}
                minLength="2"
                maxLength="40"
                value={value}
                onChange={onChange} />
 
        </>
    );
};

export default FormInput;