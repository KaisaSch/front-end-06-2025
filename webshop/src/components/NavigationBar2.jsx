import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import englishFlag from "../assets/englishFlag.png"
import estonianFlag from "../assets/estonianFlag.png"
import i18n from "../i18n";
import "../App.css";

function NavigationBar() {
  const { t } = useTranslation();

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }

  return (
    <div>
      <Link to="/">
        <button>{t("navbar.home")}</button>
      </Link>
      <Link to="/admin">
        <button>{t("navbar.admin")}</button>
      </Link>
      <Link to="/cart">
        <button>{t("navbar.cart")}</button>
      </Link>
      <Link to="/map">
        <button>{t("navbar.map")}</button>
      </Link>
      <Link to="/login">
        <button>{t("navbar.login")}</button>
      </Link>
      <Link to="/signup">
        <button>{t("navbar.signup")}</button>
      </Link>

      <img className="ikoon" src={englishFlag} onClick={changeLanguageEN} alt="" />
      <img className="ikoon" src={estonianFlag} onClick={changeLanguageET} alt="" />
    </div>
  );
}

export default NavigationBar;
