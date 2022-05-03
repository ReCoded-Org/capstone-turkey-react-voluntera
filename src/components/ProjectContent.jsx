import PropTypes from 'prop-types';

function ProjectContent({ title, type, address, date, pic, skills, isOpen }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-3">
      <div className="flex flex-col p-3">
        <img
          src={pic}
          alt="project"
          className="sm:h-48 sm:w-auto md:w-auto lg:w-full  rounded border-b-2"
        />
        <div className="flex flex-col">
          <h1 className="text-center sm:text-center md:text-left lg:text-left text-2xl text-blue-600 py-3 font-normal">
            {title.toUpperCase()}
          </h1>
          <span className="text-blue-600 text-center sm:text-center md:text-left lg:text-left">
            Deadline: {date.slice(0, 10)}
          </span>
          <span className="text-slate-700 text-center sm:text-center md:text-left lg:text-left pb-4">
            Type: {type}
          </span>
          <span className=" flex gap-2 text-center sm:text-center md:text-left lg:text-left text-lg text-slate-700">
            <span className="text-blue-600">Status:</span>
            {isOpen ? 'Open' : 'Closed'}
          </span>
          <div className="flex flex-col items-center">
            <div className="flex w-60 justify-between pt-8">
              <button
                type="button"
                className="w-28 h-10 border bg-purple-500 px-8 rounded-full flex items-center justify-center text-white text-sm font-bold hover:text-purple-500 hover:bg-purple-300 hover:border hover:border-purple-500"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col md:justify-center p-3 md:pt-28 lg:col-span-2">
        <p className="text-slate-800">
          <span className="text-blue-600 font-bold">Skills: </span>
          {skills.join(' + ').toUpperCase()}
        </p>
        <p>
          <span className="text-blue-600 font-bold">Address: </span>
          {address}
        </p>
      </div>
    </div>
  );
}

ProjectContent.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  address: PropTypes.string,
  pic: PropTypes.string,
  skills: PropTypes.instanceOf(Array),
  isOpen: PropTypes.bool,
};

ProjectContent.defaultProps = {
  title: '',
  date: null,
  type: '',
  address: '',
  pic: 'https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg',
  skills: [],
  isOpen: null,
};
export default ProjectContent;
