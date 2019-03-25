
import React, { Component } from "react";

class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div id="submitform">
            <label>
              Search:
              <input type="text" value={this.props.searchValue} onChange={this.props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <div className="helptext">Enter a search term for a recommendations of related of movies, books, games, podcasts, music, tv shows, and authors </div>
          </div>
        </form>
      </div>

      )
    }
  };

export default Search;