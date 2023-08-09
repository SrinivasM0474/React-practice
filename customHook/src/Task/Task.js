import React, { useState, useCallback } from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";
import data from "./data.json";

export default function Task() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = useCallback(
    (value) => {
      setSearchValue(value);
    },
    [searchValue]
  );

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <Table data={data} value={searchValue} />
    </div>
  );
}
