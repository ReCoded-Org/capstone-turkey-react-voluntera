import UsersProjectsCard from '../../components/UsersProjectsCard';

function User() {
  const cards = [
    {
      id: '1',
      title: 'New technology 2022',
      description:
        ' Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      id: '2',
      title: 'New technology 2022',
      description:
        ' Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      id: '3',
      title: 'New technology 2022',
      description:
        ' Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      id: '4',
      title: 'New technology 2022',
      description:
        ' Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
  ];
  const skills = [
    'Problem Soving',
    'Internet Knowledge',
    'Teamwork',
    'Organising Management',
  ];
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 py-5 ">
        {/* user personal details col */}
        <div className=" py-2 pl-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-4 items-center place-items-center ">
          <div className="col-span-2 order-1 sm:order-none px-5">
            <h1 className="text-blue-500 text-2xl py-2 lg:text-3xl">
              Tom Holland
            </h1>
            <div className="text-md">
              <p>
                <strong>Username: </strong> username34
              </p>
              <p>
                <strong>User Type: </strong> Volunteer / Organisation
              </p>
              <p>
                <strong>Date of Birth: </strong> 2022-03-10
              </p>
              <p>
                <strong>age: </strong> 25
              </p>
              <p>
                <strong>email: </strong> user@gmail.com
              </p>
              <p>
                <strong>phone: </strong> +90 (321) 123456
              </p>
            </div>
            {/* skills */}
            <p className="mt-3 flex flex-wrap gap-1">
              <strong className="text-lg text-blue-500 mr-2">SKILLS: </strong>
              {skills.map((skill) => {
                return (
                  <span className="border-r-2 border-r-blue-400 pr-2 px-1">
                    {skill}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="w-48 h-48 lg:w-52 lg:h-52 md:w-52 md:h-52 rounded-full  border-2 p-1 col-span-1">
            <img
              src="https://www.pngitem.com/pimgs/m/75-758282_walter-circle-person-photo-in-circle-hd-png.png"
              alt="somethine"
              className="rounded-full"
            />
          </div>
        </div>
        {/* projects col */}
        <div className=" px-2 py-2">
          <h1 className="text-blue-500 text-2xl text-center mb-5  pb-2">
            Project Assigned
          </h1>
          <div className=" p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 place-items-center items-center">
            {cards.map((card) => {
              return <UsersProjectsCard key={card.id} userdata={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
