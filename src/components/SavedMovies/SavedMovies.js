import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import "../Movies/Movies.css";
import { useState } from "react";

function SavedMovies({ pagetype, moviesList, onDeleteClick, isOwn, loggedIn, onSearch, onShortFilter }) {

    const[searchNotFound, setSearchNotFound] = useState(false);

console.log(moviesList);

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
              pagetype={pagetype}
              onShortFilter={onShortFilter} />
            { moviesList.length !== 0 ?
                  ( <>
                  <MoviesCardList
                      pagetype={pagetype}
                      moviesList={moviesList}
                      onDeleteClick={onDeleteClick}
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