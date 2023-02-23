import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ pagetype, moviesList, isOwn, onSaveClick }) {

    return (
        <section className="movies-list">
            <div className="movies__container">
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
            </div>
        </section>
    );
};

export default MoviesCardList;
