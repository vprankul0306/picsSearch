import { useState } from "react";
import "./SearchBar.css";

// eslint-disable-next-line react/prop-types
function SearchBar({ onSubmit }) {
  const [term, changeTerm] = useState("");

  const handleChange = (event) => {
    changeTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search here</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
