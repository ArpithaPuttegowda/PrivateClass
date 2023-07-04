import React, { useRef, useState } from "react";

export const Debouncing = () => {
  const inputRef = useRef(null);
  //normal approach which doesn't affect the perfomance
  const [searchText, setSearchText] = useState("");
  //first way to send an ajax
  const onSearch = (eve) => {
    if (eve.key === "Enter") {
      console.log("ajax", searchText);
    }
  };
  //second way to send an ajax
  const handleClick = () => {
    console.log("ajax", searchText);
  };

  const onSearchItem = () => {
    console.log("ajax", inputRef?.current?.value);
  };

  // scenirio that can affect the perfomance and we can over come by using debouncing
  let timer;
  function onDebounce() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onSearchItem();
    }, 500);
  }
  return (
    <div>
      {/* <input
        onKeyUp={onSearch}
        placeholder="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleClick}>Search</button> */}

      {/* scenirio that can affect the perfomance and we can over come by using debouncing */}
      <p>
        <input
          placeholder="search your items"
          onKeyUp={onDebounce}
          ref={inputRef}
        />
      </p>
    </div>
  );
};
