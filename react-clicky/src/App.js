import React, { Component } from 'react';
import logo from './logo.svg';
import Scoreboard from './components/score.js';
import Guesstitle from './components/guesstitle.js';
import Clickitem from './components/clickitem.js';
import cards from './cards.json';
import './App.css';

// let message = 'Click an Item to Begin';

class App extends Component {

   state = {
    cards,
    topScore: 0,
    currentScore: 0,
    message: 'Click an Item to Begin',
    clicked: []
  }

  shuffle = id => {

    let score = this.state.topScore;
    let gameOn = false;

    this.state.clicked.forEach(item => {

      if (this.state.currentScore >= this.state.topScore){
        score = this.state.topScore + 1
      }

      if (id === item){
        this.setState({
          currentScore: 0,
          clicked: [],
          message: 'Doh! you guessed incorrectly',
          color: 'red'
         })
          gameOn = true
        }
      })

      if (!gameOn){
        this.setState({
          currentScore: this.state.currentScore + 1,
          cards: this.state.cards.sort(function(a,b){return 0.5 - Math.random()}),
          clicked: [...this.state.clicked, id],
          topScore: score,
          message: 'Awesome you guessed correctly!',
          color: 'yellow'
        })
      }

      if (this.state.currentScore === 12){
        this.setState({
          message: 'Wow you have the memory of an elephant!',
          color: 'yellow'
        })
      }
  }

        

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
        <li>
        <img src={logo} className="App-logo titleBar brand" alt="logo" />
        <h1 className="titleBar brand">Clicky Game</h1>
        </li>
        <li>
        <Scoreboard 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        </li>
        <li>
        <Guesstitle color={this.state.color} message={this.state.message} />
        </li>
        </ul>
        </header>
        <h1 className="Headline">
          <p className="title">React Clicky Game!</p>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </h1>
        <main className="container">
         {this.state.cards.map((cards,i) => (
          <Clickitem
            shuffle={this.shuffle}
            key={i}
            id={cards.id}
            image={cards.image}
            alt={cards.name}
          />
        ))}
        </main>
        <footer className="footer">
          Copyright 2018 &copy;
        </footer>
      </div>
    );
  }
}

export default App;
