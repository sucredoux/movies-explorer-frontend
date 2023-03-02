/*import image from "../../images/movies__not_found.png";*/
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie, image, thumbnail, title, duration, onSaveClick, isOwn, selectedMovie, pagetype }) {

    const currentUser = React.useContext(CurrentUserContext);

    const moviesPage = pagetype === "movies";
    const moviesOwnClassName = `${ isOwn ? "movies__save_type_like" : "movies__save_type_nolike" }`;
    const moviesSaveClassName = `button movies__save ${ moviesPage ?  `${moviesOwnClassName}` : "movies__save_type_delete" }`;


    const newDuration = `${duration + "м"}`
    
   

    function handleSaveClick() {
        onSaveClick(movie);
    };

    return (
        <li className="movies__item">
            <img className="movies__preview" src={image} alt={title} />
            <div className="movies__about">
                <p className="movies__title">{title}</p>
                <p className="movies__length">{newDuration}</p>
            </div>
            <button onClick={handleSaveClick} className={moviesSaveClassName}></button>
        </li>
        
    );
};

export default MoviesCard;


/*
<div className="movies__item">
            <img className="movies__preview" src={image} alt="Фильм" />
            <div className="movies__about">
                <p className="movies__title">Название фильма: название фильма - название фильма для названия фильма</p>
                <p className="movies__length">1ч35мин</p>
            </div>
            <div className={moviesSaveClassName}></div>
        </div>
        <div className="movies__item">
            <img className="movies__preview" src={image} alt="Фильм" />
            <div className="movies__about">
                <p className="movies__title">Название фильма: название фильма - название фильма для названия фильма</p>
                <p className="movies__length">1ч35мин</p>
            </div>
            <div className={moviesSaveClassName}></div>
        </div>
        <div className="movies__item">
            <img className="movies__preview" src={image} alt="Фильм" />
            <div className="movies__about">
                <p className="movies__title">Название фильма: название фильма - название фильма для названия фильма</p>
                <p className="movies__length">1ч35мин</p>
            </div>
            <div className={moviesSaveClassName}></div>
        </div>
        */


          /*  function convertDuration() {
        moviesList.forEach((movie) => {*/
      /*  const newDuration = (duration) => {
                if (duration > 59) {
              /*  const hours = Math.floor(duration / 60);
                const min = duration / 60;
                return `${hours + "ч " + min + "м"}`;*/
            /*    return "a lot";
            } else {
                return `${duration + "м"}`;
            }
        }; */
      /*  const newDuration = () => {
            return `${duration + "м"}`;
        } */

        /*
    console.log(duration);
    console.log(newDuration);
*/