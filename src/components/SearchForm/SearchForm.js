import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FormError from "../FormError/FormError";
import FormInput from "../FormInput/FormInput";
import "./SearchForm.css";

function SearchForm({ pagetype, onSearch, moviesList, savedQuery, checked, onShortFilter }) {

    const [searchInput, setSearchInput] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState(false);

  /*  const [moviesData, setMoviesData] = useState([]);*/
  /*  const [searchData, setSearchData] = useState([]);*/
 /* const moviespage = pagetype === "movies";*/
    
    function handleChange(e) {
        setSearchInput(e.target.value);
        setErrorMessage("Нужно ввести ключевое слово");
        setIsValid(e.target.validity.valid);
        setHasError(!isValid);
        if (isValid === false) {
            setHasError(true);
            setIsFormValid(false);
        } else {
            setHasError(false);
            setIsFormValid(true);
            setErrorMessage("");
        }
    };

    console.log(isValid);
console.log(hasError);

console.log(errorMessage);

console.log(isFormValid);

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchInput);
        localStorage.setItem("searchQuery", searchInput);
     /*   localStorage.setItem(`searchQuery${pagetype}`, searchInput);*/
    };

  /*  function handleClick(e){
        e.preventDefault();  
        localStorage.removeItem(`checkedStatus${pagetype}`);
        onShortFilter();
    };*/

  /*  useEffect(() => {
        setSavedQuery(localStorage.getItem("searchQuery"));
    }, []);*/

    useEffect(() => {
        setSearchInput(savedQuery);
    }, [savedQuery]);
 
    return (
        <div className={`search search_type_${pagetype}`}>
           <form 
                name="search"
                id="form"
                noValidate
                onSubmit={handleSubmit}
                className="search__form"
                >
            <FormInput
                type="text" 
                name="search"
                id="search-input"
                placeholder="Фильм"
                formtype="search"
                required
                pattern="[а-яА-ЯёЁa-zA-Z\s-"
                minLength="1"
                value={searchInput || ""}
                onChange={handleChange}
                hasError={hasError}
                isValid={isValid}/>
                <FormError
                    formtype="search"
                    hasError={hasError}
                    errorMessage={errorMessage}           
                />
            <button 
                type="submit"                 
                aria-label="Поиск" 
                name="search-submit"
                disabled={!isFormValid}
                className="button search__button"></button>
            </form>
            <FilterCheckbox
                onClick={onShortFilter}
                checked={checked} />
        </div>
    );
};

export default SearchForm;


/*
: localStorage.removeItem("searchResultSavedMovies") && localStorage.removeItem("searchQuerySavedMovies")
localStorage.getItem("searchQguery")
/*
  function handleMoviesList() {
    let movies = localStorage.getItem("movies");
    movies = JSON.parse(movies);
    console.log(movies);
    setMoviesList(movies);
  }*/


  


   /* function searchFilm(searchQuery) {
        console.log(searchQuery);
      /*  return moviesList.filter(movie => {
            const regex = new RegExp(searchInput, 'gi');
            console.log(movie.nameRU.match(regex));
            return movie.nameRU.match(regex);
        })
      }*/
      /*useEffect(() => {
        searchFilm(searchQuery)
      }, [searchQuery])*/
 
/*
                 /*const regex = new RegExp(searchQuery, 'gi');
                 /*console.log(movie.nameRU.match(regex));*/
                /* return movie.nameRU.match(regex);*/






                 /*
/*
    function handleMoviesData() {
        let movies = localStorage.getItem("movies");
      /*  let movies = localStorage.getItem(`${pagetype}`);*/
      /*  movies = JSON.parse(movies);
     
        setMoviesData(movies);
    }*/
  
 /*   console.log(moviesData);*/
 /*   console.log(moviesList);
    console.log(searchQuery);
    console.log(searchData);
/*
    function searchFilm(searchQuery) {
  
        const searchResult = moviesData.filter(movie => {
         return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))             
        }); 
        setSearchData(searchResult);
    }
*//*
    function searchFilm(searchQuery) {
    
        const searchResult = moviesList.filter(movie => {
        return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))             
        }); 
        setSearchData(searchResult);
    }

    function handleChange(e) {
        localStorage.removeItem("searchResultMovies");
        localStorage.removeItem("searchQuery");
        
        
       setSearchInput(e.target.value);
        /*setSearchQuery(searchInput);*/
  
        
   /* }

    /* useEffect(() => {
         searchFilm(searchQuery);
     }, [searchQuery]);*/
 /*
     function handleSubmit(e) {
         e.preventDefault();
        /* setSearchQuery(searchInput);*/
        
       /*  handleMoviesData();*/
      /*   searchFilm(searchInput);
         
         localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
         localStorage.setItem("searchQuery", searchQuery);
         onSearch(searchData);
     }
   /*  
 useEffect(()=> {
     setSearchQuery(savedQuery);
 }, [savedQuery])*/
 
     /* const result = useCallback
     useEffect(() => {
         handleMoviesData();
         searchFilm(searchQuery);
         onSearch(searchData);
     }, [])*/