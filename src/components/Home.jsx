import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71w+qp51UyL._SX3000_.jpg"
          alt="hero image"
        />
        <Products />
      </div>
    </div>
  );
}

export default Home;
