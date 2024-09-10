import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function WordSearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);

  //   function handleImages(response) {
  //     console.log(response);
  //   }

  function handleResponse(response) {
    console.log(response.data);
    setDefinition(response.data);
    // let apiKey = "182a2fb198a6etcbecec6a40a9o4bb3f";
    // let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    // axios
    //   .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
    //   .then(handleImages);
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
        <Result definition={definition} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
