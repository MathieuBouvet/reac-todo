import { useState } from "react";
import axios from "axios";

function useSendingRequest(method, url) {
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
    }).finally(() =>
      setRequestState({ ...requestState, loading: false, done: true })
    );
  };

  return { ...requestState, sendRequest };
}

export default useSendingRequest;
