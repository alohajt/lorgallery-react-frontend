import React, { Component } from 'react'
import CharacCard from './components/CharacCard'

class DeckContainer extends Component {

    mapDecks = () => {
       return this.props.decks.map(card => {
            return <CharacCard key={card.id} card={card} 
            removeDeck={this.props.removeDeck} />
        })
    }

    render (){
        console.log(this.props)
        return (
            <div className="deck-container">
                My Deck
                <div className="deck-status"></div>
                    <p className="total">total  
                        {(this.props.decks.length) + "/40"}
                    </p>
                    <p>Unit  
                        {(this.props.unit.length)}
                    </p>
                    <p>Spell   
                        {(this.props.spell.length)}
                    </p>
                </div>
                <span>
                    {this.mapDecks()}
                </span>
            </div> 
           
        );
    }
}

export default DeckContainer