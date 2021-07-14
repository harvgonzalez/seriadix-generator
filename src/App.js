import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Serie from "./components/Serie";
import Generador from "./components/Generador";
function App() {

  // Cambia el estado del generador a true
  // const [ generador, guardarGenerador] = useState(false);

  // //Función para generar JSON
  // const actualizarGenerador = e => {
  //   e.preventDefault()
  //   if(!generador){
  //     guardarGenerador(true);
  //     return;
  //   }
  // Guarda los datos de la serie en un array de objetos
  const [ series, guardarSeries ] = useState([])

  //Función que crea la serie
  const crearSerie = serie => {
    guardarSeries([...series, serie])
  }

  // Función para eliminar serie
  const eliminarSerie = id => {
    const nuevaSerie = series.filter(serie => serie.id !== id)
    guardarSeries(nuevaSerie);
  }


  const titulo = series.length === 0 ? "No hay series": "Administra series"
  return (
    <Fragment>
      <h1>Generador JSON</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
               crearSerie={crearSerie}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {series.map(serie => (
              <Serie 
                key={serie.id}
                serie={serie}
                eliminarSerie={eliminarSerie}
              />
            ))}
          </div>
        </div>
        <div className="row">
          {/* <button
            onSubmit={actualizarGenerador}
          >Generar JSON</button>
          {generador ? <p>Hello</p> :null } */}
          <Generador 
            series={series}
          />
        </div>
          
        
      </div>
    </Fragment>
  );
}

export default App;
