import { useFormik } from "formik";

function useSendingForm(formikDataWithoutOnSubmit, route) {
  return useFormik({
    ...formikDataWithoutOnSubmit,
    onSubmit: values => {
      console.log(values, route);
    },
  });
}

export default useSendingForm;
