import React, { useState, useCallback, useEffect } from 'react';
import MobileHeader from '../MobileNavigation/MobileNavigation';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import database from '../../utils/constants';

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

 /* const moviesList = [
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Первое название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Второе название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Третье название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" }
  ];*/

  const tokenCheck = useCallback(async () => {
    try {
      setLoading(true);
      let jwt = localStorage.getItem("jwt");
      if (!jwt) {
        throw new Error("no token");
      }
      const user = await mainApi.checkRegistration(jwt);
      if (!user) {
        throw new Error("invalid user");
      } else {
        setLoggedIn(true);
        setUserData(user);
      }
    } catch (err) {
      console.log("Ошибка " + err);
    } finally {
      setLoading(false);
    }
  }, []);
/*
  console.log(localStorage.getItem("movies"));
  console.log(localStorage.getItem("jwt"));
  console.log(userData);*/

  const userLogin = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const loginData = await mainApi.signInUser({ email, password });
      if (!loginData) {
        throw new Error("Неверные имя или пароль пользователя");
      } else if (loginData.token) {
        localStorage.setItem("jwt", loginData.token);
        setLoggedIn(true);
        setUserData(loginData);
       /* console.log('jwt');
        console.log(loginData.token);*/
      }
      return loginData;
    } catch (error) {
     /* setIsSuccessful(false);
      handleInfoTooltip();*/
      console.log("Ошибка " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  const userRegister = useCallback(async ({ name, email, password }) => {
    try {
      setLoading(true);
      const newUser = await mainApi.registerUser({ name, email, password });
      if (newUser) {
        setUserData(newUser);
        setIsRegistered(true);
        setIsActive(false);
       /* setIsSuccessful(true);*/
      }/* else {
        setIsSuccessful(false);
      }*/
     /* handleInfoTooltip();*/
      return newUser;
    } catch (error) {
     /* setIsSuccessful(false);
      handleInfoTooltip();*/
      console.log("Ошибка " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck, loggedIn]);



  useEffect(() => {
    let jwt = localStorage.getItem('jwt');
    if (loggedIn) {
      userInfo(jwt);
      moviesData(jwt);
    } 
  }, [loggedIn]);
  
  const userInfo = async () => {
    try {
      const user = await mainApi.fetchUserInfo();
      setCurrentUser(user);
    } catch (error) {
      console.log("Ошибка " + error);
    } 
  }

  const moviesData = async () => {
    try {
      setLoading(true);
      const allMovies = await moviesApi.getAllMovies();
      if (!allMovies) {
        throw new Error("Какая-то ошибка");
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
       /* console.log(results);*/
        localStorage.setItem("movies", JSON.stringify(results));
        
      /*  setMoviesList(results);*/
      }
    } catch (error) {
      console.log("Ошибка " + error);
    } finally {
      setLoading(false);
    }
  };

  console.log(loggedIn);
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
  };

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedList((state) => 
          state.map((c) => (c.id === savedMovie.id ? savedMovie : c))
        );
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }

  console.log(savedList);

  function handleUpdateUser({ name, email }) {
    mainApi
      .editUserInfo({ name, email })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setInEditState(false);
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }

  function handleOnEditClick() {
    setInEditState(true);
  };
/*
  function handleOnSaveUserClick() {
    setInEditState(false);
  };*/

  const userLogOut = useCallback(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    setLoggedIn(false);
    setUserData({});
  }, []);
   
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
              isActive={isActive}
              pagetype="auth"
              isRegistered={isRegistered} />
            </Route>
            <Route path="/signin">
              <Login
              loggedIn={loggedIn}
              onLogin={userLogin}              
              pagetype="auth" />
            </Route>
            <Route
                path="/movies" exact>
                <Movies
                loggedIn={loggedIn}
                
                pagetype="movies"
                moviesList={moviesList}
                isOwn={isOwn}
                
                selectedMovie={selectedMovie}
                onSaveClick={handleOnSaveClick} />
                </Route>
            <Route 
                path="/saved-movies" exact>
                <SavedMovies
                loggedIn={loggedIn}
                
                pagetype="saved-movies"
                moviesList={moviesList}
                selectedMovie={selectedMovie}
                isOwn={isOwn}
                onSaveClick={handleOnSaveClick} />
                </Route>
            <Route 
                path="/profile">
                {inEditState   
                ?   (<ProfileEdit
                  onUpdateUser={handleUpdateUser}
                  pagetype="profile-edit" />)
                :   (<Profile
                  pagetype="profile" 
                  onEditClick={handleOnEditClick} 
                  onLogout={userLogOut}/>)
              }
            </Route>

            <Route path="/*">
              <Error404
              pagetype="error" />
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




    /*useEffect(() => {
      searchFilm(searchQuery)
    }, [searchQuery])*/