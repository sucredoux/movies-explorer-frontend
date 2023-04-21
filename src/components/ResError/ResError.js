import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import "./ResError.css";

function ResError({ formtype, hasResError, resError, hasSearchError, searchError, isSuccessful }) {

  const[hasError, setHasError] = useState(false);
  const [resErrorMessage, setResErrorMessage] = useState("");

  const intl = useIntl();
  const message = resError.startsWith("Error") ? ({ message: intl.formatMessage({ id: resError.replace("Error: ", "") })}) : ({ message: intl.formatMessage({ id: resError })});

 useEffect(() => {
  hasResError || hasSearchError ? setHasError(true) : setHasError(false);
  hasResError ? setResErrorMessage(message.message) : setResErrorMessage(searchError);
}, [hasResError, hasSearchError]);

  if (isSuccessful) {
    return (
      <span className={`res__error res__error_type_${formtype} res__error_active res__error_type_success `}>
        <FormattedMessage id="error__back" /> 
      </span>
    )
  };

  return (
    <span className={`res__error res__error_type_${formtype} ${hasError ? "res__error_active" : ""} `}>{resErrorMessage}</span>
  );
};

export default ResError;
 