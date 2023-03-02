import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";


function Movies({ pagetype, moviesList, onSaveClick, isOwn, loggedIn }) {
        
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [noMore, setNoMore] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow =() => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", function () {
            setTimeout(handleResizeWindow, 5000);
        });

    }, []) 

    console.log(screenWidth);
    
   /* let cardsToAdd;

    function handleCardsToAdd(screenWidth) {
        
        if (screenWidth > 1279) {
            return cardsToAdd = 3;
        } else {
            return cardsToAdd = 2;
        }
        
    }
    screenWidth > 1279 ? cardsToAdd = 3 : cardsToAdd = 2

    const rowMultiplier = () => {
        if ( screenWidth > 767) {
            return 4;
        } else {
            return 5;
        }
    }

console.log(screenWidth);
console.log(cardsToAdd);
console.log(rowMultiplier);
    
    const cardsToShow = cardsToAdd * rowMultiplier;
    console.log(cardsToShow)*/
   
    
/*
    function onSearch(searchData) {
        let searchResultData = JSON.parse(localStorage.getItem("searchResultMovies"));
        setSearchResult(searchResultData);
        const movies = () => {
            if (screenWidth > 1279) {
                searchResultData.slice(0,12);
            } else if ( screenWidth > 767) {
                searchResultData.slice(0,8);
            } else {
                searchResultData.slice(0,5);
            }
            
            return movies;
            console.log(movies);
        }
        
        setMoviesToRender(movies);
        };
        */
    const isDesktop = screenWidth > 1279;
    const isTablet = 1280 > screenWidth > 767;
    const isMobile = screenWidth < 768;
   
    const cardsToAdd = isDesktop ? 3 : 2;
    const cardsInRow = isDesktop ? 3 : (isTablet ?  2 : 1);
    let rows = isMobile ? 5 : 4;


    function onSearch(searchData) {
    let searchResultData = JSON.parse(localStorage.getItem("searchResultMovies"));
    setSearchResult(searchResultData);
    const c = cardsInRow * rows;
    const movies = searchResultData.slice(0,c);
    
    setMoviesToRender(movies);
    };

    function addToRender() {   
        let n = moviesToRender.length;
        const m = n + cardsToAdd;
        const moviesToAdd = searchResult.slice(n,m);
        const newMovies = [...moviesToRender, ...moviesToAdd];
        setMoviesToRender(newMovies);
    };

    useEffect(() => {
        let cardsLeft = searchResult.length - moviesToRender.length;        
        console.log(cardsLeft);
        if (cardsLeft < 3 ) {
            setNoMore(true);
        } else {
            setNoMore(false);
        }
    }, [moviesToRender, searchResult]);

console.log(moviesToRender);

    return (
        <><Header
              loggedIn={loggedIn}
              pagetype={pagetype} />
            <main className={`movies movies_type_${pagetype}`}>           
                <SearchForm
                    pagetype={pagetype}                    
                    onSearch={onSearch} />

               <MoviesCardList
                        pagetype={pagetype}
                        moviesList={moviesToRender}
                        onSaveClick={onSaveClick}
                        isOwn={isOwn} />
                <MoreButton
                            noMore={noMore}
                            onAddMore={addToRender} />
            </main>
            <Footer
                pagetype={pagetype} />
            </>
    );
};

export default Movies;

/*
{ hasError ? 
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
                    
                    <Preloader />

{moviesToRender 
                ?  (<Preloader /> )
                : ( 
                  <>   </>)
                }


                    */
            