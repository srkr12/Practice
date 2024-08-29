import React from "react";

function SearchBox({ searchQuery, setSearchQuery, onAdd }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-[10px] flex-grow h-[10px]">
        <img
          className="absolute w-[24px] ml-2"
          src="search.png"
          alt="search icon"
        />

        <input
          className="bg-transparent border-white rounded-[10px] border-2 p-2 flex-grow pl-8 text-white"
          type="text"
          placeholder="Search Contact"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <button
        className="w-[52px] bg-white rounded-[50%] p-[12px] cursor-pointer"
        onClick={onAdd}
      >
        <img className="min-w-[18px]" src="plus.png" alt="add icon" />
      </button>
    </div>
  );
}

export default SearchBox;
