import React from "react";

import { NameList } from "./name-list.js";

function NamePicker({ names, searchValue, shortList, setShortList }) {
  const filteredNames = names
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((entry) => !shortList.includes(entry.id));

  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return <NameList nameList={filteredNames} onItemClick={addToShortList} />;
}

export { NamePicker };
