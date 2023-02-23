import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import "../Movies/Movies.css";
import { useState } from "react";

function SavedMovies({ pagetype, moviesList, onSaveClick, isOwn, loggedIn }) {

    const[searchNotFound, setSearchNotFound] = useState(false);

    return (
        <><Header
            loggedIn={loggedIn}
            pagetype={pagetype} />
          <main className="movies">        
            <SearchForm
              pagetype={pagetype} />
              { searchNotFound ? 
                  (<div className="movies__notfound">
                        <p className="movies__notfound-text">Вы еще не добавили фильмы в Сохранённые.</p>
                    </div>)
                  : 
                  ( <>
                  <MoviesCardList
                      pagetype={pagetype}
                      moviesList={moviesList}
                      onSaveClick={onSaveClick}
                      isOwn={isOwn} />
                  <MoreButton
                      pagetype={pagetype} />
                      </>)
              }      
          </main>
          <Footer
              pagetype={pagetype} />
        </>
    );
};

export default SavedMovies;
