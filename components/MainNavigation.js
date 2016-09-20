import { default as React, Component } from "react";
import { Link } from 'react-router'

//import InputText from "./InputText";
//import ToggleGraph from "../containers/ToggleGraph";
//import GetDataFromAPI from "../containers/GetDataFromAPI";

const MainNavigation = () => (
	<nav className="navbar navbar-default" role="navigation">
      	<div className="container">
        	<div className="row">
          		<div className="navbar-header">
            		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              			<span className="sr-only">Menú</span>
		              	<span className="icon-bar"></span>
	            	  	<span className="icon-bar"></span>
		              	<span className="icon-bar"></span>
            		</button>
            		<a className="navbar-brand" href="#" title="Participación Ciudadana">Participación Ciudadana</a>
          		</div>
          		<div className="collapse navbar-collapse" id="main-nav">
            		<ul className="nav navbar-nav navbar-right">
              			<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Inicio</Link></li>
              			<li><Link to="/obras" activeClassName="active">Obras</Link></li>
		              	<li><a href="proyectos.html">Proyectos</a></li>
		              	<li><a href="#">Voluntariado</a></li>
		              	<li><a href="Horacio_Diego_y_Vos.html">Horacio, Diego y Vos</a></li>
		              	<li><a href="contacto.html">Contacto</a></li>
					  	<li className="active-BA">
					  		<a href="#">
					  			Entrar a <img src={require("../public/css/bastrap3/ba-btn.png")} className="glyphicon glyphicon-ba" />
					  		</a>
					  	</li>
            		</ul>
          		</div>
        	</div>
      	</div>
    </nav>

)

export default MainNavigation