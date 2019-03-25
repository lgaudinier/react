
import React, { Component } from "react";

class Recommendations extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let buttonText = false;

    return (
      <div>
        <ul>
          {this.props.recommendationList.map(object => (
            buttonText = this.props.favoritesList.includes(object.Name),
              <li key={object.Name}>
                <button className="favoriteButton" value={object.Name} id={object.Name} onClick={this.props.handleClick}>
                  {buttonText ? 'Favorited!' : 'Add to Favorites'}
                </button>
                <h2>Name: {object.Name}</h2>
                <h3>Type: {object.Type}</h3>
                <div><h3>Description:</h3> {object.wTeaser}</div>
              </li>
          ))}

        </ul>
      </div>

    )
  }
};

export default Recommendations;