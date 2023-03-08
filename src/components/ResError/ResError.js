import { useState } from "react";
import "./ResError.css";

function ResError({ formtype, resError }) {

    const[hasError, setHasError] = useState(false);
  /*  !resError ? setHasError : "";*/
    console.log(resError);
    
 
    const resErrorMessage = [
        { name: "Bad Request",
          message: "При регистрации пользователя произошла ошибка." },
        { name: "Unauthorized", 
          message: "Вы ввели неправильный логин или пароль."},
          { name: "Conflict", 
          message: "Пользователь с таким email уже существует."}
    ]
        


       const messageToShow = resErrorMessage.find(error => error.name === resError);
        console.log(messageToShow);

    

   /* const resMessage = resErrorMessage.some(error => error === resError);*/
   
    return (
        <span className={`res__error ${ resError ? "res__error_active" : "" } res__error_type_${formtype}`}>{messageToShow?.message}</span>
    );
};

export default ResError;

/*
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