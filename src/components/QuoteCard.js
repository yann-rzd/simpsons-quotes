import React from 'react'
import './QuoteCard.css'

class QuoteCard extends React.Component {
  constructor() {
    super()
    this.state = {
      favorite : false
    }
  }

  event = () =>  {
    const newFavorite = !this.state.favorite;
    this.setState({ favorite: newFavorite });
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img
          src={this.props.image}
          alt={this.props.character}
        />
      <figcaption>
        <blockquote>
          {this.props.quote}
        </blockquote>
        <p>
          <cite>{this.props.character}</cite>
          <span className={this.state.favorite && 'is-favorite'} onClick={this.event}>&#9733;</span>
        </p>
      </figcaption>
      </figure>
    )
  }
}

export default QuoteCard