import React from "react";

const CharacCard = (props) => {

    const {card, addToDeck, removeDeck, isUnitOrSpell, removeUnitOrSpell} = props

    function handleClick(){
      if (addToDeck){
        addToDeck(card)
        isUnitOrSpell(card)
      } else {
        removeDeck(card)
        removeUnitOrSpell(card)

      }
    }

    return (
      <div
      className="card"
      key={props.card.id}
      onClick={handleClick}
      >

          <img className="image" alt="oh no!" src={props.card.url} />

      </div>
    )


}

export default CharacCard