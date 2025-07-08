import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/admin/maintain-products">
        <button>{t("admin-home.maintain-products")}</button>
      </Link>
      <Link to="/admin/add-product">
        <button>{t("admin-home.add-product")}</button>
      </Link>
    </div>
  );
}

export default AdminHome;
