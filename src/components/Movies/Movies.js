import MoreButton from "../MoreButton/MoreButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MobileHeader from '../MobileHeader/MobileHeader';
import "./Movies.css";
import Header from "../Header/Header";
import { useMediaQuery } from 'react-responsive';
import Footer from "../Footer/Footer";


function Movies({ pagetype, moviesList, onSaveClick, isOwn, loggedIn }) {


    const isMobile = useMediaQuery({
        query: '(max-width: 400px)'
      })


    return (
        <>{isMobile ? (
            <MobileHeader />
          ) : (
            <Header
              loggedIn={loggedIn}
              pagetype={pagetype} />
          )}
            <main className="movies">
           
                <SearchForm
                    pagetype={pagetype} />
                <MoviesCardList
                    pagetype={pagetype}
                    moviesList={moviesList}
                    onSaveClick={onSaveClick}
                    isOwn={isOwn} />
                <MoreButton />
            
            </main>
            <Footer
            pagetype={pagetype} />
            </>
    );
};

export default Movies;

/*
<main className="content">
            <div className="movies">
                <SearchForm
                    pagetype={pagetype} />
                <MoviesCardList
                    pagetype={pagetype}
                    moviesList={moviesList}
                    onSaveClick={onSaveClick}
                    isOwn={isOwn} />
                <MoreButton />
            </div>
            </main>
*/