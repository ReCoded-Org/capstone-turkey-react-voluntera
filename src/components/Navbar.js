import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/logov.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Navbar() {
  const login = false;

  return (
    <Disclosure as="nav" className="bg-purple-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start lg:items-center">
                <Link to="/">
                  <div className="flex-shrink-0 flex gap-2 items-center justify-between bg-purple-900 px-3 py-2 rounded-md">
                    <img
                      className="block lg:hidden h-8 w-auto rounded-md"
                      src={logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto rounded-md"
                      src={logo}
                      alt="valuntera"
                    />
                    <span className="text-2xl text-white font-semibold">
                      Valuntera
                    </span>
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center md:items-center space-x-4">
                    <Link
                      to="/"
                      className={classNames(
                        'text-white  hover:text-purple-900',
                        ' rounded-md text-md font-medium',
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className={classNames(
                        'text-white  hover:text-purple-900',
                        'px-3 py-2 rounded-md text-md font-medium',
                      )}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className={classNames(
                        'text-white hover:text-purple-900',
                        'px-3 py-2 rounded-md text-md font-medium',
                      )}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <input
                  type="text"
                  className="hidden rounded-full outline-none px-3 w-60 text-lg md:hidden sm:hidden lg:block bg-purple-600 border text-white"
                  placeholder="Search here"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {login ? (
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                  ) : (
                    <Link to="/signup">
                      <button
                        type="button"
                        className="text-white px-5 py-1 bg-purple-900 rounded-md flex items-center  font-semibold hover:text-gray-400"
                      >
                        Sign up
                      </button>
                    </Link>
                  )}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="www.dotcome.com"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="www.dotcome.com"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="www.dotcome.com"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <Disclosure.Button
                as="a"
                className={classNames(
                  login
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium',
                )}
                // aria-current={item.current ? 'page' : undefined}
              >
                Profile
              </Disclosure.Button> */}
              <Link
                to="/"
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;

//  <div className="bg-purple-500 h-16 flex">
//       <div className="container m-auto flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* logo */}
//           <div className="flex justify-around w-44 h-11 rounded-md items-center gap-2 bg-purple-800 p-3 m-1">
//             <img src={logo} alt="valuntera" className="h-7 rounded" />
//             <h1 className="text-2xl text-white font-semibold">Valuntera</h1>
//           </div>
//           {/* menu */}
//           <ul className="flex gap-2 text-white font-semibold">
//             <li className=" hover:border-b-2 mx-2 border-b-purple-500">Home</li>
//             <li className=" hover:border-b-2 mx-2">Projects</li>
//             <li className=" hover:border-b-2 mx-2">About</li>
//             <li className=" hover:border-b-2 mx-2">Contact</li>
//           </ul>
//         </div>
//         {/* login and search */}
//         <div className="flex gap-2">
//           <input
//             type="text"
//             className="rounded-full border bg-transparent px-3 py-1 text-white text-md w-72 outline-none placeholder-gray-300"
//             placeholder="Search here"
//           />
//           <button
//             className="text-white bg-purple-800 rounded-full font-semibold px-5 py-1 flex"
//             type="button"
//           >
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
