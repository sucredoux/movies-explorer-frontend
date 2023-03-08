import ResError from "../ResError/ResError";
import "./FormContainer.css";

function FormContainer(props) {

  /*  const classNameDisabled = props.isValid === null && !props.isValid ? "form__button_disabled" : `form__button_type_${props.pagetype}`;
        const classNameActive = props.isValid && !props.hasError ? `form__button_type_${props.pagetype}` : "form__button_disabled"*/

    return (
        <section className={`form__container form__container_type_${props.formtype}`}>
            <h2 className={`form__greeting form__greeting_type_${props.formtype}`}>{props.greeting}</h2>
            <form
                name={props.name}
                id="form"
                noValidate
                className={`form form_type_${props.formtype}`}
                onSubmit={props.onSubmit}>
                        {props.children}                    
                    <ResError
                        formtype={props.formtype}
                        resError={props.resError}/>
                    <button 
                    type="submit"
                    aria-label={props.buttonText}
                    name={`${props.pagetype}-submit`}
                    className={`button form__button ${!props.isActive || props.formHasError ? "form__button_disabled" : `form__button_type_${props.pagetype}`}`}
                    >
                        {props.buttonText}
                    </button>
                </form>
        </section>
    );
};

export default FormContainer;

/*className={`input form__input form__input_type_auth ${hasError  ? classNameError : (isActive ? classNameCorrect : "")}`}    */       

/*
className={`button form__button ${props.isValid === null && !props.isValid ? "form__button_disabled" : `form__button_type_${props.pagetype}`}`}

props.isValid.some(item => item === false)

*/