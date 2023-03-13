import React, { useState, useCallback, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader';
import Error404 from '../Error404/Error404';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [userData, setUserData] = useState({});
  const [savedList, setSavedList] = useState([]);
  const [moviesResError, setMoviesResError] = useState([]);
  const [authResError, setAuthResError] = useState([]);
  const [hasResError, setHasResError] = useState(false);
  const history = useHistory();
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 }, {maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow =() => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", function () {
        setTimeout(handleResizeWindow, 5000);
    });
  }, [screenWidth]);

  const tokenCheck = useCallback(async () => {
    try {
      setLoading(true);
      let jwt = localStorage.getItem("jwt");
      if (!jwt) {
        throw new Error("При авторизации произошла ошибка. Токен не передан или передан не в том формате.");
      }
      const user = await mainApi.checkRegistration(jwt);
      if (!user) {
        throw new Error("При авторизации произошла ошибка. Переданный токен некорректен.");
      } else {
        setLoggedIn(true);
        setUserData(user);
        setCurrentUser(user);
        setHasResError(false);
      }
    } catch (err) {
      console.log("Ошибка " + err);    
      setAuthResError("Вам необходимо авторизоваться.");
      setHasResError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const userLogin = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const loginData = await mainApi.signInUser({ email, password });
      if (!loginData) {
        throw new Error("Вы ввели неправильный логин или пароль.");
      } else if (loginData.token) {
        localStorage.setItem("jwt", loginData.token);
        setLoggedIn(true);
        setUserData(loginData);
        setHasResError(false);
      }
      return loginData;
    } catch (err) {
      console.log("Ошибка " + err);      
      setAuthResError("Вы ввели неправильный логин или пароль.");
      setHasResError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const userRegister = useCallback(async ({ name, email, password }) => {
    try {
      setLoading(true);
      const newUser = await mainApi.registerUser({ name, email, password });
      if (!newUser) {
        throw new Error("При регистрации пользователя произошла ошибка.");
      } else if (newUser) {
        userLogin({ email, password });
        setUserData(newUser);
        setHasResError(false);
      } 
      return userData;   
    } catch (err) {
      console.log("Ошибка " + err);
      setAuthResError("При авторизации произошла ошибка. Переданный токен некорректен.");
      setHasResError(true);
    } finally {
      setLoading(false);
    }
  }, []);
console.log(loggedIn);
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck, loggedIn]);

  const userInfo = async () => {
    try {
      const user = await mainApi.fetchUserInfo();
      setCurrentUser(user);
      setHasResError(false);
    } catch (err) {
      console.log("Ошибка " + err);
      setAuthResError("При обновлении данных пользователя произошла ошибка.");
      setHasResError(true);
    } 
  };

  const moviesData = async () => {
    try {
      setLoading(true);
      const allMovies = await moviesApi.getAllMovies();
      if (!allMovies) {
        throw new Error("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."); 
      } else {
        const results = allMovies.map((item) => ({
          movie: item,
          movieId: item.id,
          nameRU: item.nameRU,
          nameEN: item.nameEN,
          director: item.director,
          country: item.country,
          year: item.year,
          duration: item.duration,
          description: item.description,
          image: `${"https://api.nomoreparties.co" + item.image.url}`,
          trailerLink: item.trailerLink,
          thumbnail: `${"https://api.nomoreparties.co" + item.image.formats.thumbnail.url}`,
        }));
        localStorage.setItem("movies", JSON.stringify(results));
        setMoviesList(results);
        setHasResError(false);
      }
    } catch (err) {
      console.log("Ошибка " + err);
      setMoviesResError("Во время запроса произошла ошибка.");
      setHasResError(true);
    } finally {
      setLoading(false);
    }
  };

  const savedMoviesData = async () => {
    try {
      setLoading(true);
      const savedMovies = await mainApi.getSavedMovies();
      if (!savedMovies) {
        throw new Error("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.");
      } else {
        const results = savedMovies.map((item) => ({
          movie: item,
          _id: item._id,
          movieId: item.movieId,
          owner: item.owner,
          nameRU: item.nameRU,
          nameEN: item.nameEN,
          director: item.director,
          country: item.country,
          year: item.year,
          duration: item.duration,
          description: item.description,
          image: item.image,
          trailerLink: item.trailerLink,
          thumbnail: item.thumbnail,
        }));
       setSavedList(results);
       setHasResError(false);
      }
      } catch (err) {
        console.log("Ошибка " + err);
        setMoviesResError("Во время запроса произошла ошибка.");
        setHasResError(true);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      let jwt = localStorage.getItem('jwt');
      if (loggedIn) {
        userInfo(jwt);
        moviesData(jwt);
        savedMoviesData(jwt);
      } 
    }, [loggedIn]);

  const userUpdate = useCallback(async ({ name, email }) => {
      try {
        setLoading(true);
        const newUserData = await mainApi.editUserInfo({ name, email });
        if (!newUserData) {
          throw new Error("При обновлении профиля произошла ошибка.");
        } else {
          setCurrentUser(newUserData);
          setHasResError(false);
        } 
        return newUserData;
      } catch (err) {
        console.log("Ошибка " + err);
        setAuthResError("При обновлении профиля произошла ошибка.");
        setHasResError(true);
      } finally {
        setLoading(false);
      }
  }, []);
   
  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedList([...savedList, savedMovie]);
        setHasResError(false);
      })
      .catch((err) => {
        console.log("Ошибка", err);
        setMoviesResError("Во время запроса произошла ошибка.");
        setHasResError(true);
      });
  }

  function handleDeleteMovie(movie) {
    const movieToDelete = savedList.find(item => item.movieId === movie.movieId);
    mainApi
      .removeMovie(movieToDelete._id)
      .then(() => {
        setSavedList((state) => state.filter((c) => c._id !== movieToDelete._id));
        setHasResError(false);
      })
      .catch((err) => {
        console.log("Ошибка", err);
        setMoviesResError("Во время запроса произошла ошибка.");
        setHasResError(true);
      })
  }

  const userLogOut = useCallback(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("searchResultMovies");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("searchResultShortMovies");
    localStorage.removeItem("checkedStatusmovies");
    setLoggedIn(false);
    setUserData({});
  }, []);

  function goBack() {
    history.goBack();
  }
   
  if (loading) {
    return <Preloader />;
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">        
          <Switch>
            <Route path='/' exact>
              <Main
              pagetype="main" /> 
            </Route>
            <Route path="/signup">
              <Register
              loggedIn={loggedIn}
              onRegister={userRegister}
              pagetype="auth"
              formtype="auth"
              resError={authResError}
              hasResError={hasResError}
               />
            </Route>
            <Route path="/signin">
              <Login
              loggedIn={loggedIn}
              onLogin={userLogin}              
              pagetype="auth"
              formtype="auth"
              resError={authResError}
              hasResError={hasResError}
               />
            </Route>
            <ProtectedRoute
                exact path="/movies"
                component={Movies}
                loggedIn={loggedIn}                
                pagetype="movies"
                formtype="movies"
                allMovies={moviesList}
                savedList={savedList}
                onSaveClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
                isDesktop={isDesktop}
                isTablet={isTablet}
                isMobile={isMobile}
                resError={moviesResError}
                hasResError={hasResError}>
            </ProtectedRoute>                           
            <ProtectedRoute 
                component={SavedMovies}
                exact path="/saved-movies"
                loggedIn={loggedIn}
                pagetype="saved-movies"
                formtype="movies"
                savedList={savedList}
                onDeleteClick={handleDeleteMovie}
                resError={moviesResError}
                hasResError={hasResError}>
              </ProtectedRoute>
              <ProtectedRoute
                component ={Profile} 
                exact path="/profile"
                loggedIn={loggedIn}   
                pagetype="profile" 
                onUpdateUser={userUpdate} 
                onLogout={userLogOut}
                userData={userData}
                resError={authResError}
                hasResError={hasResError} >
              </ProtectedRoute>            
            <Route path="/*">
              <Error404
                pagetype="error"
                onClick={goBack} />
            </Route>
            <Route path="*">
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" /> }
          </Route>
          </Switch>          
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
