import { useState } from "react";
import axios from "axios";

function useSendingForm(route, onSuccess, onError, fieldsToSend) {
  const [formState, setFormState] = useState({
    sending: false,
    error: "",
    sendingSuccess: false,
  });
  return {
    ...formState,
    submitHandler: values => {
      setFormState({ sending: true, error: "", sendingSuccess: false });
      const fields = fieldsToSend
        ? fieldsToSend.reduce((acc, current) => {
            acc[current] = values[current];
            return acc;
          }, {})
        : values;
      axios
        .post(route, fields)
        .then(response => {
          setFormState({ sending: false, error: "", sendingSuccess: true });
          if (onSuccess) {
            onSuccess(response);
          }
        })
        .catch(error => {
          setFormState({ sending: false, error, sendingSuccess: false });
          if (onError) {
            onError(error);
          }
        });
    },
  };
}

export default useSendingForm;
