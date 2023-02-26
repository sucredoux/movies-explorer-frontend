/*import image from "../../images/movies__not_found.png";*/
import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, image, title, duration, onSaveClick, isOwn, pagetype }) {

    console.log(isOwn);
    

    const moviesPage = pagetype === "movies";
    const moviesOwnClassName = `${ isOwn ? "movies__save_type_like" : "movies__save_type_nolike" }`;
    const moviesSaveClassName = `button movies__save ${ moviesPage ?  `${moviesOwnClassName}` : "movies__save_type_delete" }`;


    function handleClick() {
        onSaveClick(movie);
    }

    return (
        <li className="movies__item">
            <img className="movies__preview" src={image} alt={title} />
            <div className="movies__about">
                <p className="movies__title">{title}</p>
                <p className="movies__length">{duration}</p>
            </div>
            <button onClick={handleClick} className={moviesSaveClassName}></button>
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