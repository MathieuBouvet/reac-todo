import { useFormik } from "formik";
import axios from "axios";

function useSendingForm(
  formikDataWithoutOnSubmit,
  route,
  onSuccessCallback,
  onErrorCallback
) {
  const onSuccess = onSuccessCallback || (resp => console.log(resp));
  const onError = onErrorCallback || (err => console.log(err.response));
  return useFormik({
    ...formikDataWithoutOnSubmit,
    onSubmit: values => {
      axios
        .post(route, values)
        .then(onSuccess)
        .catch(onError);
    },
  });
}

export default useSendingForm;
