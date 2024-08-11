function Hero() {
  return (
    <div className="hero-wrap">
      <div className="text-wrap">
        <h1>
          YOUR FEET <br />
          DESERVE <br />
          THE BEST
        </h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="button-wrap">
          <button className="shop-button">Shop Now</button>

          <button className="category-button">Category</button>
        </div>

        <span>Also Available On</span>

        <div className="brand-icon-wrap">
          <img src="Images/flipkart.svg" alt="flipcart icon" />

          <img src="Images/amazon.svg" alt="amazon icon" />
        </div>
      </div>

      <div className="img-wrap">
        <img src="Images/hero-img.svg" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
