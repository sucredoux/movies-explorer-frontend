import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input type="checkbox" id="checkbox" className="checkbox__invisible"></input>
                <span className="button checkbox__visible"></span>
            </label>
            <p className="checkbox__label-text">Короткометражки</p>
            
        </div>
    );
};

export default FilterCheckbox;

