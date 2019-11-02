import { useState } from "react";
import axios from "axios";

function useSendingForm(route, onSuccess, onError, fieldsToSend) {
  const [formState, setFormState] = useState({
    sending: false,
    error: "",
    sent: false,
  });
  return {
    ...formState,
    reset: () => {
      setFormState({ sending: false, error: "", sent: false });
    },
    submitHandler: values => {
      setFormState({ sending: true, error: "", sent: false });
      const fields = fieldsToSend
        ? fieldsToSend.reduce((acc, current) => {
            acc[current] = values[current];
            return acc;
          }, {})
        : values;
      axios
        .post(route, fields)
        .then(response => {
          setFormState({ sending: false, error: "", sent: true });
          if (onSuccess) {
            onSuccess(response);
          }
        })
        .catch(error => {
          setFormState({ sending: false, error, sent: false });
          if (onError) {
            onError(error);
          }
        });
    },
  };
}

export default useSendingForm;
