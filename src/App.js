import "./App.css";
import Category from "./components/Category/Category";
import Joke from "./components/Joke/Joke";

function App() {
  return (
    <section className="App">
      <div className="jokeContainer">
        <Category />
        <Joke />
      </div>
    </section>
  );
}

export default App;
