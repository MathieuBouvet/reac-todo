import { useState } from "react";
import axios from "axios";

function useSendingRequest(method, url) {
  const [requestState, setRequestState] = useState({
    loading: false,
    error: null,
    done: false,
  });
}

export default useSendingRequest;
