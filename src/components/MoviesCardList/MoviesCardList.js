import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ pagetype, moviesList, isOwn, onSaveClick }) {

    return (
        <div className="movies-list">
            <ul className="list movies__container">
                {moviesList.map((movie) => (
                    <MoviesCard
                    key={movie._id}
                    movie={movie}
                    image={movie.image}
                    title={movie.title}
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
