import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import AdminHome from "./AdminHome";
import productsFromFile from "../../data/products.json"
import { useTranslation } from "react-i18next";

function EditProduct() {
  const { t } = useTranslation();
  const { index } = useParams();
  const product = productsFromFile[index];
  const titleRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const countRef = useRef();
  const navigate = useNavigate();

  const update = () => {
    if (titleRef.current.value === "") {
      alert(t("edit-product.empty-title"));
      return;
    }
    if (priceRef.current.value === "") {
      alert(t("edit-product.empty-price"));
      return;
    }
    if (categoryRef.current.value === "") {
      alert(t("edit-product.empty-category"));
      return;
    }
    if (imageRef.current.value === "") {
      alert(t("edit-product.empty-image"));
      return;
    }
    if (ratingRef.current.value === "") {
      alert(t("edit-product.empty-rating"));
      return;
    }
    if (countRef.current.value === "") {
      alert(t("edit-product.empty-count"));
      return;
    }
    productsFromFile[index] = {
      "title": titleRef.current.value,
      "price": priceRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": ratingRef.current.value,
      "count": countRef.current.value,
    }
    navigate("/admin/maintain-products");
  };

  return (
    <div>
      <AdminHome />
      <label>{t("edit-product.title")}</label> <br />
      <input ref={titleRef} defaultValue={product.title} type="text" /> <br />
      <label>{t("edit-product.price")}</label> <br />
      <input ref={priceRef} defaultValue={product.price} type="number" /> <br />
      <label>{t("edit-product.category")}</label> <br />
      <input ref={categoryRef} defaultValue={product.category} type="text" /> <br />
      <label>{t("edit-product.image")}</label> <br />
      <input ref={imageRef} defaultValue={product.image} type="text" /> <br />
      <label>{t("edit-product.rating")}</label> <br />
      <input ref={ratingRef} defaultValue={product.rating} type="number" /> <br />
      <label>{t("edit-product.count")}</label> <br />
      <input ref={countRef} defaultValue={product.count} type="number" /> <br />
      <button onClick={update}>{t("edit-product.update")}</button>
    </div>
  );
}

export default EditProduct;
