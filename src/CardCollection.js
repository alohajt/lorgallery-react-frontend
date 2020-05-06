import React, {Component} from 'react'
import CharacCard from './components/CharacCard'

class CardCollection extends Component {

    render() {
        return (
        <div className="card-collection">
            all cards
            {
                this.props.cards.map(card => {
                return <CharacCard key={card.id} card={card} 
                addToDeck={this.props.addToDeck}
                />
                })
            }
        </div>
    )
    }
}

export default CardCollection