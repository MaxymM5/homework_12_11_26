
import { Component } from "react";
import City from "./City";
import Book from "./Book";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "city"
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ page: "city" })}>
          Інформація про місто
        </button>

        <button onClick={() => this.setState({ page: "book" })}>
          Інформація про книгу
        </button>

        <hr />

        {this.state.page === "city" ? <City /> : <Book />}
      </div>
    );
  }
}

export default App;
