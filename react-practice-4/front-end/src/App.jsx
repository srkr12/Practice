import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fallbackData = [
      // ... provide some static data here
    ];

    fetch("http://localhost:9000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setFoodData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setFoodData(fallbackData); // Use fallback data if fetch fails
      });
  }, []);

  // Filter the food data based on the search term and selected category
  const filteredFoodData = foodData.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      item.type === selectedCategory.toLowerCase();
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="main_container">
      <header>
        <h1 className="page_name">
          F<span>re</span>shly M<span>a</span>de
        </h1>

        <div className="search_bar">
          <input
            type="text"
            placeholder="Search Food...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          />
        </div>
      </header>

      <div className="filter_wrap">
        <button onClick={() => setSelectedCategory("All")}>All</button>
        <button onClick={() => setSelectedCategory("Breakfast")}>
          Breakfast
        </button>
        <button onClick={() => setSelectedCategory("Lunch")}>Lunch</button>
        <button onClick={() => setSelectedCategory("Dinner")}>Dinner</button>
        <button onClick={() => setSelectedCategory("Dessert")}>Dessert</button>
      </div>

      <div className="food_wrap">
        <div className="food_grid">
          {filteredFoodData.length > 0 ? (
            filteredFoodData.map((item, index) => (
              <div key={index} className="food_cart">
                <div className="cart_items">
                  <img src={item.image} alt={item.name} />

                  <div className="cart_text">
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>

                <button>{`$ ${item.price}`}</button>
              </div>
            ))
          ) : (
            <p className="not_found_msg">No food items found.</p> // Message if no items match the filters
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
