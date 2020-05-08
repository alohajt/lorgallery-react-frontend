import React, { Component } from 'react'
import CharacCard from './components/CharacCard'

class DeckContainer extends Component {

    mapDecks = () => {
       return this.props.decks.map(card => {
            return <CharacCard key={card.id} card={card} 
            removeDeck={this.props.removeDeck} 
            removeUnitOrSpell={this.props.removeUnitOrSpell}/>
        })
    }

    render (){
        console.log(this.props)
        return (
            <div className="deck-container">
                <h2>My Deck</h2>
                <div className="deck-staus">
                <p>Total {(this.props.decks.length) + "/40"}</p>
                <p>Unit {(this.props.unit.length)}</p>
                <p>Spell {(this.props.spell.length)}</p>
                </div>
                <div className="my-deck">
                    {this.mapDecks()}
                </div>
                
            </div> 
           
        );
    }
}

export default DeckContainer