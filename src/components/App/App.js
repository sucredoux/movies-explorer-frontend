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
import ProfileEdit from '../ProfileEdit/ProfileEdit';
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
  const [resError, setResError] = useState("");
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
    /*  setResError(err);*/
    } finally {
      setLoading(false);
    }
  }, []);

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
      }
      return loginData;
    } catch (error) {
      console.log("Ошибка " + error);
      setResError(error);
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
      }
      return newUser;
    } catch (error) {
      console.log(error);
      setResError(error);
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
        localStorage.setItem("movies", JSON.stringify(results));
      }
    } catch (error) {
      console.log("Ошибка " + error);
    } finally {
      setLoading(false);
    }
  };

console.log(loggedIn);
console.log(currentUser);

  const savedMoviesData = async () => {
    try {
      setLoading(true);
      const savedMovies = await mainApi.getSavedMovies();
      if (!savedMovies) {
        throw new Error("Какая-то ошибка" + Error.message);
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
        const userResults = results.filter(item => item.owner === currentUser._id);
        setSavedList(userResults);
      }
      } catch (error) {
        console.log("Ошибка " + error);
      } finally {
        setLoading(false);
      }
    };

    const savedSearchResults = () => {
      let savedResults = JSON.parse(localStorage.getItem("searchResultMovies"));
  console.log(savedResults);
      setSavedSearch(savedResults);
  console.log(savedSearch);
    };
    
    useEffect(() => {
      let jwt = localStorage.getItem('jwt');
      if (loggedIn) {
        userInfo(jwt);
        moviesData(jwt);
        savedMoviesData(jwt);
        savedSearchResults(jwt);
      } 
    }, [loggedIn]);
   
  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedList([...savedList, savedMovie]);
console.log(savedList);
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }

  
  console.log(savedList);

  function handleDeleteMovie(movie) {

    const movieToDelete = savedList.find(item => item.movieId === movie.movieId);
console.log(movieToDelete);
   
    mainApi
      .removeMovie(movieToDelete._id)
      .then(() => {
        setSavedList((state) => state.filter((c) => c._id !== movieToDelete._id));
      })
      .catch((err) => {
        console.log("Ошибка", err);
      })
  }

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


  const userLogOut = useCallback(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("searchResultMovies");
    localStorage.removeItem("searchQuery");
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
              isActive={isActive}
              pagetype="auth"
              isRegistered={isRegistered}
              resError={resError} />
            </Route>
            <Route path="/signin">
              <Login
              loggedIn={loggedIn}
              onLogin={userLogin}              
              pagetype="auth"
              resError={resError} />
            </Route>
            <Route
                path="/movies" exact>
                <Movies
                loggedIn={loggedIn}                
                pagetype="movies"
                searchData={searchData}
                
                isOwn={isOwn}
                isSaved={isSaved}
                resError={resError}
                savedList={savedList}
                savedSearch={savedSearch}
                selectedMovie={selectedMovie}
                onSaveClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
                isDesktop={isDesktop}
                isTablet={isTablet}
                isMobile={isMobile}
                />
                </Route>
            <Route 
                path="/saved-movies" exact>
                <SavedMovies
                loggedIn={loggedIn}
                isSaved={isSaved}
                pagetype="saved-movies"
                moviesList={savedList}
                savedList={savedList}
                
                selectedMovie={selectedMovie}
                isOwn={isOwn}
                onDeleteClick={handleDeleteMovie} />
                </Route>
            <Route 
                path="/profile">
                {inEditState   
                ?   (<ProfileEdit
                  onUpdateUser={handleUpdateUser}
                  pagetype="profile-edit"
                  resError={resError} />)
                :   (<Profile
                  pagetype="profile" 
                  onEditClick={handleOnEditClick} 
                  onLogout={userLogOut}/>)
              }
            </Route>

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
    }, [searchQuery])*/