import React, { useState } from 'react';
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

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(true);
  const [isOwn, setIsOwn] = useState(false);
  const [loading, setLoading] = useState(false);
  const[inEditState, setInEditState] = useState(false);


  const moviesList = [
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Первое название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Второе название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Третье название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" }
  ];

  function handleOnSaveClick() {
    setIsOwn(true);
  }

  function handleOnEditClick() {
    setInEditState(true);
  }

  function handleOnSaveUserClick() {
    setInEditState(false);
  }
   
  if (loading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">        
          <Switch>
            <Route path='/' exact>
              <Main
              pagetype="main" /> 
            </Route>
            <Route path="/movies">
              <Movies
                pagetype="movies"
                moviesList={moviesList}
                isOwn={isOwn}
                onChange="onChange"
                onSubmit="onSubmit"
                onSaveClick={handleOnSaveClick} />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies
                pagetype="saved-movies"
                moviesList={moviesList}
                isOwn={isOwn}
                onSaveClick={handleOnSaveClick} />
            </Route>
            <Route path="/profile">
              { inEditState ? 
              <ProfileEdit onSubmit={handleOnSaveUserClick} pagetype="profile-edit" />
              : <Profile pagetype="profile" onSubmit={handleOnEditClick} />
              }
            </Route>
            <Route path="/signup">
              <Register
              onSubmit="onSubmit"
              pagetype="auth" />
            </Route>
            <Route path="/signin">
              <Login
              onSubmit="onSubmit"
              pagetype="auth" />
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
