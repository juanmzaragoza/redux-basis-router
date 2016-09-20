import { default as React, Component } from "react";

const Main = (props) => (
	<main className="" role="main">
		<section className={"container"}>
    		{props.children}
    	</section>
	</main>
)

export default Main