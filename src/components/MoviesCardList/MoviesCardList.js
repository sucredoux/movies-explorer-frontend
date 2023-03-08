import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ pagetype, moviesList, savedList, isOwn, isSaved, onSaveClick, onDeleteClick }) {
    
console.log(savedList);


    return (
        <div className="movies-list">
            <ul className="list movies__container">
                {moviesList.map((movie) => (
                    <MoviesCard
                    key={movie.movieId}
                    _id={movie._id}
                    movie={movie}
                    movieId={movie.movieId}
                    owner={movie.owner}
                    image={movie.image}
                    thumbnail={movie.thumbnail}
                    trailerLink={movie.trailerLink}
                    title={movie.nameRU}
                    duration={movie.duration}
                    isOwn={isOwn}
                    isSaved={isSaved}
                    onSaveClick={onSaveClick}
                    onDeleteClick={onDeleteClick}
                    pagetype={pagetype}
                    savedList={savedList}
                    
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