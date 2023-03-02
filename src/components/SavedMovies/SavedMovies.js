import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import "../Movies/Movies.css";
import { useState } from "react";

function SavedMovies({ pagetype, moviesList, onSaveClick, isOwn, loggedIn }) {

    const[searchNotFound, setSearchNotFound] = useState(false);

    if (searchNotFound) {
        return (
            <div className="movies__notfound">
            <p className="movies__notfound-text">Среди сохранённых нет фильмов с таким ключевым словом.</p>
        </div>  
        )
    }

    return (
        <><Header
            loggedIn={loggedIn}
            pagetype={pagetype} />
          <main className={`movies movies_type_${pagetype}`}>        
            <SearchForm
              pagetype={pagetype} />
            { isOwn ?
                  ( <>
                  <MoviesCardList
                      pagetype={pagetype}
                      moviesList={moviesList}
                      onSaveClick={onSaveClick}
                      isOwn={isOwn} />
                  <MoreButton
                      pagetype={pagetype} />
                      </>)
                      :
                      (<div className="movies__notfound">
                      <p className="movies__notfound-text">Вы еще не добавили фильмы в Сохранённые.</p>
                  </div>)
              }      
          </main>
          <Footer
              pagetype={pagetype} />
        </>
    );
};

export default SavedMovies;

/*
{ searchNotFound ? 
    (<div className="movies__notfound">
          <p className="movies__notfound-text">Вы еще не добавили фильмы в Сохранённые.</p>
      </div>)
    : 
    */