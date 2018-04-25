import React from 'react';


const Guesstitle = props => (
		<p style={{color: props.color}} className="guessed">{props.message}</p>
	);

export default Guesstitle;