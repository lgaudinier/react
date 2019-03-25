import React, { Component } from "react";

class Favorites extends Component {

  render() {
    return (
      <div>
        <div id="favorites">
          <h2>My Favorites ({this.props.favoritesList.length})</h2>
          <div className="helptext">Click on a favorite to remove it from the list</div>
          <ul>
            {this.props.favoritesList.map(item => (
              <li key={item} onClick={this.props.removeFavorite}>{item} </li>
            ))}
          </ul>
        </div>
      </div>

    )
  }
};

export default Favorites;