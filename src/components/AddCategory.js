import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ addCats }) {
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue((val) => (val = e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCats(inputValue);
    setinputValue((val) => (val = ""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  addCats: PropTypes.func.isRequired,
};
