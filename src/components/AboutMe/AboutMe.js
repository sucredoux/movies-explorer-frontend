import student__photo from "../../images/student__photo.png";
import "./AboutMe.css";

function AboutMe() {

    return (
        <section className="student">
            <h3 className="student__section">Студент</h3>
            <div className="student__block">
                <div className="student__block-info">
                    <div className="student__info">
                        <h2 className="student__name">Елена</h2>
                        <p className="student__description">Начинающий фронтенд-разработчик</p>
                        <p className="student__about">Более 20 лет я занималась маркетингом и коммуникациями для промышленных компаний.
                            За последние несколько лет количество проектов, связанных с диджитал и ИТ, которые я вела или в которых участвовала,
                             существенно выросло. Самостоятельно и управляя командой, я реализовывала внедрение и запуск платформ маркетинговой
                             автоматизации, разработку интерактивных сайтов и многочисленных лендингов, локализацию глобальных сайтов с учетом 
                            российской специфики работы с ПД, внедрение и конфигурирование маркетинговой части CRM, продвижение услуг и 
                            продукции компании через онлайн каналы. 
                            </p>
                            <p className="student__about">
                            Переехав во Францию в 2021 году по личным мотивам, я продолжила изучать инструменты диджитал маркетинга, а также 
                            прошла курс веб&#8209;разработки, чтобы углубить уже имеющиеся навыки, а также получить знание лексики, процессов и 
                            возможностей инструментов для достижения бизнес целей компаний.
                            </p>                            
                    </div>
                    <a href="https://github.com/sucredoux" target="_blank" rel="noreferrer" className="student__link link">Github</a>
                </div>
                <img className="student__photo" src={student__photo} alt="Фото студента" />
            </div>
        </section>
    );
};

export default AboutMe;
