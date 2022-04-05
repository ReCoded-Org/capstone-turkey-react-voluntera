function ApplicantList() {
  return (
    <div className=" px-6">
      <div className="hidden md:hidden sm:hidden lg:grid lg:grid-cols-3 grid-cols-1 items-center py-1 px-2 ">
        <span className="text-blue-500 text-2xl font-thin ">Applicants</span>
        <span className="text-blue-500">Name</span>
        <span className="text-blue-500 justify-self-end pr-5">Status</span>
      </div>
      <hr className="h-0.5 bg-gray-400 rounded-full my-2 md:hidden hidden lg:block" />
      <div className="grid lg:grid-cols-3 items-center  pb-2 px-2 md:grid-cols-3  grid-cols-1  md:justify-items-center justify-items-center lg:justify-items-start  gap-5">
        {/* profile */}
        <div className="lg:h-20 lg:w-20 md:h-20 md:w-20 h-32 w-32 rounded-full bg-gray-300" />
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-lg">Emily Jorgensen</span>
          <span className="text-gray-400 text-sm">
            Author at Properly Store
          </span>
        </div>
        {/* Status */}
        <div className="lg:justify-self-end md:justify-self-end pr-5">
          <span className="text-green-500 ">Accepted</span>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-400 rounded-full my-2" />
      <div className="grid lg:grid-cols-3 items-center  pb-2 px-2 md:grid-cols-3  grid-cols-1  md:justify-items-center justify-items-center lg:justify-items-start gap-5">
        {/* profile */}
        <div className="lg:h-20 lg:w-20 md:h-20 md:w-20 h-32 w-32 rounded-full bg-gray-300" />
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-lg">Emily Jorgensen</span>
          <span className="text-gray-400 text-sm">
            Author at Properly Store
          </span>
        </div>
        {/* Status */}
        <div className="lg:justify-self-end md:justify-self-end pr-5">
          <span className="text-red-500 ">Rejected</span>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-400 rounded-full my-2" />
      <div className="grid lg:grid-cols-3 items-center  pb-2 px-2 md:grid-cols-3  grid-cols-1  md:justify-items-center justify-items-center lg:justify-items-start gap-5">
        {/* profile */}
        <div className="lg:h-20 lg:w-20 md:h-20 md:w-20 h-32 w-32 rounded-full bg-gray-300" />
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-lg">Emily Jorgensen</span>
          <span className="text-gray-400 text-sm">
            Author at Properly Store
          </span>
        </div>
        {/* Status */}
        <div className="lg:justify-self-end md:justify-self-end pr-5 flex gap-5">
          <button
            type="button"
            className="text-green-500 border border-green-400 px-2 hover:bg-green-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-red-500 border border-red-400 px-2 hover:bg-red-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicantList;
