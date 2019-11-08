import { useState } from "react";
import axios from "axios";

function useSendingRequest() {
  let requestConfig = {
    method: "get",
    url: "",
    timeout: 5000,
    headers: {},
  };
  let onSuccess = null;
  let onError = null;
  const [requestState, setRequestState] = useState({
    loading: false,
    error: null,
    done: false,
  });

  const sendRequest = data => {
    const config = { ...requestConfig, data };
    setRequestState({ loading: true, error: null, done: false });
    axios(config)
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

  return {
    ...requestState,
    sendRequest,
    get(url) {
      requestConfig.method = "get";
      requestConfig.url = url;
      return this;
    },
    post(url) {
      requestConfig.method = "post";
      requestConfig.url = url;
      return this;
    },
    put(url) {
      requestConfig.method = "put";
      requestConfig.url = url;
      return this;
    },
    delete(url) {
      requestConfig.method = "delete";
      requestConfig.url = url;
      return this;
    },
    bearer(token) {
      requestConfig.headers = {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`,
      };
      return this;
    },
    onSuccess(callback) {
      onSuccess = callback;
      return this;
    },
    onError(callback) {
      onError = callback;
      return this;
    },
    config(config) {
      const headers = { ...requestConfig.headers, ...config.headers };
      requestConfig = {
        ...requestConfig,
        ...config,
        headers,
      };
      return this;
    },
  };
}

export default useSendingRequest;
