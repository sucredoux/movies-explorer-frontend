import ResError from "../ResError/ResError";
import "./FormContainer.css";

function FormContainer(props) {

    return (
        <section className={`form__container form__container_type_${props.pagetype}`}>
            <h2 className={`form__greeting form__greeting_type_${props.pagetype}`}>{props.greeting}</h2>
            <form
                name={props.name}
                noValidate
                className={`form form_type_${props.pagetype}`}
                onSubmit={props.onSubmit}>
                        {props.children}
                    
                    <ResError
                        formtype={props.formtype}/>
                    <button 
                    type="submit"
                    name={`${props.pagetype}-submit`}
                    className={`button form__button form__button_type_${props.pagetype}`}
                    >
                        {props.buttonText}
                    </button>
                </form>
        </section>
    );
};

export default FormContainer;