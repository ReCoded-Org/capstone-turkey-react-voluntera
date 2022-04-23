import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { getProjects } from '../../redux/slices/projectsSlice';

export default function Home() {
  const projects = useSelector((state) => state.projects.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

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
        <button type="button" onClick={() => dispatch(getProjects())}>
          Recent Projects
        </button>
        <button type="button">Social Events</button>
        <button type="button">some filter</button>
        <button type="button">some filter</button>
      </div>
      <div className="flex gap-5 justify-center flex-wrap my-5 ">
        {projects?.map((data) => (
          <ProjectCard
            /* eslint no-underscore-dangle: 0 */
            key={data._id}
            id={data._id}
            projectName={data.title}
            field={data.type}
            deadline={data.date.slice(0, 7)}
          />
        ))}
      </div>
    </div>
  );
}
