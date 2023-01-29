import logo from "./logo.svg";
import "./App.css";
import { Home, Plans, Navbar, Buttons } from "./components/Index";

function App() {
  return (
    <div className="App">
      <Buttons ButtonText="subscribe" />
      <Plans />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Snoop Report.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
