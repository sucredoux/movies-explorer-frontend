import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { DESKTOP_AND_TABLET_ROWS,
    TABLET_CARDS_IN_ROW,
    DESKTOP_MORE_CARDS,
    MOBILE_ROWS,
    MOBILE_CARDS_IN_ROW,
    TABLET_MORE_CARDS,
    DESKTOP_CARDS_IN_ROW, 
    SHORT_MOVIE_LENGTH} from "../../utils/config";
import { useIntl } from "react-intl";

function Movies({ pagetype, formtype, loggedIn, onSaveClick, onDeleteClick, onMovieClick, allMovies, resError, hasResError, savedList,  isDesktop, isMobile, currentLocale, onSwitch }) {      
    
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

    const intl = useIntl();

    const cardsToAdd = isDesktop ? DESKTOP_MORE_CARDS : TABLET_MORE_CARDS;
    const cardsInRowMobile = isMobile ?  MOBILE_CARDS_IN_ROW : TABLET_CARDS_IN_ROW;
    const cardsInRow = isDesktop ? DESKTOP_CARDS_IN_ROW : cardsInRowMobile;
    const rows = isMobile ? MOBILE_ROWS : DESKTOP_AND_TABLET_ROWS;

    function handleShortMovie(e) {
        e.preventDefault();
        setChecked(!checked);
    };

    function getShortMovies (data) {
        const shortMovies = data.filter(movie => movie.duration < SHORT_MOVIE_LENGTH );
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
        if (searchData.length === 0) {
            setLoading(false);
            setSearchError({ message: intl.formatMessage({ id: "movies_not_found" })});
            setHasSearchError(true);
        } else {
            setLoading(false);
            setMoviesData(searchData);    
            getShortMovies(searchData);
            setSavedQuery(query);
            localStorage.setItem("searchResultMovies", JSON.stringify(searchData)); 
            localStorage.setItem("searchQuery", query);
            setHasSearchError(false);       
        }
    };

    function renderMovies(data) {
        if (!data || data.length === 0) {
            setSearchError({ message: intl.formatMessage({ id: "movies_not_added" })})
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
              pagetype={pagetype}
              currentLocale={currentLocale}
              onSwitch={onSwitch} />
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
                        onMovieClick={onMovieClick}
                        formtype={formtype}
                        resError={resError}
                        hasResError={hasResError}
                        searchError={searchError.message}
                        hasSearchError={hasSearchError}
                        currentLocale={currentLocale} />
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
