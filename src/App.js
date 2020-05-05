import React, { Component } from 'react';
import './App.css';
import CardCollection from './CardCollection'
import DeckContainer from './DeckContainer'

class App extends Component {
  state = {
    cards:[],
    decks:[]
  }

  //click card to add to deck
  addToDeck = (card) => {
    if (!this.state.decks.find(charac => charac.id === card.id)){
      this.setState({decks: [...this.state.decks, card]})
    }

    const newCard = {newCard: card}

    fetch('http://localhost:3000/images', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newCard)
    })
  }

  //display all cards
  componentDidMount(){
    fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(images => this.setState({images}))
  }

  render(){
    return(
      <main>
        <h1>LOR Gallery</h1>
        <DeckContainer deck={this.state.decks} />
        <CardCollection cards={this.state.cards} addToDeck={this.addToDeck}/>
      </main>
    )
  }
}

export default App;
