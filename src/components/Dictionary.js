import React, { useState } from "react";
import "../styles/Dictionary.css";
import WordSearch from "./WordSearch";
import PhraseSearch from "./PhraseSearch";

export default function Dictionary() {
  const [showWord, setShowWord] = useState(true); // This controls which component is shown

  function toggleComponents() {
    setShowWord((prev) => !prev); // Toggle between true and false
  }

  return (
    <div>
      <button onClick={toggleComponents}>{showWord ? "Phrase" : "Word"}</button>
      <div>
        {showWord ? (
          <WordSearch defaultKeyword="blur" />
        ) : (
          <PhraseSearch defaultKeyfrase="raining cats and dogs" />
        )}
      </div>
    </div>
  );
}
