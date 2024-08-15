import "./App.scss";

function App() {
  return (
    <div className="main_container">
      <header>
        <h1 className="page_name">
          F<span>re</span>shly M<span>a</span>de
        </h1>

        <div className="search_bar">
          <input type="text" placeholder="Search Food...." />
        </div>
      </header>

      <ul className="filter_wrap">
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Dessert</li>
      </ul>

      <div className="food_wrap">
        <div className="food_grid">
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
          <div className="food_cart">bbfsjskhsekfhkshfksdfsdk</div>
        </div>
      </div>
    </div>
  );
}

export default App;
