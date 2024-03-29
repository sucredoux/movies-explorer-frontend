import { useEffect, useState } from "react";
import "./ResError.css";

function ResError({ formtype, hasResError, resError, hasSearchError, searchError, isSuccessful }) {

  const[hasError, setHasError] = useState(false);
  const [resErrorMessage, setResErrorMessage] = useState("");

  useEffect(() => {
    hasResError || hasSearchError ? setHasError(true) : setHasError(false);
    hasResError ? setResErrorMessage(resError) : setResErrorMessage(searchError);
  }, [hasResError, hasSearchError]);

  if (isSuccessful) {
    return (
      <span className={`res__error res__error_type_${formtype} res__error_active res__error_type_success `}>Ваши данные изменены</span>
    )
  };

  return (
    <span className={`res__error res__error_type_${formtype} ${hasError ? "res__error_active" : ""} `}>{resErrorMessage}</span>
  );
};

export default ResError;
