import ApplicantList from '../components/ApplicantList';
import ProjectContent from '../components/ProjectContent';

function Project() {
  return (
    <div className="container mx-auto px-8 py-6">
      <ProjectContent />
      <ApplicantList />
    </div>
  );
}

export default Project;
