//packs
import ReactTooltip from 'react-tooltip';

//assets
import Picture from "./assets/profile.png";
import Jss from "./assets/jss.png";
import React from "./assets/react.png";
import Html from "./assets/html.png";
import Redux from "./assets/redux.png";
import Css from "./assets/css.png";
import Panda from "./assets/panda.png";
import ColdMorning from './assets/coldmorning.png';
import Amabie from './assets/amabie.png';
import Internet from './assets/internet.png';
import Repositorio from './assets/repositorio.png';

//styles
import "./App.css";

function App() {
  return (    
    <div className="all-page">
      <ReactTooltip />
      <div className="top-div">
        <div className="information-ult">
          <img src={Picture} className="profile-pic" />
          <div className="aboutme ">
            <p className="inf-all">
              <span className='hola-spn'>Hola </span><span className='minombre-spn'>mi nombre es Alexis</span>
              <br></br>
              Soy un desarrollador front-end de la ciudad
              de Rosario. Actualmente me encuentro desarrollando con React y
              Redux aunque siempre con curiosidad y disposicion de aprender
              cosas nuevas.
            </p>

            <div className="aboutme2">
              <img className='len-hover' data-tip="React" width="40px" src={React} />
              <img className='len-hover' data-tip="JavaScript" width="40px" src={Jss} />
              <img className='len-hover'  data-tip="Redux" width="40px" src={Redux} />
              <img className='len-hover' data-tip="HTML" width="40px" src={Html} />
              <img className='len-hover' data-tip="CSS" width="40px" src={Css} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="proyectos">Proyectos</h1>
        <div className="card-page">
          <div className="card-page-img">
            <img width="220px" src={Panda} />
          </div>
          <div className="card-page-der">
            <div className="card-page-der-title">PopCorn´s Panda</div>
            <div className="card-page-der-container">
            <p className='text-page'>
            Sitio web enfocado en visualizacion de peliculas ,
            con descripcion e informacion sobre cada una de ellas.
            </p>
            <div className='btn'>
              <div className='ir'>
                <img width='20px' src={Internet}/>
                <span className='sitioweb'>Sitio web</span>
                 </div>
              <div className='git'>
              <img width='20px' src={Repositorio}/>
              <span className='ghithub'>Repositorio</span>
              </div>
            </div>
            
            </div>
          </div>
        </div>
        <div className="card-page">
          <div className="card-page-img">
            <img
              width="220px"
              src={ColdMorning}
            />
          </div>
          <div className="card-page-der">
            <div className="card-page-der-title">ColdMorning</div>
            <div className="card-page-der-container">
            <p className='text-page'>
            Proporciona datos meteorológicos globales,
            actuales, pronósticos y todo referido al clima..
            </p>
            <div className='btn'>
              <div className='ir'>
                <img width='20px' src={Internet}/>
                <span className='sitioweb'>Sitio web</span>
                 </div>
              <div className='git'>
              <img width='20px' src={Repositorio}/>
              <span className='ghithub'>Repositorio</span>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="card-page">
          <div className="card-page-img">
            <img
              width="220px"
              src={Amabie}
            />
          </div>
          <div className="card-page-der">
            <div className="card-page-der-title">Amabie COVID-19</div>
            <div className="card-page-der-container">
            <p className='text-page'>
                Sitio web enfocado en visualizacion de infectados
                dependiendo de localidad o pais.
                
            </p> 
            <div className='btn'>
              <div className='ir'>
                <img width='20px' src={Internet}/>
                <span className='sitioweb'>Sitio web</span>
                 </div>
              <div className='git'>
              <img width='20px' src={Repositorio}/>
              <span className='ghithub'>Repositorio</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
