import { default as React, Component } from "react";

const MainContainerRow = (props) => (
	//var className = "col-md-"+this.props.sizeCol+" "+this.props.extraClass;
	<div className={"row"}>	
		{(Array.isArray(props.children) && props.children.length > 1)? 
			props.children.map((child, index) => {
				let className 
				if(props.sizeCols !== undefined && parseFloat(props.sizeCols[index])>0){
					className = "col-md-"+props.sizeCols[index]
				} else{
					className = "col-md-"+Math.round(12/props.children.length)
				}
				return <div className={className}>{child}</div>
			}):
			<div className={"col-md-12"}>
				{props.children}
			</div>

		}
	</div>
)

export default MainContainerRow