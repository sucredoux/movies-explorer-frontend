import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import "../Movies/Movies.css";
import { useEffect, useState } from "react";
import { SHORT_MOVIE_LENGTH } from "../../utils/config.js";

function SavedMovies({ pagetype, formtype, savedList, onDeleteClick, hasResError, resError, loggedIn }) {

    const [moviesData, setMoviesData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [shortMoviesData, setShortMoviesData] = useState([]);
    const [hasSearchError, setHasSearchError] = useState(false);
    const [searchError, setSearchError] = useState([]);

    useEffect(() => {
        renderMovies(savedList);
        getShortMovies(savedList);
    }, [savedList]);

    function handleShortMovie(e) {
        e.preventDefault();
        setChecked(!checked);
    };

    function getShortMovies (data) {
        const shortMovies = data.filter(movie => movie.duration < SHORT_MOVIE_LENGTH );
        setShortMoviesData(shortMovies);
    };
    
    useEffect(() => {
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, [checked]);

    useEffect(() => {
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, [moviesData]);
    
    function handleSearch(query) {        
        const searchData = savedList.filter(movie => {
            return (movie.nameRU.toLowerCase().includes(query.trim().toLowerCase()));  
        });
        if (searchData.length === 0) {
            setSearchError({ message: "Ничего не найдено"});
            setHasSearchError(true);                 
        } else {
            setMoviesData(searchData);    
            getShortMovies(searchData);
            setHasSearchError(false);
        }            
    };

    function renderMovies(data) {
        if (data.length === 0) {
            setSearchError({ message: "Вы еще ничего не добавили или ничего не было найдено"});
            setHasSearchError(true);
        } else {
            setMoviesToRender(data);
            setHasSearchError(false);
        }
    };

    useEffect(() => {
        renderMovies(savedList);
        getShortMovies(savedList);
    }, []);

    return (
        <> <Header
                loggedIn={loggedIn}
                pagetype={pagetype} />
            <main className={`movies movies_type_${pagetype}`}>
                <SearchForm
                    pagetype={pagetype}
                    checked={checked}
                    onShortFilter={handleShortMovie}
                    onSearch={handleSearch} />
                <MoviesCardList
                    pagetype={pagetype}
                    moviesList={moviesToRender}
                    onDeleteClick={onDeleteClick}
                    formtype={formtype}
                    resError={resError}
                    hasResError={hasResError}
                    searchError={searchError.message}
                    hasSearchError={hasSearchError} />
                <MoreButton
                    pagetype={pagetype}
                    noMore="noMore" />                  
            </main>
            <Footer
                pagetype={pagetype} />
        </>
    );
};
        
export default SavedMovies;
