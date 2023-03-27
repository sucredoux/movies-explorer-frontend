import "./Promo.css";
import promo__image from "../../images/promo__image.svg";
import { FormattedMessage } from "react-intl";


function Promo() {

    return (
        <section className="promo">
                <div className="promo__text">
                    <h1 className="promo__title">
                       <FormattedMessage id="promo__title" values={{ dash: <>&#8209;</> }} />
                    </h1>
                    <p className="promo__paragraph">
                        <FormattedMessage id="promo__paragraph" />
                    </p>
                </div>
                <img className="promo__image rotation" src={promo__image} alt="Картинка мозга студента" />
        </section>
    );
};

export default Promo;
