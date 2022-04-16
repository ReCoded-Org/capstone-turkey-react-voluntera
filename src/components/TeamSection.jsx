import teamMembers from '../team.json';
import TeamCard from './TeamCard';

function TeamSection() {
  return (
    <div className="text-center p-4 shadow-inner  pb-16">
      <h2 className="text-4xl text-blue-700  py-6">Team</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {teamMembers.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              github={member.github}
              linkedin={member.linkedin}
              profile={member.profileImage}
              role={member.rol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
