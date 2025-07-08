import { useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";
import { useTranslation } from "react-i18next";

function SingleProduct() {
  const { t } = useTranslation();
  const { id } = useParams();
  const found = productsFromFile.find(product => product.id === Number(id));

  if (!found) {
    return <div>{t("single.not-found")}</div>;
  }

  return (
    <div>
      <div>{found.title}</div>
      <div>{found.price} €</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div>{found.rate}</div>
      <div>{found.count}</div>
      <div><img className="pilt" src={found.image} alt="" /></div>
    </div>
  );
}

export default SingleProduct;
