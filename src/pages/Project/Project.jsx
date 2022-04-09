import ApplicantList from '../../components/ApplicantList';
import ProjectContent from '../../components/ProjectContent';

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
  const project = [
    {
      id: '1',
      name: 'Clean Environment',
      description:
        ' You can load project details such as the project name, classification, and type, as well as the start and end dates, to existing and new projects. You load project details to existing projects by using a data file with the same format as the ProjectDetails.csv data load file',
      date: 'Mar 12 2020',
      skills: ['Public speaking', 'Teaching', ' Good communication'],
      address: '16 Woodlawn Terrace, Waterbury, ct, 6310 United States',
      time: 'Part-Time',
      applicants: '495',
      image:
        'https://retaintechnologies.com/wp-content/uploads/2020/04/Project-Management-Mantenimiento-1.jpg',
    },
  ];
  return (
    <div className="container mx-auto px-8 py-6">
      <ProjectContent project={project} />
      <ApplicantList applicants={applicants} />
    </div>
  );
}

export default Project;
