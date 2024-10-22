import { Field, Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  function handleSubmit() {
    console.log(1);
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
