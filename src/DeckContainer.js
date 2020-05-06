import React, { Component } from 'react'
import CharacCard from './components/CharacCard'

class DeckContainer extends Component {
    render (){
        console.log(this.props)
        return (
            <div className="deck-container">
                My Deck
                
                {this.props.decks.map(card => {
                return <CharacCard key={card.id} card={card} 
                removeDeck={this.props.removeDeck}
                />
                })}
             <div>
                {console.log(this.props.decks.length)}
            </div>
            </div> 
           
        );
    }
}

export default DeckContainer