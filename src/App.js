import React, { useState, Fragment } from "react";

// Components
import { NamePicker } from "./components/name-picker.js";
import { Search } from "./components/search.js";
import { ShortList } from "./components/short-list.js";
import { ResetSearch } from "./components/reset-search.js";

/*
<App>
  <Search />
  <ShortList />
  <NamePicker />
  <Footer />
</App>
*/

function App({ names }) {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList
        names={names}
        shortList={shortList}
        setShortList={setShortList}
      />
      <NamePicker
        names={names}
        searchValue={searchValue}
        shortList={shortList}
        setShortList={setShortList}
      />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </Fragment>
  );
}

export default App;
