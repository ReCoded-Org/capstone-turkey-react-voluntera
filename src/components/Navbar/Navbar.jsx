import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import classNames from '../../utils';
import logo from '../../assets/images/logov.png';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECT_ROUTE,
  SIGN_UP_ROUTE,
} from '../../routes';

function Navbar() {
  const login = false;

  return (
    <Disclosure as="nav" className="bg-purple-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:absolute sm:absolute lg:hidden">
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
                <Link to={HOME_ROUTE}>
                  <div className="flex-shrink-0 hidden gap-2 items-center justify-between bg-purple-900 px-3 py-2 rounded-md md:flex md:ml-11 lg:ml-0 lg:flex sm:hidden">
                    <img
                      className=" block h-8  w-auto rounded-md md:h-6"
                      src={logo}
                      alt="valuntera"
                    />
                    <span className="text-2xl text-white font-semibold md:text-xl">
                      Valuntera
                    </span>
                  </div>
                </Link>
                <div className="hidden lg:block md:hidden sm:hidden sm:ml-6">
                  <div className="flex items-center md:items-center space-x-4">
                    <Link
                      to={HOME_ROUTE}
                      className={classNames(
                        'text-white  hover:text-purple-900',
                        ' rounded-md text-md font-medium',
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      to={ABOUT_ROUTE}
                      className={classNames(
                        'text-white  hover:text-purple-900',
                        'px-3 py-2 rounded-md text-md font-medium',
                      )}
                    >
                      About
                    </Link>
                    <Link
                      to={CONTACT_ROUTE}
                      className={classNames(
                        'text-white hover:text-purple-900',
                        'px-3 py-2 rounded-md text-md font-medium',
                      )}
                    >
                      Contact
                    </Link>
                    <Link
                      to={PROJECT_ROUTE}
                      className={classNames(
                        'text-white hover:text-purple-900',
                        'px-3 py-2 rounded-md text-md font-medium',
                      )}
                    >
                      Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                    <Link to={SIGN_UP_ROUTE}>
                      <button
                        type="button"
                        className="text-white px-5 py-2 bg-purple-900 rounded-md flex items-center  font-semibold hover:text-white hover:bg-purple-800"
                      >
                        Login
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

          <Disclosure.Panel className="sm:block block md:block lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to={HOME_ROUTE}
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                Home
              </Link>
              <Link
                to={ABOUT_ROUTE}
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                About
              </Link>
              <Link
                to={CONTACT_ROUTE}
                className={classNames(
                  'text-white hover:text-purple-900',
                  'px-3 py-2 rounded-md text-md font-medium',
                )}
              >
                Contact
              </Link>
              <input
                type="text"
                className="block rounded-full outline-none px-3 w-60 text-lg md:block sm:block lg:hidden bg-purple-600 border text-white"
                placeholder="Search here"
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
