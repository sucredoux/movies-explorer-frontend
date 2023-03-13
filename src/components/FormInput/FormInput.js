import "./FormInput.css";

function FormInput(props) {

    return (
        <>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                required={props.required}
                placeholder={props.placeholder}
                minLength={props.minLength}
                maxLength={props.maxLength}
                value={props.value}
                onChange={props.onChange}
                className={`input form__input form__input_type_${props.formtype} `}
             />
        </>
    );
};

export default FormInput;
