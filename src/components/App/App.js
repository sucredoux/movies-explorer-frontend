import React, { useState } from 'react';
import MobileHeader from '../MobileHeader/MobileHeader';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Footer from '../Footer/Footer';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const isMobile = useMediaQuery({
    query: '(max-width: 400px)'
  })
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOwn, setIsOwn] = useState(false);
  const [loading, setLoading] = useState(false);

  const moviesList = [
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Первое название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Второе название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" },
    {image: "https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60", title: "Третье название фильма: название фильма - название фильма для названия фильма", duration: "1ч35мин" }
  ];

  function handleOnSaveClick() {
    setIsOwn(true);
  }
  console.log(isOwn);

  
  if (loading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        
          {isMobile && loggedIn ? (
            <MobileHeader/>
          ) : (
            <Header />
          )}
          <main className="content">
          <Switch>
            <Route path='/' exact>
              <Main /> 
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/movies">
              <Movies
                pagetype="movies"
                moviesList={moviesList}
                isOwn={isOwn}
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
              <Profile />
            </Route>
            <Route path="*">
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" /> }
            </Route>
          </Switch>
          </main>
          <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


/*
 <Footer />  
*/