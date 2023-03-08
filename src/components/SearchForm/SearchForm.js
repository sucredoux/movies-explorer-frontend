import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FormInput from "../FormInput/FormInput";
import "./SearchForm.css";

function SearchForm({ pagetype, onSearch, moviesList, savedQuery, checked, onShortFilter }) {

    const [searchInput, setSearchInput] = useState("");
  /*  const [moviesData, setMoviesData] = useState([]);*/
  /*  const [searchData, setSearchData] = useState([]);*/
 /* const moviespage = pagetype === "movies";*/
    
    function handleChange(e) {
        localStorage.removeItem("searchResultMovies");
        localStorage.removeItem("searchQuery")
             
        setSearchInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchInput);
     /*   localStorage.setItem(`searchQuery${pagetype}`, searchInput);*/
    };

    function handleClick(e){
        e.preventDefault();  
        onShortFilter();
    };

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
                noValidate
                onSubmit={handleSubmit}
                
                className="search__form"
                >
            <FormInput
                type="text" 
                name="search"
                id="search-input"
                className="input search__input"
                placeholder="Фильм"
                formtype="search"
                value={searchInput || ""}
                onChange={handleChange}/>
            <button 
                type="submit"                 
                aria-label="Поиск" 
                name="search-submit"
                className="button search__button"></button>
            </form>
            <FilterCheckbox
                onClick={handleClick}
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