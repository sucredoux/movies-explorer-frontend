import React from "react";
import "./MoviesCard.css";
import { MIN_IN_HOUR } from "../../utils/config.js";

function MoviesCard({ movie, movieId, image, trailerLink, title, titleEN, duration, onSaveClick, onDeleteClick, savedList, pagetype, currentLocale }) {

    const moviesPage = pagetype === "movies";
    const isActive = moviesPage ? savedList.some(item => item.movieId === movieId) : "";

    const iconButton = isActive 
        ? (<button onClick={handleDeleteClick} className="button movies__save movies__save_type_like"></button>)
        : (<button onClick={handleSaveClick} className="button movies__save movies__save_type_nolike"></button>);
       
    const durationHours = duration > MIN_IN_HOUR;
    const newDuration = durationHours ? calculateDuration(duration) : setMinDuration(duration);
    
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
   
    function handleSaveClick() {
        onSaveClick(movie);
    };

    function handleDeleteClick() {
        onDeleteClick(movie);
    };

    return (
        <li className="movies__item">
            <a href={`${trailerLink}`} target="_blank" rel="noreferrer" className="link">
                <img className="movies__preview" src={image} alt={title} /> 
            </a>            
            <div className="movies__about">
                <p className="movies__title">{currentLocale === "ru-RU" ? title : titleEN }</p>
                <p className="movies__length">{newDuration}</p>
            </div>
            {!moviesPage
            ? (<button onClick={handleDeleteClick} className="button movies__save movies__save_type_delete"></button>)
            : iconButton
            }            
        </li>        
    );
};

export default MoviesCard;
