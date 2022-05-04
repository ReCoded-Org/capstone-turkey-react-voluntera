import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { addProject } from '../redux/slices/addProjectSlice';

export default function AddNewProjectModal() {
  const [formData, setFormData] = useState({});
  const [skills, setSkills] = useState('');

  const notify = () => toast('The project added succesfully');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleChange = (e) => {
    /* eslint no-underscore-dangle: 0 */
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      creator: user._id,
      isOpen: e.target.checked,
      necessarySkills: [skills],
      applications: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(formData));
  };
  // console.log('modal', formData);
  return (
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div className="relative bg-white rounded-lg shadow ">
        <div className="flex justify-between items-start p-5 rounded-t border-b ">
          <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
            Add new project
          </h3>
          <ToastContainer />
        </div>
        {/* content */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="mb-3 w-full group 300">
              Title
              <input
                type="text"
                name="title"
                className=" py-1 outline-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  200"
                placeholder="title "
                required
                onChange={handleChange}
              />
            </label>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-4 mt-5">
              <label htmlFor="type" className="mb-1 w-full group 300">
                Type
                <input
                  type="text"
                  name="type"
                  className=" py-1 outline-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 200 "
                  placeholder=" part-time"
                  required
                  onChange={handleChange}
                />
              </label>
              <label
                htmlFor="isOpen"
                className="mb-1 w-full flex items-center gap-3 300 "
              >
                Is Open ?
                <input
                  type="checkbox"
                  name="isOpen"
                  className=" py-1 outline-none px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 "
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <label htmlFor="necessarySkills" className="mb-1 w-full group 300">
              Skills
              <input
                type="text"
                name="necessarySkills"
                className=" py-1 outline-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 "
                placeholder=""
                required
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>
            <div className="grid xl:grid-cols-2 xl:gap-6 mb-6 mt-5">
              <label htmlFor="address" className="mb-1 w-full group ">
                Location
                <input
                  type="text"
                  name="address"
                  className=" py-1 outline-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 "
                  placeholder="Istanbul/ Turkey"
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="date" className="mb-1 w-full group  ">
                Date
                <input
                  type="date"
                  name="date"
                  className=" py-1 outline-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 "
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              onClick={notify}
            >
              Add
            </button>
          </form>
        </div>
        {/* end content */}
      </div>
    </div>
  );
}
