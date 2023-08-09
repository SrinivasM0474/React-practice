import React from "react";
function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          props.handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
