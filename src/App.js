import React, { Component } from 'react';
import './App.css';
import CardCollection from './CardCollection'
import DeckContainer from './DeckContainer'
// import SideBar from './components/SideBar'
import DropdownBar from './components/DropdownBar'

class App extends Component {
  state = {
    cards:[],
    decks:[],
    unit: [],
    spell: []
  }



   
  
  //click card to add to deck <= 3 same cards
  addToDeck = (card) => {
  this.setState({decks: [...this.state.decks, card]})

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
    .then(images => images.sort((a,b)=> a.cost-b.cost))
    .then(images=>this.setState({cards:images}))
      
  }

  //pass down
  //if this card is unit type OR spell type
  isUnitOrSpell = (card) => {
    if ((card.cardType === "Unit") ) {
      // && (!this.state.unit.find(charac => charac.id === card.id)
        this.setState({unit:[...this.state.unit, card]})
    } else if (card.cardType === "Spell") {
      this.setState({spell: [...this.state.spell, card]})
    }}

  removeUnitOrSpell = (card) => {
    if ((card.cardType === "Unit") ){
      let newUnitDeck = this.state.unit.filter(charac => charac !== card)
      this.setState({unit:newUnitDeck})
    } else if (card.cardType === "Spell") {
      let newSpellDeck = this.state.spell.filter(charac => charac !== card)
      this.setState({spell:newSpellDeck})
    }
  }
  //  --------------------

  filterByRegion = (card) => {
    console.log(card)
    // cards.filter(card => {
    //   // if (card.region !== "Demacia"){
    //   //   const removeCard = document.getElementById(`${card.id}`)
    //   //   removeCard.style.display = "none"    
    //   console.log(card)
    //   }
    // )
  }
  

  render(){
    return(
      <div >
        <title>LOR Gallery </title>
        <main className="left-side">
          <h1>LOR Gallery & Deck Builder</h1>
          <DeckContainer decks={this.state.decks} 
          unit={this.state.unit}
          spell={this.state.spell}
          removeDeck={this.removeDeck}
          removeUnitOrSpell={this.removeUnitOrSpell} />
          
          <CardCollection cards={this.state.cards} 
          addToDeck={this.addToDeck}
          isUnitOrSpell={this.isUnitOrSpell}/>
          <DropdownBar filterByRegion={this.filterByRegion}/>
        </main>
      </div>
    )
  }
}

export default App;
