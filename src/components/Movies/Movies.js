import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { render } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";
import ResError from "../ResError/ResError";
import FormError from "../FormError/FormError";


function Movies({ pagetype, formtype, onSearch, onSaveClick, onDeleteClick, allMovies, resError, hasResError, savedList, isOwn, loggedIn, isDesktop, isTablet, isMobile}) {
        
    
    const [searchResult, setSearchResult] = useState([]);
    const [noMore, setNoMore] = useState(false);
   /* const [screenWidth, setScreenWidth] = useState(window.innerWidth);*/
    const [moviesToRender, setMoviesToRender] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
  /*  const allMovies = JSON.parse(localStorage.getItem("movies"));*/
  /* const [allMovies, setAllMovies] = useState([]);*/
    const [shortMovies, setShortMovies] = useState([]);
    const [shortMoviesData, setShortMoviesData] = useState([]);

    const [savedQuery, setSavedQuery] = useState("");
    const [checked, setChecked] = useState(false);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [moviesResError, setMoviesResError] = useState([]);
    const [hasSearchError, setHasSearchError] = useState(false);
    const [searchError, setSearchError] = useState([]);


    const cardsToAdd = isDesktop ? 3 : 2;
    const cardsInRowMobile = isMobile ?  1 : 2;
    const cardsInRow = isDesktop ? 3 : cardsInRowMobile;
    const rows = isMobile ? 5 : 4;

   console.log(allMovies);

 /*
   function getShortMovies () {
    const shortMoviesData = allMovies.filter(movie => movie.duration < 41 );
    setShortMovies(shortMoviesData);
   }

   useEffect(() => {
       /* uploadMovies();*/
 /*   getShortMovies();
   }, [allMovies]); */


   function handleShortMovie(e) {
       e.preventDefault();
       setChecked(!checked);
   };

   console.log(allMovies);

    console.log(checked);
console.log(resError);
    console.log(shortMoviesData);

    function getShortMovies (data) {
        const shortMovies = data.filter(movie => movie.duration < 41 );
        setShortMoviesData(shortMovies);
        localStorage.setItem("searchResultShortMovies", JSON.stringify(shortMovies));
    };

    useEffect(() => {
        console.log("Нажали на кнопку");
        localStorage.setItem(`checkedStatus${pagetype}`, checked);
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, [checked, moviesData]);



    function handleSearch(query) {
        console.log("Начали поиск");
        console.log(moviesData);
        /* let movies = JSON.parse(localStorage.getItem("movies"));
        const searchData = movies.filter(movie => {
        return (movie.nameRU.toLowerCase().includes(query.toLowerCase()));  
        });*/
        const searchData = allMovies.filter(movie => {
        return (movie.nameRU.toLowerCase().includes(query.toLowerCase()));  
        });

        if (searchData.length === 0) {
            setSearchError({ message: "Ничего не найдено"});
            setHasSearchError(true);            
        } else {
            setMoviesData(searchData);    
            getShortMovies(searchData);
            setSearchResult(searchData);
            setSavedQuery(query);
            localStorage.setItem("searchResultMovies", JSON.stringify(searchData)); 
            setHasSearchError(false);       
        }
    };
/*
    function searchMovie(searchQuery) {
        const searchData = moviesData.filter(movie => {
            return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())); 
    }); 
};*/

    function renderMovies(data) {
        if (!data) {
            setSearchError({ message: "Ничего не найдено"});
            setHasSearchError(true);
        } else {
            const c = cardsInRow * rows;
            const movies = data.slice(0,c);
            setMoviesToRender(movies);
            setHasSearchError(false);
        }
    };
/*
    useEffect(() => {
        renderMovies(moviesData)
    }, [moviesData]);*/
    
    console.log(moviesToRender);
    console.log(moviesData);
    console.log(searchResult);
    console.log(savedQuery);
    console.log(shortMoviesData);

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
        console.log(savedQuery);
        setChecked(JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)));
      /*  setSearchResult(JSON.parse(localStorage.getItem("searchResultMovies")));*/
        let savedSearchResult = JSON.parse(localStorage.getItem("searchResultMovies"));
        let savedSearchResultShort = JSON.parse(localStorage.getItem("searchResultShortMovies"));
        
        console.log(savedSearchResult);
        console.log(savedSearchResultShort);
        checked ? renderMovies(savedSearchResultShort) : renderMovies(savedSearchResult);
        savedSearchResult ? setMoviesData(savedSearchResult) : setMoviesData("");
        savedSearchResultShort ? setShortMoviesData(savedSearchResultShort) : setShortMoviesData("");
      /*  savedSearchResult ? setSearchResult(savedSearchResult) : setSearchResult([]);
        renderMovies(searchResult);*/
        console.log(moviesToRender);
    }, []);


   /* useLayoutEffect(() => {
        setSavedQuery(localStorage.getItem("searchQuery"));
        setChecked(JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)));
        setSearchResult(JSON.parse(localStorage.getItem("searchResultMovies")));
        renderMovies(searchResult);

       /* savedResult ? setMoviesData(savedResult) : setShortMoviesData([]);
      /*  setMoviesData(JSON.parse(localStorage.getItem("searchResultMovies")));*/
    /* savedSearchResults();*/
        
       
       /*nsole.log(checked);
    /*   checked ? setMoviesData(shortMovies) : setMoviesData(allMovies);
        renderMovies(moviesData);*/
       /* checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);*/
  /*  }, []);*/
/*
    const resErrorMovies = [
        { name: "Internal Server Error", 
          message: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}
      ]

      if (searchNotFound) {
        return (
            <div className="movies__notfound">
            <p className="movies__notfound-text">Ничего не найдено</p>
        </div>  
        )
    }

    if (searchNotFound) {
        return (
            <FormError
            formtype="movies"
            hasError={hasError}
            errorMessage={"Ничего не найдено"}           
        />
)
    }

    if (!moviesData) {
        return (
            <div className="movies__notfound">
            <p className="movies__notfound-text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
        </div>  
        )
    }
*/
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
                {!savedQuery
                ? (<Preloader /> )
                : 
                (<><MoviesCardList
                        pagetype={pagetype}                        
                        moviesList={moviesToRender}
                        savedList={savedList}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick} />
                        <MoreButton
                            pagetype={pagetype}
                            noMore={noMore}
                            onAddMore={addToRender} />
                </>                
                )                
                }
                <ResError 
                pagetype={pagetype}
                formtype={formtype}
                resError={resError}
                hasResError={hasResError}
                searchError={searchError.message}
                hasSearchError={hasSearchError}
               />       
            </main>
            <Footer
                pagetype={pagetype} />
            </>
    );
};

export default Movies;

/*
searchResult.length !== 0
moviesData.length === 0
searchResult !== null
searchResult === null
moviesToRender === 0


(!hasResError && <><MoviesCardList
                        pagetype={pagetype}
                        moviesList={moviesToRender}
                        savedList={savedList}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick} /><MoreButton
                            pagetype={pagetype}
                            noMore={noMore}
                            onAddMore={addToRender} />
                </>                
                )
                (hasResError && <ResError
                    pagetype={pagetype}
                    resError={resError} />)





                    <ResError 
                        pagetype={pagetype}
                        resError={resError}
                        resErrorMessage={resErrorMovies}/>

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

 /*   useEffect(() => {
        setChecked(JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)));
        checked ? renderMovies(shortMoviesData) : renderMovies(moviesData);
    }, []);*/

/*
console.log(rows);
console.log(cardsInRow);*/

/*    
useEffect(() => {
    console.log(checked);
    checked ? setIsShortFiltered(true) : setIsShortFiltered(false);
}, [checked]);
*/

  /*  const [checked, setChecked] = useState(false, () => { 
        let filterStatus = JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`));
        return !filterStatus ? false : filterStatus });
*/




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



    /*const savedSearchResults = () => {
        let savedResults = JSON.parse(localStorage.getItem("searchResultMovies"));
    console.log(savedResults);
        setSavedSearch(savedResults);
    console.log(savedSearch);
    };*/



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





/*
грузится. но не ищет
пробую перенести upload movies в App

console.log(allMovies);

   function uploadMovies () {
    const uploadedMovies = JSON.parse(localStorage.getItem("movies"));
    setAllMovies(uploadedMovies);
   };

   function getShortMovies () {
    const shortMoviesData = allMovies.filter(movie => movie.duration < 41 );
    setShortMovies(shortMoviesData);
   }

   useEffect(() => {
    getShortMovies();
   }, [allMovies]); 
  

   function handleShortMovie(e) {

    e.preventDefault();
    setChecked(!checked);
    handleMoviesData();
    localStorage.setItem(`checkedStatus${pagetype}`, checked);

};

console.log(allMovies);

 console.log(checked);

 console.log(shortMovies);

 Убрала - зависимость от смены короткометражек
/* useEffect(() => {
     console.log("Нажали на кнопку");
     localStorage.setItem(`checkedStatus${pagetype}`, checked);
     handleMoviesData();
 }, [checked]);*/
/*
Рабочее

function handleMoviesData() {
 checked ? setMoviesData(shortMovies) : setMoviesData(allMovies);
}

function handleSearch(query) {

 uploadMovies();
 console.log(moviesData);
 const searchData = moviesData.filter(movie => {
   return (movie.nameRU.toLowerCase().includes(query.toLowerCase()));  
 });
 
 if (searchData.length === 0) {
     setSearchNotFound(true);
     setHasResError(true);
     
 } else {
     renderMovies(searchData);     
     
       setSearchResult([...searchResult, searchData]);

    localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
    localStorage.setItem("searchQuery", query);
 }
};
/* убрала - отдельная формула для поиска?
 function searchMovie(searchQuery) {
     const searchData = moviesData.filter(movie => {
         return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())); 
 }); 
};*/
/*
 function renderMovies(data) {
     if (!data) {
         setHasResError(true);
         setMoviesResError("who knows what...")
     } else {
         const c = cardsInRow * rows;
         const movies = data.slice(0,c);
         setMoviesToRender(movies);
     }
 };

/* Убрала - с этим не проходило переключение на короткие, если не было еще поиска  
useEffect(() => {
     setSavedQuery(localStorage.getItem("searchQuery"));
     handleSearch(savedQuery);
     renderMovies(searchResult);
 }, [moviesData, checked]);*/
/*
 useEffect(() => {
     setSavedQuery(localStorage.getItem("searchQuery"));
     setChecked(JSON.parse(localStorage.getItem(`checkedStatus${pagetype}`)));

     let savedSearchResult = JSON.parse(localStorage.getItem("searchResultMovies"));
     savedSearchResult ? setSearchResult(savedSearchResult) : setSearchResult([]);
     renderMovies(searchResult);
 }, []);

 
 console.log(moviesToRender);
 console.log(moviesData);
 console.log(searchResult);



     console.log(shortMovies);

 function addToRender() {   
     let n = moviesToRender.length;
     const m = n + cardsToAdd;
     const moviesToAdd = searchResult.slice(n,m);

     const newMovies = [...moviesToRender, ...moviesToAdd];
     setMoviesToRender(newMovies);
 };

 useEffect(() => {


     let cardsLeft = searchResult.length - moviesToRender.length;
     if (cardsLeft < cardsInRow ) {
         setNoMore(true);
     } else {
         setNoMore(false);
     }
 }, [moviesToRender]);


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
             {moviesData.length === 0
             ? (<Preloader /> )
             : 
             (<><MoviesCardList
                 pagetype={pagetype}
                 moviesList={moviesToRender}
                 savedList={savedList}
                 onSaveClick={onSaveClick}
                 onDeleteClick={onDeleteClick}
                  />
             <MoreButton
                 pagetype={pagetype}
                 noMore={noMore}
                 onAddMore={addToRender} />

             </>)
             }               
         </main>
         <Footer
             pagetype={pagetype} />
         </>
 );
};





*/