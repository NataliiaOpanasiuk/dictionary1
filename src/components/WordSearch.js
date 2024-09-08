import React, { useState } from "react";
import axios from "axios";

export default function WordSearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "182a2fb198a6etcbecec6a40a9o4bb3f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    // console.log(keyword);
  }

  if (loaded) {
    return (
      <div className="WordSearch">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter the word"
              defaultValue={props.defaultKeyword}
              autoFocus="on"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Word" />
          </form>
          <small className="hint">i.e. paris, wine, yoga, coding</small>
        </section>
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
