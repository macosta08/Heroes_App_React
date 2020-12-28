import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    //history.push("/");
    //history.replace("/"); // remplaza en la historia busqueda. Ej: despues de hacer login no se regresa a esa opción

    const lastPath = localStorage.getItem("lastPath") || "/"; //Para guardar la ruta anterior visitada

    dispatch({
      type: types.login,
      payload: {
        name: "Mariangel",
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
