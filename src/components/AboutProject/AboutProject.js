import "./AboutProject.css";

function AboutProject() {

    return (
        <section id="project" className="project">
            <h3 className="project__section">О проекте</h3>
            <ul className="project__description list">
                <li className="project__column">
                    <h4 className="project__column-title">Дипломный проект включал 5 этапов</h4>
                    <p className="project__column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="project__column">
                    <h4 className="project__column-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="project__column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="project__timeline list">
                <li className="project__period">
                    <p className="project__period-length project__period-length_type_first">1 неделя</p>
                    <p className="project__period-subject">Back-end</p>
                </li>
                <li className="project__period">
                    <p className="project__period-length project__period-length_type_last">4 недели</p>
                    <p className="project__period-subject">Front-end</p>
                </li>
            </ul>
        </section>
    );
};

export default AboutProject;
