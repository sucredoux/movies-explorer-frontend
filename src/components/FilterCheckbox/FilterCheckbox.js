import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox" className="checkbox__button"></input>
            <label className="checkbox__label">Короткометражки</label>
        </div>
    );
};

export default FilterCheckbox;