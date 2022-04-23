import { Link } from 'react-router-dom';
import logo from '../../assets/images/sign.png';
import { LOGIN_ROUTE } from '../../routes';

export default function SingUp() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <img className="w-50%" src={logo} alt="Display" />
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-4xl text-indigo-600">Sign Up</h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="mx-auto px-2 sm:px-8 lg:px-2 flex flex-col gap-10 justify-between sm:flex-col md:flex-col sm:flex">
            <input
              type="text"
              className="bg-black-900 border-4 text-black"
              placeholder="Username"
            />
            <input
              type="text"
              className="bg-white-900 border-4 text-black"
              placeholder="Password"
            />
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Your email
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                  placeholder="Email address"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Your Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm  "
                  placeholder="Password"
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
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
          <div className="text-sm">
            <Link
              to={LOGIN_ROUTE}
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
            >
              Login
            </button>
            <button
              style={{ border: '1px solid purple' }}
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-purple text-sm font-medium
                rounded-md text-purple bg-white hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
