import { useState } from 'react';

import image from '../../assets/images/contact.png';
import ToastSuccess from '../../components/Toast/ToastSuccess';

const FORM_ENDPOINT = ''; // TODO - fill on the later step

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormdata] = useState({});
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };
  // console.log(formData);

  return (
    <div className="min-h-full grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 items-center justify-center py-12 px-4 sm:px-6 lg:px-36">
      <img src={image} alt="contact us" />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <h1 className="text-4xl text-gray-500 mb-10">Contact Us</h1>
        {/* toast */}
        <ToastSuccess
          submitted={submitted}
          message="Your message sent successfully, We will reach to you soon !"
        />

        {/* end toast */}
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
