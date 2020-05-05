import React from "react";

const CharacCard = (props) => {

    const {card, addToDeck} = props

    return (
      <div
      className="card"
      key={props.card.id}
      onClick={addToDeck}
      >
        <div className="image">
          <img alt="oh no!" src={props.card.url} />
        </div>
      </div>
    )


}

export default CharacCard