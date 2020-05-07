import React from "react";

const CharacCard = (props) => {

    const {card, addToDeck, removeDeck, isUnitOrSpell} = props

    function handleClick(){
      if (addToDeck){
        addToDeck(card)
        isUnitOrSpell(card)
      } else {
        removeDeck(card)
      }
    }

    return (
      <div
      className="card"
      key={props.card.id}
      onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={props.card.url} />
        </div>
      </div>
    )


}

export default CharacCard