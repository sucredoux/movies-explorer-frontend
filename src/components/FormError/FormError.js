import { useState } from "react";
import "./FormError.css";

function FormError({ formtype, hasError, errorMessage }) {
    
    return (
        <span className={`form__error ${ hasError ? "form__error_active" : "" } form__error_type_${formtype}`}>{hasError ? `${errorMessage}` : ""}</span>
    );
};

export default FormError;