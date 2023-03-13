import { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FormError from "../FormError/FormError";
import FormInput from "../FormInput/FormInput";
import "./SearchForm.css";

function SearchForm({ pagetype, onSearch, savedQuery, checked, onShortFilter }) {

    const [searchInput, setSearchInput] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    function handleChange(e) {
        setSearchInput(e.target.value);
        setErrorMessage("Нужно ввести ключевое слово");
        setIsValid(e.target.validity.valid);
        setHasError(!isValid);
        if (isValid === false) {
            setHasError(true);
            setIsFormValid(false);
        } else {
            setHasError(false);
            setIsFormValid(true);
            setErrorMessage("");
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchInput);
        localStorage.setItem("searchQuery", searchInput);
    };

    useEffect(() => {
        setSearchInput(savedQuery);
    }, [savedQuery]);
 
    return (
        <div className={`search search_type_${pagetype}`}>
           <form 
                name="search"
                id="form"
                noValidate
                onSubmit={handleSubmit}
                className="search__form"
                >
            <FormInput
                type="text" 
                name="search"
                id="search-input"
                placeholder="Фильм"
                formtype="search"
                pattern="[а-яА-ЯёЁa-zA-Z\s-"
                minLength="1"
                value={searchInput || ""}
                onChange={handleChange}
                hasError={hasError}
                isValid={isValid}/>
                <FormError
                    formtype="search"
                    hasError={hasError}
                    errorMessage={errorMessage}           
                />
            <button 
                type="submit"                 
                aria-label="Поиск" 
                name="search-submit"
                disabled={!isFormValid}
                className="button search__button"></button>
            </form>
            <FilterCheckbox
                onClick={onShortFilter}
                checked={checked} />
        </div>
    );
};

export default SearchForm;
