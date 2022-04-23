import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ApplicantList from '../../components/ApplicantList';
import ProjectContent from '../../components/ProjectContent';

function Project() {
  const params = useParams();
  const project = useSelector((state) => state.projects.list);
  /* eslint no-underscore-dangle: 0 */
  const filteredP = project.filter((x) => x._id === params.pId).map((p) => p);

  return (
    <div className="container mx-auto px-8 py-6">
      {filteredP.map((p) => {
        return (
          <div key={p._id}>
            <ProjectContent
              title={p.title}
              date={p.createdAt}
              skills={p.necessarySkills}
              type={p.type}
              creator={p.creator}
              address={p.address}
              id={p._id}
              isOpen={p.isOpen}
            />
            <ApplicantList applicants={p.applications} />
          </div>
        );
      })}
    </div>
  );
}

export default Project;
