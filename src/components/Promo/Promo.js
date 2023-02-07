import "./Promo.css";
import promo__image from "../../images/promo__image.svg";

function Promo() {

    return (
        <section className="promo">
            <div className="promo__intro">
                <div className="promo__text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-&nbsp;разработки.</h1>
                    <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <img className="promo__image rotation" src={promo__image} alt="Картинка мозга студента" />
            </div>
            <button className="promo__button button">Узнать больше</button>
        </section>
    );
};

export default Promo;