import { Link } from 'react-router-dom';

import logo from '../../assets/images/logov.png';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQS_ROUTE,
  HOME_ROUTE,
} from '../../routes';
import Linkedin, { Github } from '../Icons';

function Footer() {
  return (
    <div className=" bg-purple-600 flex py-10 px-10">
      <div className="container mx-auto px-2 sm:px-8  lg:px-8 flex flex-col gap-5 items-center justify-between sm:flex-col md:flex-row sm:flex ">
        <div className="flex flex-col gap-4">
          {/* logo section */}
          <Link to={HOME_ROUTE}>
            <div className="flex-shrink-0 flex gap-2 items-center justify-around bg-purple-900 px-3 py-2 rounded-md w-44">
              <img
                className="block h-8 w-auto rounded-md"
                src={logo}
                alt="logo"
              />
              <span className="text-2xl text-white font-semibold">
                Valuntera
              </span>
            </div>
          </Link>
          <p className="text-white">
            Copyright © Valuntera All rights reserved{' '}
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/school/re-coded/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://avatars.githubusercontent.com/u/35921230?s=200&v=4"
                alt="recoded"
                className="h-10 w-auto rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/school/re-coded/"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/ReCoded-Org/capstone-turkey-react-voluntera"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <Github />
            </a>
          </div>
        </div>
        {/* menu section */}
        <div className="flex flex-col w-80 px-5 gap-1 sm:w-80 sm:px-5 ">
          <h1 className="text-white text-xl mb-4">MENU</h1>
          <Link
            to={HOME_ROUTE}
            className="text-white font-semibold hover:text-purple-900"
          >
            Home
          </Link>
          <Link
            to={ABOUT_ROUTE}
            className="text-white font-semibold hover:text-purple-900"
          >
            About
          </Link>
          <Link
            to={CONTACT_ROUTE}
            className="text-white font-semibold hover:text-purple-900"
          >
            Contact
          </Link>
        </div>
        {/* supports */}
        <div className="flex flex-col w-80 px-5 gap-1 justify-start sm:w-80 sm:px-5">
          <h1 className="text-white text-xl mb-4">SUPPORT</h1>
          <Link
            to={FAQS_ROUTE}
            className="text-white font-semibold hover:text-purple-900"
          >
            FAQs
          </Link>
          <Link
            to="support"
            className="text-white font-semibold hover:text-purple-900"
          >
            Support Center
          </Link>
          <Link
            to="/help"
            className="text-white font-semibold hover:text-purple-900"
          >
            Help Desk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
