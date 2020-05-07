import React, { Component } from 'react';
import './App.css';
import CardCollection from './CardCollection'
import DeckContainer from './DeckContainer'

class App extends Component {
  state = {
    cards:[],
    decks:[],
    unit: [],
    spell: []
  }

  //click card to add to deck
  addToDeck = (card) => {
    if (!this.state.decks.find(charac => charac.id === card.id)){
      this.setState({decks: [...this.state.decks, card]})
    }

    const newCard = {newCard: card}

    // fetch('http://localhost:3000/images', {
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify(newCard)
    // })
  }

  // remove a card from a deck
  removeDeck = (card) => {
    let newDeck = this.state.decks.filter(charac => charac !== card)
    this.setState({decks:newDeck})
  }
  //display all cards
  componentDidMount(){
    fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(images => this.setState({cards:images}))
  }

  //pass down
  //if this card is unit type OR spell type
  isUnitOrSpell = (card) => {
    if (card.cardType === "Unit") {
        this.setState({unit:[...this.state.unit, card]})
    } else if (card.cardType === "Spell") {
      this.setState({spell: [...this.state.spell, card]})
    }
    }

  //  --------------------

  render(){
    return(
      <div>
        <title>LOR Gallery</title>
        <main>
          <h1>LOR Gallery</h1>
          <DeckContainer decks={this.state.decks} 
          unit={this.state.unit}
          spell={this.state.spell}
          removeDeck={this.removeDeck}/>
          <CardCollection cards={this.state.cards} 
          addToDeck={this.addToDeck}
          isUnitOrSpell={this.isUnitOrSpell}
          />
        </main>
      </div>
    )
  }
}

export default App;
