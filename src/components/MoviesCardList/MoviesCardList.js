import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ pagetype, moviesList, isOwn, onSaveClick }) {


    
console.log(moviesList);

    return (
        <div className="movies-list">
            <ul className="list movies__container">
                {moviesList.map((movie) => (
                    <MoviesCard
                    key={movie.id}
                    movie={movie}
                    movieId={movie.id}
                    image={movie.image}
                    thumbnail={movie.thumbnail}
                    title={movie.nameRU}
                    duration={movie.duration}
                    isOwn={isOwn}
                    onSaveClick={onSaveClick}
                    pagetype={pagetype}
                    
                    /> 
                ))}
            </ul>
        </div>
    );
};

export default MoviesCardList;


/*
duration={movie.duration}


    const [filmsToRender, setFilmsToRender] = useState([]);

   function getFilmsToRender() {
        const searchData = JSON.parse(localStorage.getItem("searchResultMovies"));
console.log(searchData);
       const cardsInRow = 3;
       const multiplier = 4;
       const movies = searchData.slice(0, 12);
       setFilmsToRender(movies);
   };
    
*/