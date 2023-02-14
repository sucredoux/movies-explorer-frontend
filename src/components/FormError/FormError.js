import { useState } from "react";
import "./FormError.css";

function FormError({ formtype }) {

    const[hasError, setHasError] = useState(false);
    
    return (
        <span className={`form__error ${ hasError ? "form__error_active" : "" } form__error_type_${formtype}`}>Что-то пошло не так...</span>
    );
};

export default FormError;