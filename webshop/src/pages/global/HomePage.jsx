import { useRef, useState } from "react";
import data from "../../data/products.json";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(data.slice());
  const searchRef = useRef();

  const search = () => {
    const result = data.filter(product =>
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setProducts(result);
  };

  const reset = () => {
    setProducts(data.slice());
    searchRef.current.value = "";
  };

  const sortAZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  const sortRatingAsc = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  };

  const sortRatingDesc = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  };

  const filterByCategory = (category) => {
    const result = data.filter(product => product.category === category);
    setProducts(result);
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach(product => total += product.price);
    return total.toFixed(2);
  };

  const addToCart = (product) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success(t("products.added") + ": " + product.title);
  };

  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
      <div>{t("products.total")}: {calculateTotal()} €</div>
      <input
        ref={searchRef}
        onChange={search}
        type="text"
      />
      <br />
      <button onClick={reset}>{t("products.reset")}</button>
      <button onClick={sortAZ}>{t("products.sort-az")}</button>
      <button onClick={sortZA}>{t("products.sort-za")}</button>
      <button onClick={sortPriceAsc}>{t("products.sort-price-asc")}</button>
      <button onClick={sortPriceDesc}>{t("products.sort-price-desc")}</button>
      <button onClick={sortRatingAsc}>{t("products.sort-rating-asc")}</button>
      <button onClick={sortRatingDesc}>{t("products.sort-rating-desc")}</button>
      <br />
      <button onClick={() => filterByCategory("men's clothing")}>{t("products.men")}</button>
      <button onClick={() => filterByCategory("women's clothing")}>{t("products.women")}</button>
      <button onClick={() => filterByCategory("jewelery")}>{t("products.jewelery")}</button>
      <button onClick={() => filterByCategory("electronics")}>{t("products.electronics")}</button>
      <div>{t("products.count")}: {products.length}</div>
      {products.map(product => (
        <div key={product.title}>
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <div>
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              src={product.image}
              alt=""
            />
          </div>
          <div>
            <button onClick={() => addToCart(product)}>{t("products.add-to-cart")}</button>
          </div>
          <Link to={`/product/${product.id}`}>
            <button>{t("products.view-details")}</button>
          </Link>
          <br /> <br />
        </div>
      ))}
    </div>
  );
}

export default Products;
