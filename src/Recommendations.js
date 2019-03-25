import React, { Component } from "react";

class Recommendations extends Component {

  render() {

    let buttonText = false;

    return (
      <div>
        <h2>{this.props.recommendationList.length} recommendations found </h2>
        {this.props.recommendationList.length === 0 ? <p className="emptyMessage">No recommendations found! Please enter in a new search or check your spelling.</p> : ""}
        <ul>
          {this.props.recommendationList.map(object => (
              <li key={object.Name}>
                buttonText = this.props.favoritesList.includes(object.Name)
                <button className="favoriteButton" value={object.Name} id={object.Name} onClick={this.props.handleClick}>
                  {buttonText ? 'Favorited!' : 'Add to Favorites'}
                </button>
                <h2>Name: {object.Name}</h2>
                <h3>Type: {object.Type.length > 0 ? object.Type : "No type available"}</h3>
                <div>
                  <h3>Description:</h3>
                  {object.wTeaser.length > 0 ? object.wTeaser : "No description available"}
                </div>
                {object.wUrl !== null ? <div className="wikiLink"><a href={object.wUrl} target="_blank" rel="noopener noreferrer" >Wikipedia Link</a></div> : ""}
              </li>
          ))}
        </ul>
      </div>

    )
  }
};

export default Recommendations;