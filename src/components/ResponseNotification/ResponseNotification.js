import React from "react";
import Proptypes from "prop-types";
import "./ResponseNotification.css";

const defaultMessageConfig = {
  onSuccess: "Requête envoyée et traitée",
  onOther: "Erreur lors de l'envoi de la requête",
  on400: "Erreur 400 : Bad Request",
  on401: "Erreur 401 : Unauthorized",
  on403: "Erreur 403 : Forbidden",
  on404: "Erreur 404 : Not Found",
  on500: "Erreur 500 : Internal Server Error",
};

function getMessage(codeReceived, messages) {
  return messages[codeReceived] || defaultMessageConfig[codeReceived];
}

function getNotificationMessage(error, messageConfig) {
  const messages = messageConfig || defaultMessageConfig;
  if (error === "") {
    return getMessage("onSuccess", messages);
  }
  return (
    getMessage(`on${error.response.status}`, messages) ||
    getMessage("onOther", messages)
  );
}

const ResponseNotification = ({ error, messageConfig, closeHandler }) => {
  const message = getNotificationMessage(error, messageConfig);
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
