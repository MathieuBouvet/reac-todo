import { useState } from "react";
import axios from "axios";

function useSendingRequest(method, url, onSuccess, onError) {
  const [requestState, setRequestState] = useState({
    loading: false,
    error: null,
    done: false,
  });

  const sendRequest = data => {
    setRequestState({ loading: true, error: null, done: false });
    axios({
      method,
      url,
      data,
    })
      .then(response => {
        setRequestState({ loading: false, error: null, done: true });
        if (onSuccess) {
          onSuccess(response);
        }
      })
      .catch(error => {
        setRequestState({ loading: false, error, done: true });
        if (onError) {
          onError(error);
        }
      });
  };

  return { ...requestState, sendRequest };
}

export default useSendingRequest;
