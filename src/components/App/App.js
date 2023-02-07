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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const isMobile = useMediaQuery({
    query: '(max-width: 400px)'
  })
  const [loggedIn, setLoggedIn] = useState(false);
  
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        
          {isMobile && loggedIn ? (
            <MobileHeader/>
          ) : (
            <Header />
          )}
          <Switch>
            <Route path='/'>
             <Main /> 
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path='/saved-movies'>
              <SavedMovies />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path="*">
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" /> }
            </Route>
          </Switch>
          <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


/*
 <Footer />  
*/