import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ pagetype }) {


    return (
        <section className={`search search_type_${pagetype}`}>
            <form 
            name="search-form"
            noValidate
            className="search__form">
                <input 
                type="text" 
                name="search"
                id="search-input"
                className="search__input input"
                placeholder="Фильм"
                />
            <button type="submit" aria-label="Поиск" name="search-submit"
            className="search__button button"></button>
            </form>
            <FilterCheckbox />
        </section>
    );
};

export default SearchForm;