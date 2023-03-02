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
                    <ResError
                        formtype={props.formtype}/>
                    <button 
                    type="submit"
                    aria-label={props.buttonText}
                    name={`${props.pagetype}-submit`}
                    className={`button form__button ${props.isActive ? `form__button_type_${props.pagetype}`: "form__button_disabled"} `}
                    >
                        {props.buttonText}
                    </button>
                </form>
        </section>
    );
};

export default FormContainer;
