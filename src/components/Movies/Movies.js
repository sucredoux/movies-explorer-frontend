import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { render } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";


function Movies({ pagetype, onSearch, onSaveClick, onDeleteClick, savedList, isOwn, loggedIn, isDesktop, isTablet, isMobile}) {
        
    
    const [searchResult, setSearchResult] = useState(false);
    const [noMore, setNoMore] = useState(false);
   /* const [screenWidth, setScreenWidth] = useState(window.innerWidth);*/
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [shortMoviesData, setShortMoviesData] = useState([]);
    const [savedQuery, setSavedQuery] = useState("");
    const [checked, setChecked] = useState(false);

  
/*
 
    useEffect(() => {
        const handleResizeWindow =() => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", function () {
            setTimeout(handleResizeWindow, 5000);
            
        });
    }, []) */
/*
console.log(moviesToRender);
console.log(searchResult);
console.log(searchData);*/
/*console.log(screenWidth);*/
/*console.log(isDesktop);
console.log(isTablet);
console.log(isMobile);*/


    const cardsToAdd = isDesktop ? 3 : 2;
    const cardsInRowMobile = isMobile ?  1 : 2;
    const cardsInRow = isDesktop ? 3 : cardsInRowMobile;
    const rows = isMobile ? 5 : 4;

    function handleShortMovie() {
       /* localStorage.removeItem(`checkedStatus${pagetype}`);  */
        console.log(checked);
        setChecked(!checked);
  

     /*   checked ? setIsShortFiltered(true) : setIsShortFiltered(false);*/
    };
/*    
useEffect(() => {
    console.log(checked);
    checked ? setIsShortFiltered(true) : setIsShortFiltered(false);
}, [checked]);
*/
    console.log(checked);

    useEffect(()=> {
        const shortMovies = moviesData.filter(movie => movie.duration < 41 );
        console.log(shortMovies);
        setShortMoviesData(shortMovies);
    }, [moviesData]);
    
    console.log(shortMoviesData);


    useEffect(() => {
        console.log("Нажали на кнопку");
      /*  localStorage.setItem(`checkedStatus${pagetype}`, checked);*/
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
        
    }, [checked]);

    useEffect(() => {
      /*  setChecked(localStorage.getItem("checkedStatus"));*/
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, []);

/*
console.log(rows);
console.log(cardsInRow);*/

    function renderMovies(data) {
        const c = cardsInRow * rows;
        const movies = data.slice(0,c);
        setMoviesToRender(movies);
    };

    function handleSearch(searchQuery) {
        let movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);
        const searchData = movies.filter(movie => {
          return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))             
        });
        setMoviesData(searchData);
      /*  renderMovies(moviesData);*/
      /*  setSearchResult(true);*/
        localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
        localStorage.setItem("searchQuery", searchQuery);
    };
      
    console.log(moviesToRender);
    console.log(moviesData);



    function addToRender() {   
        let n = moviesToRender.length;
        const m = n + cardsToAdd;
        const moviesToAdd = moviesData.slice(n,m);
        const newMovies = [...moviesToRender, ...moviesToAdd];
        setMoviesToRender(newMovies);
    };

    useEffect(() => {
        let cardsLeft = moviesData.length - moviesToRender.length;        
        if (cardsLeft < 3 ) {
            setNoMore(true);
        } else {
            setNoMore(false);
        }
    }, [moviesData, moviesToRender]);

    /*const savedSearchResults = () => {
        let savedResults = JSON.parse(localStorage.getItem("searchResultMovies"));
    console.log(savedResults);
        setSavedSearch(savedResults);
    console.log(savedSearch);
      };*/

    useEffect(() => {
        setMoviesData(JSON.parse(localStorage.getItem("searchResultMovies")));
       /* savedSearchResults();*/
       setSavedQuery(localStorage.getItem("searchQuery"));
      /* setChecked(localStorage.getItem(`checkedStatus${pagetype}`));*/
    }, []);

    useEffect(() => {
        renderMovies(moviesData);
    }, [moviesData]);

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
                {moviesData 
                ? (<><MoviesCardList
                        pagetype={pagetype}
                        moviesList={moviesToRender}
                        savedList={savedList}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick}
                        isOwn={isOwn} />
                    <MoreButton
                        pagetype={pagetype}
                        noMore={noMore}
                        onAddMore={addToRender} />
                    </>)
                : (<Preloader /> )
                }               
            </main>
            <Footer
                pagetype={pagetype} />
            </>
    );
};

export default Movies;

/*
checked={checked}
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



                   /* const [screenWidth, setScreenWidth] = useState(window.innerWidth);*/
/*
    function renderMovies(searchResult) {
        const c = cardsInRow * rows;
        const movies = searchResult.slice(0,c);
    /*const movies = searchResultData.slice(0,c);*/

 /*   useEffect(() => {
        renderMovies();
    }, [])*/
/*
function checkScreenSize(screenWidth) {
    screenWidth > 1279 ? setIsDesktop(true) : setIsDesktop(false);
    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    screenWidth > 767 && screenWidth < 1280 ? setIsTablet(true) : setIsTablet(false);
};
*/
/*
const cardsToAdd = screenWidth > 1279 ? 3 : 2;
           const cardsInRowTablet = screenWidth > 767 && screenWidth < 1280 ?  2 : 1;
           const cardsInRow = screenWidth > 1279 ? 3 : cardsInRowTablet;
           const rows = screenWidth < 768 ? 5 : 4;
*/

   /* const isDesktop = screenWidth > 1279;
    const isTablet =  screenWidth > 767 && screenWidth < 1280;
    const isMobile = screenWidth < 768;
 
    const cardsToAdd = isDesktop ? 3 : 2;
    const cardsInRowTablet = isTablet ?  2 : 1;
    const cardsInRow = isDesktop ? 3 : cardsInRowTablet;
    const rows = isMobile ? 5 : 4;*/

                     /* const [cardsToAdd, setCardsToAdd] = useState(() => {
        screenWidth > 1279 ? 3 : 2
    });*/
        
   /* const isDesktop = screenWidth > 1279;
    const isTablet =  screenWidth > 767 && screenWidth < 1280;
    const isMobile = screenWidth < 768;*/
/*
    useEffect(() => {
        
        let cardsLeft = searchResult.length - moviesToRender.length;        
        if (cardsLeft < 3 ) {
            setNoMore(true);
        } else {
            setNoMore(false);
        }
    }, [moviesToRender, searchResult]);

/*
    function onSearch(searchData) {

      /*  let searchResultData = JSON.parse(localStorage.getItem("searchResultMovies"));*/
    /*    setSearchResult(searchData);
        renderMovies(searchResult);
   /* const c = cardsInRow * rows;
    const movies = searchData.slice(0,c);
    /*const movies = searchResultData.slice(0,c);*/
  /*  setMoviesToRender(movies);*/
   /* };*/

/*
    useEffect(() => {

      /*  const savedSearch = JSON.parse(localStorage.getItem("searchResultMovies"));
        setSearchResult(savedSearch);*/
    /*    const savedSearchQuery = localStorage.getItem("searchQuery");
        setSavedQuery(savedSearchQuery);
        let movies = localStorage.getItem("movies");
        movies = JSON.parse(movies);     
        setMoviesData(movies);

   }, [])
/*
    function handleMoviesData() {
        let movies = localStorage.getItem("movies");
      /*  let movies = localStorage.getItem(`${pagetype}`);*/
      /*  movies = JSON.parse(movies);
     
        setMoviesData(movies);
    }*/
            