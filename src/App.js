import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className=" text-center mb-4">Weather App</h1>
        </header>
        <Weather defaultCity="Boston" />
        <footer className="m-3">
          This is created by Amrutha Iyyapu and is{" "}
          <a
            href="https://github.com/AmruthaIyyapu/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            open sourced at Git-hub
          </a>
        </footer>
      </div>
    </div>
  );
}
