import React, { useEffect, useRef } from "react";

function Search({ searchValue, setSearchValue }) {
  const inputRef = useRef();

  // Makes it so Search Bar is autoamtically selected when page
  // is loaded so he can start typing immediately
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a Name..."
        value={searchValue}
        onChange={handleSearch}
      />
    </header>
  );
}

export { Search };
