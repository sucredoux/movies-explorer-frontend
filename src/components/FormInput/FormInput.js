import { useEffect, useState } from "react";
import FormError from "../FormError/FormError";
import "./FormInput.css";

function FormInput(props) {



  /*  const [inputData, setInputData] = useState("");
  /*  const [isValid, setIsValid] = useState("");
    const [hasError, setHasError] = useState(false);
   /* const [isActive, setIsActive] = useState(false);*/
  /*  const [errorMessage, setErrorMessage] = useState("");*/

 /*   function handleChange(e) {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value,
        });*/
      /*  setIsValid({
            ...isValid,
            [name]: e.target.validity.valid,
        });
        setErrorMessage({
            ...errorMessage,
            [name]: e.target.validationMessage,
          });
          console.log(errorMessage);
       /*setIsValid(
            e.target.closest("form").checkValidity()
        );*/

       /* console.log(isValid);
        console.log(e.target.validity.valid);
        if (e.target.validity.valid === false) {
            setHasError(true);
          } else {
            setHasError(false);
            setErrorMessage("");
            setIsValid("");
           /* setIsActive(true);*/
       /*   }*/
   /*     props.onInput(inputData)
    };
   /* console.log(inputData);
    console.log(hasError);
console.log(isValid);
console.log(errorMessage);*/

   /* function handleSubmit(e) {
        e.preventDefault();
        let { name, email, password } = inputData;
        props.onRegister({ name, email, password });
    };*/
  /*  
    useEffect(() => {
        setInputData("");
        setErrorMessage("");
        setIsValid("");
        setHasError(false);
      }, []);
*/



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

/*

                <FormError
                    formtype={props.formtype}
                    hasError={props.hasError}
                    errorMessage={props.errorMessage}
                     />




readOnly={props.readOnly}

                        className={`input form__input form__input_type_${props.formtype} ${!props.hasError ? classNameCorrect : classNameError}`}           
const classNameError = "form__input_type_error";
const classNameCorrect = "form__input_type_correct";



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
console.log(isValid);




const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isValid, setIsValid] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [hasError, setHasError] = useState(false);
   /* const [isActive, setIsActive] = useState(false);*/
  /* const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
});

function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
        ...userData,
        [name]: value,
    });
    setIsValid({
        ...isValid,
        [name]: e.target.validity.valid,
    });
    setErrorMessage({
        ...errorMessage,
        [name]: e.target.validationMessage,
      });
      console.log(errorMessage);
   /*setIsValid(
        e.target.closest("form").checkValidity()
    );*/

  /*  console.log(isValid);
    console.log(e.target.validity.valid);
    if (e.target.validity.valid === false) {
        setHasError(true);
      } else {
        setHasError(false);
        setErrorMessage({
          name: "",
          email: "",
          password: "",
        });
        setIsValid({
            name: "",
            email: "",
            password: "",
        });
       /* setIsActive(true);*/
 /*     }
    
};
console.log(userData);
console.log(hasError);
console.log(isValid);
console.log(errorMessage);

function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password } = userData;
    props.onRegister({ name, email, password });
};

useEffect(() => {
    setUserData({
        name: "",
        email: "",
        password: "",
    });
    setErrorMessage({
        name: "",
        email: "",
        password: "",
    });
    setIsValid({
        name: "",
        email: "",
        password: "",
    });
    setHasError(false);
  }, []);





*/