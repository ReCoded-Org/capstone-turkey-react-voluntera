import PropTypes from 'prop-types';
// import projectimg from '../assets/images/project.jpg';

function ProjectContent({ projectimg }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8  p-3">
      <div className="flex flex-col p-3 ">
        <img
          src={`${projectimg}`}
          alt="project"
          className="sm:h-48 sm:w-auto md:w-auto lg:w-80  rounded"
        />
        <h1 className="text-center sm:text-center md:text-left lg:text-left text-2xl text-blue-500 py-3 font-normal">
          Project Name
        </h1>
        <span className="text-sm text-center sm:text-center md:text-left lg:text-left">
          Mar 12 2022
        </span>
        <span className="text-center sm:text-center md:text-left lg:text-left pb-4">
          Part-Time
        </span>
        <div className="flex flex-col items-center lg:flex md:flex">
          You can load project details such as the project name, classification,
          and type, as well as the start and end dates, to existing and new
          projects. You load project details to existing projects by using a
          data file with the same format as the ProjectDetails.csv data load
          file
          <br />
          <br />
          You load project details to existing projects by using a data file
          with the same format as the ProjectDetails.csv data load file
          <div className="flex w-60 justify-between pt-8">
            <div className="flex flex-col">
              <span className="flex flex-col text-2xl text-blue-700 ">
                425 <span className="text-xs text-gray-400 ">Applicants</span>
              </span>
            </div>
            <button
              type="button"
              className="w-28 h-10 border bg-purple-500 px-8 rounded-full flex items-center justify-center text-white text-sm font-bold hover:text-purple-500 hover:bg-purple-300 hover:border hover:border-purple-500"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-col md:justify-center p-3 md:pt-28 ">
        <p>
          <span className="text-blue-600 font-bold">Skills: </span>
          Public speaking, Teaching, Good communication...
        </p>
        <p>
          <span className="text-blue-600 font-bold">Address: </span>
          16 Woodlawn Terrace, Waterbury, ct, 6310 United States
        </p>
      </div>
    </div>
  );
}

ProjectContent.propTypes = {
  projectimg: PropTypes.string.isRequired,
};

export default ProjectContent;
