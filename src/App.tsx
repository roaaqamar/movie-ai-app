import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Header />

      <main className="main">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <p className="main__placeholder">
          Search for movies — coming in the next step.
        </p>
      </main>
    </div>
  );
}

export default App;