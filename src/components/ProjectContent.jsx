function ProjectContent({ project }) {
  return project.map((p) => {
    return (
      <div
        key={p.id}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8  p-3"
      >
        <div className="flex flex-col p-3 ">
          <img
            src={`${p.image}`}
            alt="project"
            className="sm:h-48 sm:w-auto md:w-auto lg:w-80  rounded"
          />
          <h1 className="text-center sm:text-center md:text-left lg:text-left text-2xl text-blue-500 py-3 font-normal">
            {p.name}
          </h1>
          <span className="text-sm text-center sm:text-center md:text-left lg:text-left">
            {p.date}
          </span>
          <span className="text-center sm:text-center md:text-left lg:text-left pb-4">
            {p.time}
          </span>
          <div className="flex flex-col items-center lg:flex md:flex">
            {p.description}
            <div className="flex w-60 justify-between pt-8">
              <div className="flex flex-col">
                <span className="flex flex-col text-2xl text-blue-700 ">
                  {p.applicants}{' '}
                  <span className="text-xs text-gray-400 ">Applicants</span>
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
            {p.skills}
          </p>
          <p>
            <span className="text-blue-600 font-bold">Address: </span>
            {p.address}
          </p>
        </div>
      </div>
    );
  });
}

export default ProjectContent;
