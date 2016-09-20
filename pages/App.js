import React from "react";

import Header from "../components/Header";
//import Main from "../components/Main";
import MainNavigation from "../components/MainNavigation";
//import MainContainerRow from "../components/MainContainerRow";
import Footer from "../components/Footer";
//import ShowAlertExampleButton from "../containers/ShowAlertExampleButton";

const App = (props) => (
    <div>
        <Header />
        <MainNavigation />
        
        {props.children || <Home/>}

        <Footer />
    </div>
)

export default App