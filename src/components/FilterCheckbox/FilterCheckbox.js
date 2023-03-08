import "./FilterCheckbox.css";

function FilterCheckbox(props) {
console.log(props.checked);
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input type="checkbox" id="checkbox" checked={props.checked} onChange={props.onClick} className="checkbox__invisible"></input>
                <span className="button checkbox__visible"></span>
            </label>
            <p className="checkbox__label-text">Короткометражки</p>
            
        </div>
    );
};

export default FilterCheckbox;
