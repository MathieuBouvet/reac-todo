import { useFormik } from "formik";
import axios from "axios";

function useSendingForm(formikDataWithoutOnSubmit, route) {
  return useFormik({
    ...formikDataWithoutOnSubmit,
    onSubmit: values => {
      axios
        .post(route, values)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
  });
}

export default useSendingForm;
