import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";


function SavedMovies({ pagetype, moviesList, onSaveClick, isOwn }) {
console.log(pagetype);
    return (
        <div className="movies">
            <SearchForm
                pagetype={pagetype} />
            <MoviesCardList
                pagetype={pagetype}
                moviesList={moviesList}
                onSaveClick={onSaveClick}
                isOwn={isOwn}
                />
            <MoreButton />
            <Preloader />
        </div>
    );
};

export default SavedMovies;