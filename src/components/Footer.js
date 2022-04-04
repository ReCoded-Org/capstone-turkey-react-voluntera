import { Link } from 'react-router-dom';
import logo from '../assets/logov.png';
import Linkedin, { Facebook, Github } from './Icons';

function Footer() {
  return (
    <div className="h-80 bg-purple-600 flex">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 flex gap-5 items-center justify-around">
        <div className="flex flex-col gap-4">
          {/* logo section */}
          <div className="flex-shrink-0 flex gap-2 items-center justify-around bg-purple-900 px-3 py-2 rounded-md w-44">
            <img
              className="block h-8 w-auto rounded-md"
              src={logo}
              alt="Workflow"
            />
            <span className="text-2xl text-white font-semibold">Valuntera</span>
          </div>
          <p className="text-white">
            Copyright © Valuntera All rights reserved{' '}
          </p>
          <div className="flex gap-2">
            <Linkedin />
            <Facebook />
            <Github />
          </div>
        </div>
        {/* menu section */}
        <div className="flex flex-col gap-1 justify-start">
          <h1 className="text-white text-xl mb-4">MENU</h1>
          <Link
            to="/"
            className="text-white font-semibold hover:text-purple-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-semibold hover:text-purple-900"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-semibold hover:text-purple-900"
          >
            Contact
          </Link>
        </div>
        {/* supports */}
        <div className="flex flex-col gap-1 justify-start">
          <h1 className="text-white text-xl mb-4">SUPPORT</h1>
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
          <Link
            to="/faqs"
            className="text-white font-semibold hover:text-purple-900"
          >
            FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
