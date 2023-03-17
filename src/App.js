import React, { Fragment } from "react";

// Components
import { NamePicker } from "./components/name-picker.js";
import { Search } from "./components/search.js";

/*
<App>
  <Search />
  <ShortList />
  <NamePicker />
  <Footer />
</App>
*/

function App({ names }) {
  return (
    <Fragment>
      <Search />
      <NamePicker names={names} />
    </Fragment>
  );
}

export default App;
