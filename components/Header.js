import React from "react";

const Header = () => (
    <header className="navbar navbar-primary navbar-top">
      	<div className="container">
        	<div className="row">
         		<div className="col-md-8 col-sm-6">
              		<a className="navbar-brand bac-header" href="index.html"></a>
            	</div>
            	<div className="col-md-4 col-sm-6 text-right oculto">
              		<h5 className="sub-brand"><img src={require("../public/css/bastrap3/bac-header-2.png")}/></h5>
            	</div>
        	</div>
      	</div>
    </header>
)

export default Header