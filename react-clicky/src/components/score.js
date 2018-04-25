import React from 'react';

const Scoreboard = props => (
	<p className="scoreboard">Score: {props.currentScore} | Top Score: {props.topScore}</p>
	);

export default Scoreboard;