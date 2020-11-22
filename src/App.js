//packs
import ReactTooltip from "react-tooltip";

//assets
import Picture from "./assets/profile.png";
import Jss from "./assets/jss.png";
import React from "./assets/react.png";
import Html from "./assets/html.png";
import Redux from "./assets/redux.png";
import Css from "./assets/css.png";
import Panda from "./assets/panda.png";
import ColdMorning from "./assets/coldmorning.png";
import Amabie from "./assets/amabie.png";
import Internet from "./assets/internet.png";
import Repositorio from "./assets/repositorio.png";

//styles
import "./styles.scss";

function App() {
  const projects = [
    {
      title: "PopCorns Panda",
      description:
        "Sitio web enfocado en visualizacion de peliculas,con descripcion e informacion sobre cada una de ellas.",
      image: Panda,
    },
    {
      title: "ColdMorning",
      description:
        "Proporciona datos meteorológicos globales, actuales, pronósticos y todo referido al clima...",
      image: ColdMorning,
    },
    {
      title: "Amabie COVID-19",
      description:
        "Sitio web enfocado en visualizacion de infectados dependiendo de localidad o pais.",
      image: Amabie,
    },
  ];

  return (
    <div className="page">
      <ReactTooltip />
      <div className="page__top">
        <div className="page__top__information">
          <img src={Picture} className="page__top__information__profile" />
          <div className="page__top__information__aboutme">
            <p className="page__top__information__aboutme__info">
              <span className="page__top__information__aboutme__info__hola-spn">
                Hola 
              </span>
              <span className="page__top__information__aboutme__info__minombre-spn">
                mi nombre es Alexis
              </span>
              <br></br>
              Soy un desarrollador front-end de la ciudad de Rosario.
              Actualmente me encuentro desarrollando con React y Redux aunque
              siempre con curiosidad y disposicion de aprender cosas nuevas.
            </p>

            <div className="page__top__information__aboutme2">
              <img
                className="page__top__information__aboutme2__len-hover"
                data-tip="React"
                width="40px"
                src={React}
              />
              <img
                className="page__top__information__aboutme2__len-hover"
                data-tip="JavaScript"
                width="40px"
                src={Jss}
              />
              <img
                className="page__top__information__aboutme2__len-hover"
                data-tip="Redux"
                width="40px"
                src={Redux}
              />
              <img
                className="page__top__information__aboutme2__len-hover"
                data-tip="HTML"
                width="40px"
                src={Html}
              />
              <img
                className="page__top__information__aboutme2__len-hover"
                data-tip="CSS"
                width="40px"
                src={Css}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="page__container">
        <h1 className="page__container__title">Proyectos</h1>
        {projects.map((project) => (
          <div className="page__container__card">
            <div className="page__container__card__img">
              <img className="page__container__card__img__cover" src={project.image} />
            </div>
            <div className="page__container__card__der">
              <div className="page__container__card__der__title">
                {project.title}
              </div>
              <div className="page__container__card__der__container">
                <p className="page__container__card__der__description">
                  {project.description}
                </p>
                <div className="page__container__card__der__btn">
                  <div className="page__container__card__der__ir">
                    <img
                      className="page__container__card__der__btn__iconos"
                     
                      src={Internet}
                    />
                    <span className="page__container__card__der__sitioweb">
                      Sitio web
                    </span>
                  </div>
                  <div className="page__container__card__der__git">
                    <img
                      className="page__container__card__der__btn__iconos"
                      src={Repositorio}
                    />
                    <span className="page__container__card__der__btn__iconos">Repositorio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
