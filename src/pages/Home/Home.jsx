import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { getProjects } from '../../redux/slices/projectsSlice';
import loader from '../../assets/images/ripple.svg';

import Contact from '../Contact';
import HomeHero from '../../components/HomeHero';

export default function Home() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      <HomeHero />
      <div className="py-10 lg:px-8 xl:px-8 ">
        <div className="px-8 flex gap-3 text-blue-500 mt-4 font-bold">
          <span className="border rounded-full px-3 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer">
            All Projects
          </span>
          <span className="border rounded-full px-3 border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer focus:bg-blue-500 focus:text-white">
            Recent Projects
          </span>
        </div>
        <div className="flex gap-5 justify-center flex-wrap my-5 py-5 ">
          {projects.status === 'loading' ? (
            <div>
              <img src={loader} alt="loader" />
            </div>
          ) : (
            projects?.list?.map((data) => (
              <ProjectCard
                /* eslint no-underscore-dangle: 0 */
                key={data._id}
                id={data._id}
                projectName={data.title}
                field={data.type}
                deadline={data.date.slice(0, 7)}
              />
            ))
          )}
        </div>
        <hr />
        <Contact />
      </div>
    </div>
  );
}
