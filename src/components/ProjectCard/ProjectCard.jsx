// import './ProjectCard.css';
import PropTypes from 'prop-types';

function ProjectCard({ projectName, field, deadline }) {
  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-xl ">
      <img
        className="rounded-t-lg"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {projectName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{field}</p>
        <div className="flex justify-between items-end">
          <a
            href="http://www.w3.org/2000/svg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="text-slate-500">Deadline: {deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  field: PropTypes.string,
  deadline: PropTypes.string,
};

ProjectCard.defaultProps = {
  projectName: 'Name',
  field: 'Field',
  deadline: 'Deadline',
};
