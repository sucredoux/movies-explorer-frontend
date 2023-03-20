import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies({ pagetype, formtype, loggedIn, onSaveClick, onDeleteClick, allMovies, resError, hasResError, savedList,  isDesktop, isMobile}) {
        
    
   /* const [searchResult, setSearchResult] = useState([]);*/
    const [noMore, setNoMore] = useState(false);
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [shortMoviesData, setShortMoviesData] = useState([]);
    const [savedQuery, setSavedQuery] = useState("");
    const initialCheckbox = JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)) 
    ? JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)) 
    : false;
    const [checked, setChecked] = useState(initialCheckbox);
    const [hasSearchError, setHasSearchError] = useState(false);
    const [searchError, setSearchError] = useState([]);
    const [loading, setLoading] = useState(false);

    const cardsToAdd = isDesktop ? 3 : 2;
    const cardsInRowMobile = isMobile ?  1 : 2;
    const cardsInRow = isDesktop ? 3 : cardsInRowMobile;
    const rows = isMobile ? 5 : 4;

    function handleShortMovie(e) {
        e.preventDefault();
        setChecked(!checked);
    };

    function getShortMovies (data) {
        const shortMovies = data.filter(movie => movie.duration < 41 );
        setShortMoviesData(shortMovies);
        localStorage.setItem("searchResultShortMovies", JSON.stringify(shortMovies));
    };

    useEffect(() => {
        localStorage.setItem(`checkedStatus${pagetype}`, JSON.stringify(checked));
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, [checked]);

    useEffect(() => {
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, [moviesData]);

    function handleSearch(query) {
        setLoading(true);
        const searchData = allMovies.filter(movie => {
            return (movie.nameRU.toLowerCase().includes(query.trim().toLowerCase()));  
        });
        console.log(searchData);
        if (searchData.length === 0) {
            setLoading(false);
            setSearchError({ message: "Ничего не найдено"});
            setHasSearchError(true);
        } else {
            setLoading(false);
            setMoviesData(searchData);    
            getShortMovies(searchData);
         /*   setSearchResult(searchData);*/
            setSavedQuery(query);
            localStorage.setItem("searchResultMovies", JSON.stringify(searchData)); 
            localStorage.setItem("searchQuery", query);
            setHasSearchError(false);       
        }
    };

    function renderMovies(data) {
        if (!data || data.length === 0) {
            setSearchError({ message: "Вы еще ничего не искали или ничего не было найдено"});
            setHasSearchError(true);
        } else {
            const c = cardsInRow * rows;
            const movies = data.slice(0,c);
            setMoviesToRender(movies);
            setHasSearchError(false);
        }
    };

    function addToRender() {   
        let n = moviesToRender.length;
        const m = n + cardsToAdd;
        const data = checked ? shortMoviesData : moviesData;
        const moviesToAdd = data.slice(n,m);
        const newMovies = [...moviesToRender, ...moviesToAdd];
        setMoviesToRender(newMovies);
    };

    useEffect(() => {
        const data = checked ? shortMoviesData : moviesData;
        let cardsLeft = data.length - moviesToRender.length;
        if (cardsLeft < cardsInRow ) {
            setNoMore(true);
        } else {
            setNoMore(false);
        }
    }, [moviesToRender]);

    useEffect(() => {
        setSavedQuery(localStorage.getItem("searchQuery"));
        let savedSearchResult = JSON.parse(localStorage.getItem("searchResultMovies"));
        let savedSearchResultShort = JSON.parse(localStorage.getItem("searchResultShortMovies"));
        checked ? renderMovies(savedSearchResultShort) : renderMovies(savedSearchResult);
        savedSearchResult ? setMoviesData(savedSearchResult) : setMoviesData("");
        savedSearchResultShort ? setShortMoviesData(savedSearchResultShort) : setShortMoviesData("");
    }, []);

    return (
        <>  <Header
              loggedIn={loggedIn}
              pagetype={pagetype} />
            <main className={`movies movies_type_${pagetype}`}>           
                <SearchForm
                    pagetype={pagetype}
                    checked={checked}
                    onShortFilter={handleShortMovie}
                    savedQuery={savedQuery}                    
                    onSearch={handleSearch} />
                {loading
                ? ( <Preloader /> )
                : 
                (<> <MoviesCardList
                        pagetype={pagetype}                        
                        moviesList={moviesToRender}
                        savedList={savedList}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick}
                        formtype={formtype}
                        resError={resError}
                        hasResError={hasResError}
                        searchError={searchError.message}
                        hasSearchError={hasSearchError} />
                    <MoreButton
                        pagetype={pagetype}
                        noMore={noMore}
                        onAddMore={addToRender} />                   
                </>                
                )                
                }       
            </main>
            <Footer
                pagetype={pagetype} />
        </>
    );
};

export default Movies;
