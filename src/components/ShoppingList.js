import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item"; // assuming this is your item component
import items from "../data/items"; // your items array

function ShoppingList() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <Filter
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
