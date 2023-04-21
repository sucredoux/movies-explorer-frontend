import { FormattedMessage } from "react-intl";
import { MIN_IN_HOUR } from "../../utils/config";
import "./MoviePage.css";
import "../AuthReminder/AuthReminder.css";


function MoviePage({ pagetype, loggedIn, currentLocale, onSwitch, item, isOpen, onMovieClose, onClick }) {

const durationHours = item.duration > MIN_IN_HOUR;
const newDuration = durationHours ? calculateDuration(item.duration) : setMinDuration(item.duration);

function calculateDuration(duration) {    
    const hours = Math.floor(duration / MIN_IN_HOUR);
    const min = duration - MIN_IN_HOUR;
    if (currentLocale === "ru-RU") {
        return `${hours + "ч " + min + "м"}`
    } else {
        return `${hours + "h " + min + "m"}`
    }      
}; 

function setMinDuration(duration) {
    if (currentLocale === "ru-RU") {
        return `${duration + "м"}`
    } else {
        return `${duration + "m"}`
    }
}

const title = currentLocale === "ru-RU" ? item.nameRU : item.nameEN;

function handleClosePage() {
    onMovieClose();
};

return (
    <> 
        <section className={`${isOpen ? "movie-page movie-page_opened" : "movie-page"}`}>
            <div className="movie-page__content">
                <div className="movie-page__image-block">
                    <a href={`${item.trailerLink}`} target="_blank" rel="noreferrer" className="link">
                        <img className="movie-page__image" src={item.image} alt={title} /> 
                    </a>
                </div>
                <div className="movie-page__info-block">
                    <h1 className="movie-page__title">{title}</h1>
                    <h2 className="movie-page__director">{item.director}</h2>
                    <p className="movie-page__info">{item.country}</p>
                    <p className="movie-page__info">{item.year}</p>
                    <p className="movie-page__info">{newDuration}</p>
                    <p className="movie-page__description">{item.description}</p>

                </div>
                <div className={`auth__reminder auth__reminder_type_${pagetype}`}>
                    <div className="auth__reminder-text">
                            <button onClick={handleClosePage} className={`link auth__reminder-link auth__reminder-link_type_${pagetype}`}>
                                <FormattedMessage id="error__back" /> 
                            </button>
                    </div>
                </div>   
            </div>
                    
        </section>
        </>
);
};

export default MoviePage;
