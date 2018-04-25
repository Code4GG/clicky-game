import React from 'react';
import "../App.css"


const Clickitem = props => (
		<div className="clickitem" onClick = {() => props.shuffle(props.id)}>
		<img alt={props.name} src={props.image} 
		 />
		</div>		
	);


export default Clickitem;