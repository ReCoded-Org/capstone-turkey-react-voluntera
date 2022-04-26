import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SIGN_UP_ROUTE } from '../../routes';
import logo from '../../assets/images/sign.png';
import InputField from '../../components/InputField';

export default function Login() {
  const [formData, setformData] = useState({});

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log('login', formData);
  return (
    <div className="min-h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center py-12 px-4 sm:px-6 lg:px-36">
      <img
        className="hidden md:hidden lg:block sm:hidden order-1  col-span-1"
        src={logo}
        alt="Display"
      />
      <div className="max-w-xl w-full space-y-8 col-span-3 lg:col-span-1 md:col-span-1 sm:col-span-1 justify-self-center ">
        <h2 className="text-4xl text-indigo-600">Sign Up</h2>
        <div className="mx-auto px-2 sm:px-8 lg:px-2 flex flex-col gap-3 justify-between sm:flex-col md:flex-col sm:flex">
          <form>
            <div className="relative z-0 mb-6 w-full group">
              <InputField
                label="Your email"
                type="email"
                id="email"
                placeholder="name@mail.com"
                icon="mail-fill"
                handleChange={handleChange}
              />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <InputField
                label="Your password"
                type="password"
                id="password"
                placeholder="*******"
                icon="lock-2-fill"
                handleChange={handleChange}
              />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <InputField
                label="Create username"
                type="text"
                id="username"
                placeholder="unsername21"
                icon="user-3-fill"
                handleChange={handleChange}
              />
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  label="Your first name"
                  type="text"
                  id="firstName"
                  placeholder="Alex"
                  icon="user-3-fill"
                  handleChange={handleChange}
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  label="Your last name"
                  type="text"
                  id="lastName"
                  placeholder="Clark"
                  icon="user-3-fill"
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  label="Your skills"
                  type="text"
                  id="skills"
                  placeholder="any skill"
                  icon="award-fill"
                  handleChange={handleChange}
                />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <InputField
                  label="Your birth date"
                  type="date"
                  id="birthDate"
                  placeholder="12/25/2000"
                  icon="calendar-fill"
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="text-md mb-4 flex justify-end">
              <Link
                to={SIGN_UP_ROUTE}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 my-2"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
