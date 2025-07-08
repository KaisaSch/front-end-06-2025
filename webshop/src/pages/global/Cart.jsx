import { useState } from "react";
import { useTranslation } from "react-i18next";
import kustutaIkoon from "../../assets/delete.png"

function Cart() {
  const { t } = useTranslation();
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const remove = (index) => {
    const updatedCart = [...products];
    updatedCart.splice(index, 1);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach(product => total = total + product.price);
    return total;
  };

  return (
    <div>
      {products.length > 0 ? (
        <>
          <button onClick={() => {
            setProducts([]);
            localStorage.setItem("cart", JSON.stringify([]));
          }}>
            {t("cart.empty-button")}
          </button>
          <div>{t("cart.in-cart")}: {products.length} {t("cart.item(s)")}</div>
          <div>{t("cart.total")}: {calculateTotal().toFixed(2)} €</div>
        </>
      ) : (
        <div>{t("cart.empty-cart")}</div>
      )}

      {products.map((product, index) => (
        <div key={index}>
          {product.title} - {product.price}€
          <img className="ikoon" src={kustutaIkoon} onClick={() => remove(index)} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Cart;
