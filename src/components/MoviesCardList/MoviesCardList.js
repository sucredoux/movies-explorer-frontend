import MoviesCard from "../MoviesCard/MoviesCard";
import ResError from "../ResError/ResError";
import "./MoviesCardList.css";

function MoviesCardList({ pagetype, moviesList, savedList, isOwn, isSaved, formtype, resError, hasResError, searchError, hasSearchError, onSaveClick, onDeleteClick, currentLocale }) {
    
    return (
        <>
         {(hasResError || hasSearchError) ?
            (
                <ResError 
                formtype={formtype}
                resError={resError}
                hasResError={hasResError}
                searchError={searchError}
                hasSearchError={hasSearchError} /> 
            ) : (
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
                            titleEN={movie.nameEN}
                            duration={movie.duration}
                            isOwn={isOwn}
                            isSaved={isSaved}
                            onSaveClick={onSaveClick}
                            onDeleteClick={onDeleteClick}
                            pagetype={pagetype}
                            savedList={savedList}
                            currentLocale={currentLocale} /> 
                        ))}
                    </ul>
                </div>
            )}
        </>        
    );
};

export default MoviesCardList;
