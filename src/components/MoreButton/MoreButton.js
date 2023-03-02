import "./MoreButton.css";

function MoreButton({ noMore, onAddMore }) {

    function handleClick(e) {
        e.preventDefault();
        onAddMore();
    }        
    
    return (
        <div className={!noMore ? "more" : "more more_type_disabled"}>
            <button
            type="button"
            aria-label="Ещё"
            className={!noMore ? "more__button button" :  "more__button button more__button_type_disabled"}
            onClick={handleClick}
            >Ещё</button>

        </div>
    );
};

export default MoreButton;