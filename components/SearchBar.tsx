"use client";

import { useState } from "react";
import { SearchManufacher } from ".";

const SearchBar = () => {
  const [maunfacher, setmaunfacher] = useState("");
  const heldelsubmit = () => {};
  return (
    <form className="searchbar" onSubmit={heldelsubmit}>
      <div className="searchbar__item">
        <SearchManufacher
          maunfacher={maunfacher}
          setmaunfacher={setmaunfacher}
        />
      </div>
    </form>
  );
};

export default SearchBar;
