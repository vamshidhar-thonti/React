import { Component } from "react";

import "./App.css";

class App extends Component {
  // Runs first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  // Runs Third, once the initial render is successful and the component gets mounted, componentDidMount() gets invoked. Any initial API calls should be made here to show the initial data on the UI to user.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  // If the function content remains same and doesn't change, its better to define it rather than using the anonymous callback function. This way the app performs well.
  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  // Runs second, gets rendered with the initial state object and mounts the component.
  // Also runs whenever there is an update in the state object.
  render() {
    // De-structuring the variables to make the code look clean and easy to read.
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            // defining key is must to ensure react can identify the element uniquely
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
