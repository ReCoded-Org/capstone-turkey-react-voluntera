import { useState } from 'react';
import { Link } from 'react-router-dom';

import { faqs } from '../../faqs';
import { CONTACT_ROUTE } from '../../routes';

export default function FAQ() {
  const [clicked, setClicked] = useState('1');
  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    return setClicked(id);
  };

  return (
    <div className="px-20  my-20 py-10">
      <div>
        <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 ">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 ">
            Have any Question? look here
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg ">
            We will keep updating and answer all your questions here. If you
            could not find your answer click{' '}
            <Link to={CONTACT_ROUTE} className="font-bold text-blue-400 ml-2">
              here
            </Link>
          </p>
          {/* content */}
          {faqs.map((f) => {
            return (
              <>
                <h2 key={f.id} onClick={() => toggle(f.id)} aria-hidden="true">
                  <button
                    type="button"
                    className={`flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-${
                      f.id === clicked && 'xl border border-purple-500'
                    } border  border-gray-200 focus:ring-4 focus:ring-purple-300  hover:bg-gray-100 `}
                  >
                    <span>{f.q}?</span>
                    <svg
                      data-accordion-icon
                      className={`w-6 h-6 rotate-${
                        clicked === f.id && '180'
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  className={`${clicked === f.id && '1' ? 'block' : 'hidden'}`}
                >
                  <div className="p-5 border border-gray-200 ">
                    <p className="mb-2 text-gray-500 ">{f.a}</p>
                  </div>
                </div>
              </>
            );
          })}
          {/* end content */}
        </div>
      </div>
    </div>
  );
}
