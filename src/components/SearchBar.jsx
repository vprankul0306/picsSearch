import { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
