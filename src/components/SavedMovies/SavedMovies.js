import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import "../Movies/Movies.css";
import { useEffect, useState } from "react";
import ResError from "../ResError/ResError";

function SavedMovies({ pagetype, formtype, moviesList, savedList, onDeleteClick, hasResError, resError, loggedIn, onSearch, onShortFilter }) {
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [shortSavedList, setShortSavedList] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [savedQuery, setSavedQuery] = useState("");
    const [checked, setChecked] = useState(false);
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [shortMoviesData, setShortMoviesData] = useState([]);

    const [isValid, setIsValid] = useState(false);
    const [hasSearchError, setHasSearchError] = useState(false);
    const [searchError, setSearchError] = useState([]);


console.log(savedList);

    useEffect(() => {
        renderMovies(savedList);
    }, [savedList]);

    function handleShortMovie(e) {
        e.preventDefault();
        setChecked(!checked);
    };

    function getShortMovies (data) {
        const shortMovies = data.filter(movie => movie.duration < 41 );
        setShortMoviesData(shortMovies);
    };
    console.log(moviesData);
    console.log(shortSavedList);
    console.log(moviesToRender);
    console.log(searchResult);
    console.log(hasResError);
    console.log(hasSearchError);
   

    
    
    
    useEffect(() => {
        console.log("Нажали на кнопку");
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
            /* handleMoviesData();*/
        console.log(moviesData);
    }, [checked, moviesData]);
    
    console.log(savedQuery);
    
    function handleSearch(query) {      
        console.log(query)      
        const searchData = savedList.filter(movie => {
            return (movie.nameRU.toLowerCase().includes(query.toLowerCase()));  
        });
console.log(searchData);
        if (searchData.length === 0) {
            setSearchError({ message: "Ничего не найдено"});
            setHasSearchError(true);                 
        } else {
            setMoviesData(searchData);    
            getShortMovies(searchData);
            setSearchResult(searchData);
            setHasSearchError(false);
        }            
    };

    function renderMovies(data) {
        if (!data) {
            setSearchError({ message: "Вы еще ничего не добавили"});
            setHasSearchError(true);
        } else {
            setMoviesToRender(data);
            setHasSearchError(false);
        }
    };

    useEffect(() => {
        renderMovies(savedList);
    }, []);

    return (
        <><Header
            loggedIn={loggedIn}
            pagetype={pagetype} />
            <main className={`movies movies_type_${pagetype}`}>
                <SearchForm
                    pagetype={pagetype}
                    checked={checked}
                    onShortFilter={handleShortMovie}
                    savedQuery={savedQuery}
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


/*
/*
                {savedList.length !== 0 ?
                    searchResult.length !== 0 ?
                        

/* useEffect(() => {
        renderMovies(savedList);
    }, [savedList])*/
  /*
    useEffect(() => {
        /*  setChecked(JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)));*/
          
     /*     const searchData = moviesData.filter(movie => {
              return (movie.nameRU.toLowerCase().includes(savedQuery.toLowerCase()));  
            });
          renderMovies(searchData);
          setSearchResult(searchData);
          localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
      }, [moviesData]);*/
  

  /*  if (searchNotFound) {
        return (
            <div className="movies__notfound">
            <p className="movies__notfound-text">Ничего не найдено</p>
        </div>  
        )
    }*/


/*

{ searchNotFound ? 
    (<div className="movies__notfound">
          <p className="movies__notfound-text">Вы еще не добавили фильмы в Сохранённые.</p>
      </div>)
    : 
    */