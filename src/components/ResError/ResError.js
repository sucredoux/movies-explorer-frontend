import { useEffect, useState } from "react";
import "./ResError.css";
/*
export default class ResError extends Error {
  constructor(code = 'GENERIC', status = 500, formtype, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResError)
    }

    this.code = code
    this.status = status
    this.formtype = formtype
  }

render() {
  return (
    <span className={`res__error res__error_active res__error_type_${this.formtype}`}>{this.status}</span>
  );
}
}
*/

/*
class CustomError extends Error {
  constructor(code = 'GENERIC', status = 500, ...params) {
      super(...params)

      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, CustomError)
      }

      this.code = code
      this.status = status
  }
}

module.exports = CustomError*/




function ResError({ formtype, hasResError, resError, hasSearchError, searchError }) {

    const[hasError, setHasError] = useState(false);
    const [resErrorMessage, setResErrorMessage] = useState("");

    useEffect(() => {
      hasResError || hasSearchError ? setHasError(true) : setHasError(false);
      hasResError ? setResErrorMessage(resError) : setResErrorMessage(searchError);
    })

    
    console.log(resErrorMessage);

  
    return (
        <span className={`res__error res__error_type_${formtype} ${hasError ? "res__error_active" : ""} `}>{resErrorMessage}</span>
    );
};

export default ResError;
