/*import image from "../../images/movies__not_found.png";*/
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie, movieId, _id, image, thumbnail, trailerLink, title, duration, onSaveClick, onDeleteClick, owner, savedList, isOwn, selectedMovie, pagetype }) {

  /*  const [isActive, setIsActive] = useState(false);*/
    const currentUser = React.useContext(CurrentUserContext);
   
    const isSaved = owner === currentUser._id;

    const moviesPage = pagetype === "movies";
   /* const moviesSaveIconClassName = `button movies__save ${ isSaved ? "movies__save_type_like" : "movies__save_type_nolike" }`;
    const moviesDeleteIconClassName = "button movies__save movies__save_type_delete";*/
   /*const moviesIconClassName = `button movies__save ${ moviesPage ?  `${moviesSavedClassName}` : "movies__save_type_delete" }`;*/
   const isActive = moviesPage ? savedList.some(item => item.movieId === movieId) : "";

    const iconButton = isActive 
        ? (<button onClick={handleDeleteClick} className="button movies__save movies__save_type_like"></button>)
        : (<button onClick={handleSaveClick} className="button movies__save movies__save_type_nolike"></button>)
       

    const durationHours = duration > 60;
   /* const durationShort = duration < 41;*/
    const newDuration = durationHours ? calculateDuration(durationHours) : `${duration + "м"}`;
    
   function calculateDuration(durationHours) {    
        const hours = Math.floor(duration / 60);
        const min = duration - 60;
        return `${hours + "ч " + min + "м"}`;      
    }; 
   
   
     /*   setIsActive(true);*/
    
       
  /* console.log(iconActive);
/*
const isSaved = owner.some(owner => owner === currentUser._id);
console.log(isSaved);
isActive 
            ? onDeleteClick(movie) 
            : 

            (`${    }`)
*/


    function handleSaveClick() {
        console.log(movie);
        onSaveClick(movie);
      /*  setIsActive(true);*/
    };

    function handleDeleteClick() {
        console.log(movie);
        onDeleteClick(movie);
      /*  setIsActive(false);*/
    }

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


/*
<a href="https://github.com/sucredoux/react-mesto-auth" target="_blank" rel="noreferrer" className="portfolio__website-link link">
                        <p className="portfolio__website-name">Одностраничное приложение</p>
                        <img className="portfolio__link-arrow" src={portfolio__link} alt="Переход на одностраничное приложение"/>
                    </a>






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