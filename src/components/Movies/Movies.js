import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";


function Movies({ pagetype, moviesList, onSaveClick, isOwn, loggedIn, onChange, onSubmit }) {

    const[searchNotFound, setSearchNotFound] = useState(false);

    return (
        <><Header
              loggedIn={loggedIn}
              pagetype={pagetype} />
            <main className={`movies movies_type_${pagetype}`}>           
                <SearchForm
                    pagetype={pagetype}
                    onChange={onChange}
                    onSubmit={onSubmit} />
                { searchNotFound ? 
                    (<div className="movies__notfound">
                        <p className="movies__notfound-text">Поиск по Вашему запросу не дал результата. Попробуйте еще раз.</p>
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

export default Movies;
