import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Component/Card";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState(["all"]);
  const [priceRange, setPriceRange] = useState(["all"]);
  async function fetchData(params) {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      if (category=="all") {
        setProduct(data);
      } else {
        setProduct(data.filter((e) => e.category === category));
      }
      if (priceRange !== "all") {
        setProduct((prevProducts) =>
          prevProducts.filter((e) => e.price <= priceRange)
        );
        if (priceRange === "all" && category === "all") {
          setProduct(data);
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category, priceRange]);

  return (
    <>
      <div className="container">
        <div className="row mb-15 mt-5">
          <div className="col-md-15">
            <select
              className="form-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value={"all"}>All Categories</option>
              <option value={"men's clothing"}>Men Clothing</option>
              <option value={"women's clothing"}>Women Clothing</option>
              <option value={"jewelery"}>Jewelery</option>
              <option value={"electronics"}>Electronics</option>
            </select>
            <select
              className="form-select mt-3"
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value={"all"}>All Prices</option>
              <option value={50}>Below $50</option>
              <option value={100}>Below $100</option>
              <option value={150}>Below $150</option>
              <option value={200}>Below $200</option>
            </select>
          </div>
          {product.map((e) => (<Card data={e}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
