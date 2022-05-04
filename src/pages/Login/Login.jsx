import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/sign.png';
import { signInUser } from '../../redux/slices/signinSlice';
import { SIGN_UP_ROUTE, USER_ROUTE } from '../../routes';

export default function Login() {
  const [rememberme, setRememberme] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // validation
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'This is Required';
    } else if (values.username.length < 8) {
      errors.username = 'Must be 8 characters minimum';
    }

    if (!values.password) {
      errors.password = 'This is Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters minimum';
    }
    return errors;
  };
  // end validation

  // formik
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      dispatch(signInUser(values));
      if (user) {
        navigate(USER_ROUTE);
      }
    },
  });
  // console.log(user);
  return (
    <div className="min-h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <img
        className="w-50% lg:col-span-2 md:col-span-1"
        src={logo}
        alt="Display"
      />
      <div className="max-w-md w-full space-y-8 justify-self-center">
        <h2 className="text-4xl text-indigo-600">Sign In</h2>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="mx-auto px-2 sm:px-8 lg:px-2 flex flex-col gap-8 justify-between sm:flex-col md:flex-col sm:flex">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="username" className="text-sm text-slate-700">
                Your username
                <div className="relative text-center mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <i className="ri-user-3-fill rounded-3xl" />
                  </div>
                  <input
                    type="text"
                    placeholder="someone231"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5    "
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                </div>
              </label>
              {formik.errors.username ? (
                <span className="text-xs text-red-400 self-start ml-2">
                  {formik.errors.username}
                </span>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="username" className="text-sm text-slate-700">
                Your password
                <div className="relative text-center mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <i className="ri-lock-fill rounded-3xl" />
                  </div>
                  <input
                    type="password"
                    placeholder="*******"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5    "
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </label>
              {formik.errors.password ? (
                <span className="text-xs text-red-400 self-start ml-2">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between mx-5">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                checked={rememberme}
                onChange={(e) => setRememberme(e.target.checked)}
              />
              <p className="ml-2 block text-sm text-gray-900 m-2">
                Remember me
              </p>
            </div>

            <div className="text-sm">
              <a
                href="fake-site"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="text-sm mx-5">
            <Link
              to={SIGN_UP_ROUTE}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Dont have an account?
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 m-2"
              // disabled={user && true}
            >
              {user.status === 'loading' ? (
                <div className="flex items-center">
                  <svg
                    role="status"
                    className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Signing in
                </div>
              ) : null}
              {user ? 'Signed in' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
