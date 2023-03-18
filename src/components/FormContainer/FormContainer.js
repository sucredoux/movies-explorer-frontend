import ResError from "../ResError/ResError";
import "./FormContainer.css";

function FormContainer(props) {

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
                    { props.hasResError && <ResError
                        formtype={props.formtype}
                        resError={props.resError}
                        hasResError={props.hasResError}/>}
                    {props.isSuccessful && <ResError 
                        formtype={props.formtype}
                        isSuccessful={props.isSuccessful}/>}
                    <button 
                    type="submit"
                    aria-label={props.buttonText}
                    disabled={!props.isFormValid}
                    name={`${props.pagetype}-submit`}
                    className={`button form__button  form__button_type_${props.pagetype}`}
                    >
                        {props.buttonText}
                    </button>
                </form>
        </section>
    );
};

export default FormContainer;
