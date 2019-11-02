import { useFormik } from "formik";
import axios from "axios";

function useSendingForm(
  formikDataWithoutOnSubmit,
  route,
  onSuccessCallback,
  onErrorCallback,
  fieldsToSend
) {
  const onSuccess = onSuccessCallback || (resp => console.log(resp));
  const onError = onErrorCallback || (err => console.log(err.response));
  return useFormik({
    ...formikDataWithoutOnSubmit,
    onSubmit: values => {
      const fields = fieldsToSend
        ? fieldsToSend.reduce((acc, current) => {
            acc[current] = values[current];
            return acc;
          }, {})
        : values;
      axios
        .post(route, fields)
        .then(onSuccess)
        .catch(onError);
    },
  });
}

export default useSendingForm;
