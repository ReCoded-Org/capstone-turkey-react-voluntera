import ApplicantList from '../components/ApplicantList';
import ProjectContent from '../components/ProjectContent';

const projectimage = '../assets/images/project.jpg';

function Project() {
  const applicants = [
    {
      id: '1',
      name: 'Emily Jonsen',
      position: 'Manager at Company',
      applicationStatus: 'accepted',
    },
    {
      id: '2',
      name: 'Sara Bush',
      position: 'Author at Company',
      applicationStatus: 'rejected',
    },
    {
      id: '3',
      name: 'Hilary Amber',
      position: 'Cashier at Company',
      applicationStatus: 'null',
    },
  ];
  return (
    <div className="container mx-auto px-8 py-6">
      <ProjectContent projectimg={projectimage} />
      <ApplicantList applicants={applicants} />
    </div>
  );
}

export default Project;
