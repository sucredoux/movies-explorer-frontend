import React, { useState, useCallback, useEffect } from 'react';
import MobileHeader from '../MobileNavigation/MobileNavigation';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
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
import database from '../../utils/constants';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [isOwn, setIsOwn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inEditState, setInEditState] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [userData, setUserData] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [savedList, setSavedList] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [resError, setResError] = useState([]);
  const [moviesResError, setMoviesResError] = useState([]);
  const [authResError, setAuthResError] = useState([]);
  const [hasResError, setHasResError] = useState(false);
  const history = useHistory();
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768 }, {maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [savedSearch, setSavedSearch] = useState([]);

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

      setAuthResError(err.message);
      console.log(resError);
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
      console.log(err.message);

      console.log(err.statusText);
      console.log(Error);
      setAuthResError(Error);
      console.log(authResError);
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
        setUserData(newUser);
        userLogin({ email, password });
        setHasResError(false);
      } 
      return newUser;
    } catch (err) {
      console.log(err);
      setAuthResError(err.message);
      console.log(resError);
      setHasResError(true);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    tokenCheck();
  }, [tokenCheck, loggedIn]);

console.log(resError);
 
  
  const userInfo = async () => {
    try {
      const user = await mainApi.fetchUserInfo();
      setCurrentUser(user);
      setHasResError(false);
    } catch (err) {
      console.log("Ошибка " + err);
      setAuthResError(err.message);
      console.log(resError);
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
      setMoviesResError(err.message);
      console.log(err.statusText);
      console.log(err.name);
      console.log(resError);
      setHasResError(true);
      console.log(Error);
    } finally {
      setLoading(false);
    }
  };

console.log(loggedIn);
console.log(currentUser);
console.log(userData);
console.log(moviesList);
console.log(moviesResError);


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
        console.log(results);
       /* filterUserMovies(results);*/
       setSavedList(results);
       setHasResError(false);
      }
      } catch (err) {
        console.log("Ошибка " + err);
        setMoviesResError(err.message);
        console.log(resError);
        setHasResError(true);
      } finally {
        setLoading(false);
      }
    };
    console.log(savedList);

   /* function filterUserMovies(results) {
      const userResults = results.filter(item => item.owner === currentUser._id);
      setSavedList(userResults);
      console.log(userResults);
    }*/
/*
    const savedSearchResults = () => {
      let savedResults = JSON.parse(localStorage.getItem("searchResultMovies"));
  console.log(savedResults);
      setSavedSearch(savedResults);
  console.log(savedSearch);
    };*/


    useEffect(() => {
      let jwt = localStorage.getItem('jwt');
      if (loggedIn) {
        userInfo(jwt);
        moviesData(jwt);
        savedMoviesData(jwt);
       /* setMoviesList(uploadedMovies);*/
       /* const uploadedMovies = JSON.parse(localStorage.getItem("movies"));
        setMoviesList(uploadedMovies);*/
       /* savedSearchResults(jwt);*/
      } 
    }, [loggedIn]);

  const userUpdate = useCallback(async ({ name, email }) => {
      try {
        setLoading(true);
        const newUserData = await mainApi.editUserInfo({ name, email });
        if (!newUserData) {
          throw new Error("При обновлении профиля произошла ошибка.");
        } else 
        {
          setCurrentUser(newUserData);
          setHasResError(false);
        } 
        return newUserData;
      } catch (err) {
        console.log("Ошибка " + err);
        setAuthResError(err.message);
        console.log(resError);
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
console.log(savedList);
        setHasResError(false);
      })
      .catch((err) => {
        console.log("Ошибка", err);
        setMoviesResError(err.message);
        console.log(resError);
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
        setMoviesResError(err.message);
        console.log(resError);
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
              isRegistered={isRegistered}
              resError={authResError}
              hasResError={hasResError}
               />
            </Route>
            <Route path="/signin">
              <Login
              loggedIn={loggedIn}
              onLogin={userLogin}              
              pagetype="auth"
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
                searchData={searchData}
                allMovies={moviesList}
                savedList={savedList}
                selectedMovie={selectedMovie}
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
                      selectedMovie={selectedMovie}
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


/*
onSubmit={handleOnSaveUserClick}


{inEditState   
                ?   (<ProfileEdit
                  onUpdateUser={handleUpdateUser}
                  pagetype="profile-edit"
                 />)
                :   (
*/

/*
<ProtectedRoute
                path="/movies"
                exact
                loggedIn={loggedIn}
                component={Movies}
                pagetype="movies"
                moviesList={moviesList}
                isOwn={isOwn}
                onSearch={getMoviesList}
                selectedMovie={selectedMovie}
                onSaveClick={handleOnSaveClick}
            ></ProtectedRoute>
            <ProtectedRoute 
                path="/saved-movies"
                exact
                loggedIn={loggedIn}
                component={SavedMovies}
                pagetype="saved-movies"
                moviesList={moviesList}
                selectedMovie={selectedMovie}
                isOwn={isOwn}
                onSaveClick={handleOnSaveClick}
            ></ProtectedRoute>
*/


 /*
  function getMoviesList(searchData) {
    setMoviesList(searchData);
  }
console.log(moviesList);*/
/*
  const moviesStorage = async (movie) => {
    try {
      const savedMovie= await mainApi.saveMovie(movie);
      setSavedList(savedMovie);
    } catch (error) {
      console.log("Ошибка " + error);
    }
  };*/
/*
  function handleOnSaveClick(movie) {
    setIsOwn(true);
   /* mainApi
      .saveMovie(movie)
      .then((newItem) => {
        setSavedList([newItem, ...savedList]);
        
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });*/
  /*
  function handleSearch(searchQuery) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);
    const searchResult = movies.filter(movie => {
      return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))             
    });
    console.log(searchResult);
    setSearchData(searchResult);
    localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
    localStorage.setItem("searchQuery", searchQuery);
  }

  console.log(searchData);
  */
/*
  function handleOnSaveUserClick() {
    setInEditState(false);
  };*/

    /*useEffect(() => {
      searchFilm(searchQuery)
    }, [searchQuery])
    
    
    if (!newUserData.email.unique) {
        throw new Error("Пользователь с таким email уже существует.");
      }
      


      
  function handleUpdateUser({ name, email }) {
    mainApi
      .editUserInfo({ name, email })
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }
    
    */