import "./MoreButton.css";

function MoreButton({ pagetype }) {
    return (
        <div className={`more more_type_${pagetype}`}>
            <button
            type="button"
            aria-label="Ещё"
            className={`more__button button more__button_type_${pagetype}`}
            >Ещё</button>

        </div>
    );
};

export default MoreButton;