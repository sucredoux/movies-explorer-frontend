import { useState } from "react";
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




function ResError({ pagetype, formtype, hasResError, resError, hasSearchError, searchError }) {

    const[hasError, setHasError] = useState(false);

    const resErrorMessage = hasResError ? resError : searchError;
    console.log(resErrorMessage);
  /*  !resError ? setHasError : "";*/
  /*  console.log(resError);
    
 
    const resErrorRegister = [
   /*   { name: "Bad Request",
        message: "При регистрации пользователя произошла ошибка." },*/
   /*   { name: "Conflict", 
        message: "Пользователь с таким email уже существует."}
  ]

    const resErrorLogin = [
    /*  { name: "Error: ",
        message: "При авторизации произошла ошибка. Токен не передан или передан не в том формате." },*/
    /*  { name: "Unauthorized", 
        message: "Вы ввели неправильный логин или пароль."},*/
    /*  { name: "Error: ", 
        message: "При авторизации произошла ошибка. Переданный токен некорректен."}*/
 /* ]

  const resErrorProfile = [
   /* { name: "Bad Request",
      message: "При обновлении профиля произошла ошибка." },*/
 /*   { name: "Conflict", 
      message: "Пользователь с таким email уже существует."}
]

const resErrorOther = [
  { name: "internal Server Error",
    message: "На сервере произошла ошибка." },
  { name: "Not Found", 
    message: "Страница по указанному маршруту не найдена."}
    
]
const resErrorMovies = [
  { name: "", 
    message: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."},
  { name: "Unauthorized", 
    message: "У Вас нет доступа"}  
]

        
/*

      const messageToShow = resError === undefined ? "" : resErrorMessage.find(error => error.name === resError);
        console.log(messageToShow);

    */

   /* const resMessage = resErrorMessage.some(error => error === resError);*/
  
    return (
        <span className={`res__error res__error_active res__error_type_${formtype}`}>{resErrorMessage}</span>
    );
};

export default ResError;

/*

        <span className={`res__error ${ resError ? "res__error_active" : "" } res__error_type_${formtype}`}>{resError}</span>


{messageToShow?.message}

Страница логина пользователя
1. Вы ввели неправильный логин или пароль. Unauthorized 401 (const WRONG_LOGIN = 'Неправильный email или пароль';)

2. При авторизации произошла ошибка. Токен не передан или передан не в том формате.401 (const INVALID_ID = 'Невалидный id';)

3. При авторизации произошла ошибка. Переданный токен некорректен.400 (const INCORRECT_DATA = 'Переданы некорректные данные';)


Страница регистрации пользователя
1. Пользователь с таким email уже существует.409 (const DUPLICATE = 'Пользователь с таким email уже существует';)

2. При регистрации пользователя произошла ошибка.400  BAD REQUEST


Страница обновления профиля
1. Пользователь с таким email уже существует. 409 (const DUPLICATE = 'Пользователь с таким email уже существует';)

2. При обновлении профиля произошла ошибка.400 (const INCORRECT_DATA = 'Переданы некорректные данные';)
Другое
1. 500 На сервере произошла ошибка. (const SERVER_ERROR = 'Ошибка на стороне сервера';)

2. 404 Страница по указанному маршруту не найдена. (const NO_PAGE = 'Страница не найдена';)

*/