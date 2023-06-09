import React from "react";

function ResetSearch({ searchValue, setSearchValue }) {
  if (!searchValue) {
    return null;
  }

  return (
    <button className="reset-search" onClick={() => setSearchValue("")}>
      reset search
    </button>
  );
}

export { ResetSearch };
