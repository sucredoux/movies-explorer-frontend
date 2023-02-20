import "./MoreButton.css";

function MoreButton({ pagetype }) {
    return (
        <section className={`more more_type_${pagetype}`}>
            <button
            type="button"
            aria-label="Ещё"
            className={`more__button button more__button_type_${pagetype}`}
            >Ещё</button>

        </section>
    );
};

export default MoreButton;