import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FormInput from "../FormInput/FormInput";
import "./SearchForm.css";

function SearchForm({ pagetype, onSearch, moviesList }) {

    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [moviesData, setMoviesData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    
 

    function handleMoviesData() {
        let movies = localStorage.getItem("movies");
        movies = JSON.parse(movies);
        console.log(movies);
        setMoviesData(movies);
        console.log(moviesData);
    }

  
    function searchFilm(searchQuery) {
  
        const searchResult = moviesData.filter(movie => {
         return (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))
               
        }); console.log(searchResult);
        setSearchData(searchResult);
        console.log(searchData);
    }


           

    function handleChange(e) {
        localStorage.removeItem("searchResultMovies");
        localStorage.removeItem("searchQuery");
        setSearchInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("refresh prevented");
        setSearchQuery(searchInput);
        console.log(searchQuery);
        handleMoviesData();
        searchFilm(searchQuery);
        
        localStorage.setItem("searchResultMovies", JSON.stringify(searchData));
        localStorage.setItem("searchQuery", searchQuery);
        onSearch(searchData);
    }
    

    /* const result = useCallback
    useEffect(() => {
        handleMoviesData();
        searchFilm(searchQuery);
        onSearch(searchData);
    }, [])*/
 
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
            <FilterCheckbox />
        </div>
    );
};

export default SearchForm;


/*

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

