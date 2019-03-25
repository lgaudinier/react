## React Recommendation Application

https://lgaudinier.github.io/react/

### Instructions - How to Get The App Up and Running

Assumptions:
- You have knowledge of the terminal and you have node.js installed on your computer (you can download it here: https://nodejs.org/en/download/). There is a copy of the code being hosted at GitHub here: https://lgaudinier.github.io/react/ if your local does not cooperate.

Steps:
1. Navigate to the GitHub repository (https://github.com/autodesk-wpe-coding-challenge) and switch to the transaction-ui-lindsay branch.
2. Clone the project onto your computer (You may also download the ZIP).
3. cd into the project (you should ls and see README.md, package.json, yarn.lock, build, public, package-lock.json, and src).
4. Run npm install in your terminal.
5. Run npm start in your terminal.
6. Your terminal should open up the application in a browser automatically. If this does not happen, your terminal also gives you two links (Local, On Your Network) to enter in your browser to use the app. 

### Instructions - How to Use the App
- Enter a movie, book, game, podcast, music, tv show, or author into the search bar and click submit.
- The App will return recommendations of related terms.
- You can click on the Add to Favorites to add that item to your My Favorites list. After you have added a favorite, the button will change to let you know that you Favorited! that item. If a favorited item shows up in multiple searches, the button will retain its Favorited! text.
- If you want to remove an item from your My Favorites list, simply click on it.
- Note: refreshing the page will lose your My Favorites list. 

### What features would you like to add to this application? Please write two user stories for your proposed features. 

**1. Saved Favorite List**

As a user running the application, I would like to save My Favorites list so when I revisit the application again, I can reload My Favorites list from a previous session.

Acceptance Criteria:
- User is able to save their favorite list.
- When the user returns, after closing the application, they can see their previously saved favorite list.

**2. Autocomplete Suggestions in Search**

As a user running the application, I would like to have the search bar suggest autocompleted words based on what I am currently typing. This will help me with possible spelling issues and show me more possible searches I can run.

Acceptance Criteria:
- When user begins typing into the search bar, a dropdown of autocompleted suggested searches is shown.
- The user can select one of the autocompleted suggestions.
- The user can still enter and search their own text in the search bar.

### What would you have done differently if you had additional time to complete this project?
- Include validation on user input on search.
- Incorporate much more styling, including a flushed out mobile design. Leverage SASS in the project. 
- Fix an edge case bug: if a recommended item has the same name as another recommended item (book vs. movie) then the My Favorites list can differentiate.
- Incorporate types into the search query.
- Filter the recommendations by type.
- Include the ability to reorder favorites.
- Look at different recommendation APIs and compare them, possibly use a different API with the app.

### If you had the opportunity to go back in time and meet a historical figure, who would it be and why?

If I could go back in time, I would love to meet Kurt Vonnegut. He's one of my absolute favorite authors and seems like a very interesting person to invite to a dinner party. I would love to just sit and listen to him talk.
 
On a practical note, if I am going back in time there's no guarantee I'm coming back to the present. I would rather go back to modern times, and Kurt Vonnegut only passed away in 2007.
