import { FormattedMessage } from "react-intl";
import "./MoreButton.css";

function MoreButton({ noMore, onAddMore, pagetype }) {

    function handleClick(e) {
        e.preventDefault();
        onAddMore();
    };
    
    return (
        <div className={`more more_type_${pagetype} ${!noMore ? "" : "more_type_disabled"}`}>
            <button
            type="button"
            aria-label="Ещё"
            className={`more__button button ${noMore ? "more__button_type_disabled" : ""}`}
            onClick={handleClick}
            ><FormattedMessage id="more__button" />
            </button>
        </div>
    );
};

export default MoreButton;
