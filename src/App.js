import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-primary">Weather App</h1>
        </header>
        <Weather />
        <footer>
          This is created by Amrutha Iyyapu and is{" "}
          <a
            href="https://github.com/AmruthaIyyapu/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced at Git-hub
          </a>
        </footer>
      </div>
    </div>
  );
}
