import { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import UsersProjectsCard from '../../components/UsersProjectsCard';
import AddNewProjectModal from '../../components/AddNewProjectModal';

function User() {
  const user = useSelector((state) => state.user.user);
  const [isClick, setisClick] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 py-5 ">
        {/* user personal details col */}
        <div className=" py-2 pl-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-4 items-center place-items-center ">
          <div className="col-span-2 order-1 sm:order-none px-5">
            <h1 className="text-blue-500 text-2xl py-2 lg:text-3xl">
              {user?.firstName} {user?.lastName}
            </h1>
            <div className="text-md">
              <p>
                <strong>Username: </strong> {user?.username}
              </p>
              <p>
                <strong>User Type: </strong> {user?.userType}
              </p>
              <p>
                <strong>Date of Birth: </strong>{' '}
                {moment(user?.birthDate).utc().format('MM/DD/YYYY')}
              </p>
              <p>
                <strong>email: </strong> {user?.email}
              </p>
              <p>
                <strong>phone: </strong> {user?.phone || 'N/A'}
              </p>
              {user?.address && (
                <p>
                  <strong>address: </strong> {user?.address || 'N/A'}
                </p>
              )}
            </div>
            {/* skills */}
            <p className="mt-3 flex flex-wrap gap-1">
              <strong className="text-lg text-blue-500 mr-2">
                {user?.skills ? (
                  'SKILLS :'
                ) : (
                  <div>
                    Description:{' '}
                    <span className="text-slate-500 text-md font-normal">
                      {user?.description}
                    </span>
                  </div>
                )}
              </strong>
              {user?.skills?.map((skill) => {
                return (
                  <span
                    key={skill}
                    className="border-r-2 border-r-blue-400 pr-2 px-1"
                  >
                    {skill}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="w-48 h-48 lg:w-52 lg:h-52 md:w-52 md:h-52 rounded-full  border-2 p-1 col-span-1">
            <img
              src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
              alt="somethine"
              className="rounded-full"
            />
          </div>
        </div>
        {/* add project */}
        {user?.userType === 'Organization' && (
          <button
            type="button"
            className=" px-4 py-1 border bg-purple-400 w-36 ml-7"
            onClick={() => setisClick(!isClick)}
          >
            Add project
          </button>
        )}
        <div className={isClick ? 'block' : 'hidden'}>
          <AddNewProjectModal />
        </div>
        {/* projects col */}
        <div className=" px-2 py-2 text-center">
          <h1 className="text-blue-500 text-2xl text-center mb-5  pb-2">
            Project Assigned
          </h1>
          <div className=" p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 place-items-center items-center justify-center">
            {user?.projects?.map((card) => {
              return <UsersProjectsCard key={card} userdata={card} />;
            })}
          </div>
          <div className="max-w-7xl ">
            {!user?.projects?.length > 0 ? (
              <span className="text-3xl text-slate-700 flex justify-center">
                You have no projects assigned !
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
