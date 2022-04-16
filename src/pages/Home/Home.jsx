import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Home() {
  const exampleData = [
    {
      projectName: 'Project Name 1',
      field:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      deadline: '12/05/2022',
    },
    {
      projectName: 'Project Name 2',
      field:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      deadline: '13/05/2022',
    },
    {
      projectName: 'Project Name 3',
      field:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      projectName: 'Project Name 4',
      field:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      deadline: '14/05/2022',
    },
  ];
  return (
    <div className="py-10 px-16">
      <h1 className="text-3xl text-blue-500 px-16">Available Projects</h1>

      <div className="px-16 flex gap-3 text-blue-500 mt-4 font-bold">
        <button
          type="button"
          className="bg-blue-700 text-white px-3 py-2 rounded-md font-bold"
        >
          All Projects
        </button>
        <button type="button">Recent Projects</button>
        <button type="button">Social Events</button>
        <button type="button">some filter</button>
        <button type="button">some filter</button>
      </div>
      <div className="flex gap-5 justify-center flex-wrap my-5 ">
        {exampleData.map((data) => (
          <ProjectCard
            key={data.projectName}
            projectName={data.projectName}
            field={data.field}
            deadline={data.deadline}
          />
        ))}
      </div>
    </div>
  );
}
