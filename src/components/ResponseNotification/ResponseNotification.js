import React from "react";
import Proptypes from "prop-types";
import "./ResponseNotification.css";

function getMessage(error) {
  if (error === "") {
    return "Requete envoyée et traitée";
  }
  switch (error.response.status) {
    case 401:
      return "Identifiants incorrects";
    default:
      return "Erreur serveur. Veuillez rééssayer plus tard ou contacter le support utilisateur";
  }
}

const ResponseNotification = ({ error, closeHandler }) => {
  const message = getMessage(error);
  return (
    <div
      className={`response-notification ${
        error ? "response-notification-error" : "response-notification-success"
      }`}
    >
      <div className="message">{message}</div>
      <div className="close-notification" onClick={closeHandler}>
        ✗
      </div>
    </div>
  );
};

ResponseNotification.propTypes = {
  closeHandler: Proptypes.func.isRequired,
  error: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.shape({
      response: Proptypes.shape({
        status: Proptypes.number.isRequired,
        data: Proptypes.shape({
          error: Proptypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ]).isRequired,
};

export default ResponseNotification;
