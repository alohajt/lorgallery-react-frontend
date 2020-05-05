import React, { Component } from 'react'
import CharacCard from './components/CharacCard'

class DeckContainer extends Component {
    render (){
        return (
            <div className="deck-container">
                My Deck
                {this.props.deck.map(card => {
                return <CharacCard key={card.id} card={card} 
                />
                })}
            </div> 
        );
    }
}

export default DeckContainer