import React, { useState } from "react";
import axios from "axios";

export default function PhraseSearch(props) {
  const [loaded, setLoaded] = useState(false);
  const [keyfrase, setKeyfrase] = useState(props.defaultKeyfrase);
  const [answer, setAnswer] = useState(null);

  function displayAnswer(response) {
    setAnswer(response.data.answer);
  }

  function load() {
    setLoaded(true);
    handleFraseSubmit();
  }

  function explainPhrase() {
    let apiKey = "182a2fb198a6etcbecec6a40a9o4bb3f";
    let prompt = `Explain the meaning of the next phrase  ${keyfrase}`;
    let context =
      "Make sure to provide short answer. Do not repeat the phrase itself. Just say the meaning.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayAnswer);
  }

  function handleFraseSubmit(event) {
    // event.preventDefault();
    explainPhrase();
  }

  function handleKeyPhraseChange(event) {
    setKeyfrase(event.target.value);
  }

  if (loaded) {
    return (
      <div className="PhraseSearch">
        <section>
          <form onSubmit={handleFraseSubmit}>
            <input
              type="search"
              defaultValue={`raining cats and dogs`}
              onChange={handleKeyPhraseChange}
            />
            <input type="submit" value="Phrase" />
          </form>
          <small className="hint">i.e. Hit the road</small>
        </section>
        <p>{answer}</p>
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
