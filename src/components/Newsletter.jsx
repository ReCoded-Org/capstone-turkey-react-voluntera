import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className="text-center px-10 mb-10 shadow-inner flex flex-col justify-center items-center ">
      <h2 className="text-4xl text-[#0B0C0D] pt-6 pb-2">News & Updates</h2>
      <p className="pb-6">
        Enter your email below to get news and updates from us
      </p>

      <div className="md:w-1/2 w-4/5 md:h-28 bg-white p-6 drop-shadow-2xl rounded ">
        <Formik
          initialValues={{ email: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setEmail(values.email);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-9/12  ">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-white border border-slate-300 hover:border-indigo-300 rounded p-2 mx-2 mb-2 md:mb-0 h-14 "
                  value={email}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="self-start pl-2 pt-1 text-red-500 mb-2"
                />
              </div>
              <button
                type="submit"
                className="md:w-3/12 bg-[#573C9B] p-2 rounded  text-white drop-shadow-xl mx-2 h-14 	"
                disabled={isSubmitting}
              >
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Newsletter;
