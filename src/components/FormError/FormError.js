import { useState } from "react";
import "./FormError.css";

function FormError({ formtype, hasError }) {
    
    return (
        <span className={`form__error ${ hasError ? "form__error_active" : "" } form__error_type_${formtype}`}>{hasError ? "Что-то пошло не так..." : ""}</span>
    );
};

export default FormError;