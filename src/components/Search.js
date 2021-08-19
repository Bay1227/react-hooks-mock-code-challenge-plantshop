import React, {useState} from "react";

function Search({filterPlant}) {
  const [keyword, setKeyword] = useState('')

  function onChangeHandler(e){
    e.preventDefault();
    filterPlant(keyword)
  }
  return (
    <div className="searchbar" onSubmit={onChangeHandler} >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

export default Search;
