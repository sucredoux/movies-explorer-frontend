import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FormInput from "../FormInput/FormInput";
import "./SearchForm.css";

function SearchForm({ pagetype, onChange, onSubmit }) {


    return (
        <div className={`search search_type_${pagetype}`}>
           <form 
                name="search"
                noValidate
                className="search__form">
            <FormInput
                type="text" 
                name="search"
                id="search-input"
                className="input search__input"
                placeholder="Фильм"
                formtype="search" />
            <button type="submit" aria-label="Поиск" name="search-submit"
                className="button search__button"></button>
            </form>
            <FilterCheckbox />
        </div>
    );
};

export default SearchForm;
