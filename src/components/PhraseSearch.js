import React from "react";

export default function PhraseSearch() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("hello");
  }

  return (
    <div className="PhraseSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" />
        <input type="submit" value="Phrase" />
      </form>
    </div>
  );
}
