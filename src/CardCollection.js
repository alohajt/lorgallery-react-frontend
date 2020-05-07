import React, {Component} from 'react'
import CharacCard from './components/CharacCard'

class CardCollection extends Component {

    


    render() {
        return (
        <div>
        <h2>all cards</h2>    
        <div className="card-collection">
            
            {
                this.props.cards.map(card => {
                return <CharacCard key={card.id} card={card} 
                addToDeck={this.props.addToDeck}
                isUnitOrSpell={this.props.isUnitOrSpell}
                />
                })
            }
        </div>
        </div>
    )
    }
}

export default CardCollection