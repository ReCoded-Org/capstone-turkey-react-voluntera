import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { LOGIN_ROUTE } from '../../routes';
import logo from '../../assets/images/sign.png';
import InputField from '../../components/InputField';
import { signUpOrg } from '../../redux/slices/signUpOrgSlice';
import { signUpUser } from '../../redux/slices/signUpSlice';

export default function Signup() {
  const [formData, setformData] = useState({});
  const [skills, setSkills] = useState('');
  const [isOrg, setIsOrg] = useState(false);
  const [terms, setTerms] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vol = useSelector((state) => state.signupVolunteer);
  const org = useSelector((state) => state.signupOrganization);
  const notify = () => toast('Signed up succesfully');

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOrg) {
      dispatch(signUpOrg(formData));
      notify();
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 2500);
    }
    if (!isOrg) {
      const data = { ...formData, skills: [skills] };
      dispatch(signUpUser(data));
      notify();
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 2500);
    }
  };
  return (
    <>
      {' '}
      <ToastContainer />
      <div className="min-h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center py-12 px-4 sm:px-6 lg:px-36">
        <img
          className="hidden md:hidden lg:block sm:hidden order-1  col-span-1"
          src={logo}
          alt="Display"
        />

        <div className="max-w-xl w-full space-y-8 col-span-3 lg:col-span-1 md:col-span-1 sm:col-span-1 justify-self-center ">
          <h2 className="text-4xl text-indigo-600">Sign Up</h2>
          <div className="flex  items-center gap-3 text-xl text-yellow-500">
            Are you Organization?
            <input
              type="checkbox"
              name="org"
              id="org"
              onChange={(e) => setIsOrg(e.target.checked)}
              checked={isOrg}
              className="mt-2"
            />
          </div>
          <div className="mx-auto px-2 sm:px-8 lg:px-2 flex flex-col gap-3 justify-between sm:flex-col md:flex-col sm:flex">
            <form onSubmit={handleSubmit}>
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
                    label={`Your ${
                      isOrg ? ' Organization name' : 'first name'
                    }`}
                    type="text"
                    id={`${isOrg ? 'name' : 'firstName'}`}
                    placeholder={`${isOrg ? 'Earth Alex' : 'Clark'}`}
                    icon="user-3-fill"
                    handleChange={handleChange}
                  />
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <InputField
                    label={`Your ${isOrg ? 'Org address' : 'last name'}`}
                    type="text"
                    id={`${isOrg ? 'address' : 'lastName'}`}
                    placeholder={`${isOrg ? 'Ankara, Turkeyi' : 'Clark'}`}
                    icon="user-3-fill"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                {!isOrg && (
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
                )}
                <div className="relative z-0 mb-6 w-full group">
                  {isOrg ? (
                    <InputField
                      label="Your Org description"
                      type="text"
                      id="description"
                      placeholder="any details"
                      icon="award-fill"
                      handleChange={handleChange}
                    />
                  ) : (
                    <InputField
                      label="Your skills"
                      type="text"
                      id="skills"
                      placeholder="any skills"
                      icon="award-fill"
                      handleChange={(e) => setSkills(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div className="text-md mb-4 flex lg:justify-between lg:flex-row md:flex-row sm:flex-col flex-col gap-3 items-center">
                <div className="flex  items-center gap-3 ">
                  <input
                    type="checkbox"
                    name="org"
                    id="org"
                    onChange={(e) => setTerms(e.target.checked)}
                    checked={terms}
                    className=""
                  />
                  Accept{' '}
                  <a
                    href="https://www.something.com"
                    className="underline text-blue-500"
                  >
                    Terms of service
                  </a>
                </div>
                <Link
                  to={LOGIN_ROUTE}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have an account?
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className={`group relative w-72 flex justify-center
                py-2 px-4 border border-transparent  font-medium
                rounded-md ${
                  terms ? 'text-white text-md' : 'text-red-300 text-md'
                } bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 my-2 `}
                  disabled={!terms && true}
                >
                  {isOrg ? (
                    org.status === 'signing'
                  ) : vol.status === 'signing' ? (
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
                      Signing up
                    </div>
                  ) : null}
                  {terms ? 'Sign up' : 'Please accept terms of services'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
