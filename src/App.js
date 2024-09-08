import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary </h1>
        <Dictionary />
        <footer>
          This project was created by Nataliia Opanasiuk and is{" "}
          <a
            href="https://github.com/NataliiaOpanasiuk/dictionary1"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
