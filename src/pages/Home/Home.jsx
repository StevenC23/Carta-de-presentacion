import React from "react";
import "./Home.css";
import img from "../../utils/imgs/pngwave.png";

const Home = () => {
  return (
    <div className="Component-home">
      <div className="Personal-data">
        <h1 className="Steven">Hola ! </h1>
        <h1 className="Steven">Mi nombre es Steven</h1>
        <h2 className="Profesion">Ingeniero de software</h2>
        <h2 className="Universidad">
          Séptimo semestre de la universidad San Buenaventura De Cali
        </h2>
        <br />
        <p>Pagina creada con:</p>
        <br />
        <p>React / Html / Css / JavaScript</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Home;
