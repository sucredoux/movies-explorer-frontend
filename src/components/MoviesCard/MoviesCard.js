import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, movieId, image, trailerLink, title, duration, onSaveClick, onDeleteClick, owner, savedList, pagetype }) {

    const moviesPage = pagetype === "movies";
    const isActive = moviesPage ? savedList.some(item => item.movieId === movieId) : "";

    const iconButton = isActive 
        ? (<button onClick={handleDeleteClick} className="button movies__save movies__save_type_like"></button>)
        : (<button onClick={handleSaveClick} className="button movies__save movies__save_type_nolike"></button>);
       
    const durationHours = duration > 60;
    const newDuration = durationHours ? calculateDuration(durationHours) : `${duration + "м"}`;
    
    function calculateDuration(durationHours) {    
        const hours = Math.floor(duration / 60);
        const min = duration - 60;
        return `${hours + "ч " + min + "м"}`;      
    }; 
   
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
                <p className="movies__title">{title}</p>
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
