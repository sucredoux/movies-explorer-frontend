import { useEffect, useState } from "react";
import FormError from "../FormError/FormError";
import "./FormInput.css";

function FormInput(props) {

    const classNameError = "form__input_type_error";
    const classNameCorrect = "form__input_type_correct";


    return (
        <>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                className={`input form__input form__input_type_${props.formtype} ${!props.isValid ? classNameCorrect : classNameError}`}
                required={props.required}
                placeholder={props.placeholder}
                minLength={props.minLength}
                maxLength={props.maxLength}
                value={props.value}
                onChange={props.onChange}
                isValid={props.isValid}
                inputData={props.inputData}
                readOnly={props.readOnly}
                 />
                <FormError
                    formtype={props.formtype}
                    hasError={props.hasError}
                    errorMessage={props.errorMessage} />
        </>
    );
};

export default FormInput;

/*
minLength={props.minLength}
                maxLength={props.maxLength}
*/

 /*const[isActive, setIsActive] = useState(false);
    const[isValid, setIsValid] = useState(true);
    const[hasError, setHasError] = useState(false);*/

/*
    const [inputData, setInputData] = useState({});
    const [isValid, setIsValid] = useState({});
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const [isActive, setIsActive] = useState(props.isActive);
   /* const [classNameValid, setClassNameValid] = useState("");*/
/*
    const classNameError = "form__input_type_error";
    const classNameCorrect = "form__input_type_correct";
    const classNameActive = `input form__input form__input_type_${props.formtype} ${!isValid ? classNameCorrect : classNameError}`;
    const classNameDisabled = `input form__input form__input_type_${props.formtype}`;
 

    function handleChange(e) {
        const { name, value } = e.target;
        setIsActive(false);
        setInputData({
            ...inputData,
            [name]: value,
        });
        setErrorMessage({
            ...errorMessage,
            [name]: e.target.validationMessage,
          });
        setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
        });
        if (e.target.validity.valid === false) {
            setHasError(true);
           /* setClassNameValid({
                ...classNameValid,
                [name]: classNameError })*/
  /*        } else {
            setIsActive(true);
            setHasError(false);
            setErrorMessage("");
           /* setClassNameValid({
                ...classNameValid,
                [name]: classNameCorrect })*/
   /*         setIsValid("");
          }
        
    }

    useEffect(() => {
        setInputData("");
        setErrorMessage("");
        setIsValid("");
        setHasError(false);
      }, []);
    

   
/*const line = props.name;

        const classNameValid = `${isValid.line ? "form__input_type_correct" : "form__input_type_error" }`;

        const classNameError = "form__input_type_error";


isActive ? classNameActive : classNameDisabled

*/
/*
console.log(hasError);
console.log(isActive);
console.log(isValid);*/