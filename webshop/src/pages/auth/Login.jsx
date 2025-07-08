import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const passwordRef = useRef();

  const logIn = () => {
    if (passwordRef.current.value === "123") {
      toast.success(t("login.success"));
    } else {
      toast.error(t("login.error"));
    }
  };

  return (
    <div>
      <div>
        <label>{t("login.username")}</label><br />
        <input type="text" /><br />
        <label>{t("login.password")}</label><br />
        <input ref={passwordRef} type="password" /><br />
        <button onClick={logIn}>{t("login.button")}</button>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
    </div>
  );
}

export default Login;
