import student__photo from "../../images/student__photo.png";
import "./AboutMe.css";

function AboutMe() {

    return (
        <section className="student">
            <h3 className="student__section">Студент</h3>
            <div className="student__block">
                <div className="student__block-info">
                    <div className="student__info">
                        <h2 className="student__name">Виталий</h2>
                        <p className="student__description">Фронтенд-разработчик, 30 лет</p>
                        <p className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, 
                            начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.</p>
                    </div>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="student__link link">Github</a>
                </div>
                <img className="student__photo" src={student__photo} alt="Фото студента" />
            </div>
        </section>
    );
};

export default AboutMe;
