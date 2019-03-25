import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';

import './index.css';
import Favorites from "./Favorites";
import Recommendations from "./Recommendations";

class RecommendationApp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      recommendationList : [],
      searchValue: '',
      favoritesList: []
    };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleClick = this.handleClick.bind(this);
   this.removeFavorite = this.removeFavorite.bind(this);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
    console.log('Search term: ' + this.state.searchValue);
    event.preventDefault();
    this.loadRecommendations();
  }

  handleClick(event){
    let newFavorite = event.target.value;

    // Change button text to Favorited!
    document.getElementById(event.target.value).innerHTML="Favorited!";

    this.setState((state) => {
      state.favoritesList = state.favoritesList.concat([newFavorite]);

      //Remove duplicates in favoritesList
      let uniqueName = Array.from(new Set(state.favoritesList));
      state.favoritesList = uniqueName;

      return state;
    });
  }

  removeFavorite(event){
    let removedFavorite = event.target.innerText;
    let favoritesListCopy = this.state.favoritesList;
    let index = favoritesListCopy.indexOf(removedFavorite);

    if (document.getElementById(removedFavorite) !== null){
      // Change button text to Add to Favorites
      document.getElementById(removedFavorite).innerHTML="Add to Favorites";
    }

    if (index!== -1){
      favoritesListCopy.splice(index,1);
    }
    this.setState({favoritesList: favoritesListCopy});
  }


  loadRecommendations(){

    // Get around CORS, only for dev servers
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const id = "&k=332868-Recommen-H5YYPWRP";
    const parameters ="&verbose=1&wTeaser";
    const baseUrl = "https://tastedive.com/api/similar";
    const searchPhrase = "?q=" + this.state.searchValue.toLowerCase().replace(/ /g, '+');

    console.log("Search url:" + proxyurl + baseUrl + searchPhrase + id);

    // Override the rate limit with test url
    //const test = "https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction";

    //fetch(test)
    fetch(proxyurl + baseUrl + searchPhrase + id + parameters, ({
      'X-Requested-With': 'XMLHttpRequest'
    }))
      .then(response => response.json())
      .then(contents => {
        this.setState({
          recommendationList: contents.Similar.Results
        })

      })
      .catch(() => console.log("Can’t access url" ))
  }


  render(){

    let {recommendationList} = this.state;
    let buttonText = false;

    return (
      <div>
        <Search handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}/>
        <Recommendations {...this.state}
                         handleClick={this.handleClick.bind(this)} />
        <Favorites {...this.state}
                   removeFavorite={this.removeFavorite.bind(this)}/>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <h1>Recommendation App</h1>
    <RecommendationApp/>
  </div>,
  document.querySelector("#root")
);

