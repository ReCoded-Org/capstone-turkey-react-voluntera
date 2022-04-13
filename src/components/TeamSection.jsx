import teamMembers from '../team.json';
import TeamCard from './TeamCard';

function TeamSection() {
  return (
    <div className="text-center p-10 shadow-inner">
      <h2 className="text-4xl  py-6">Team</h2>
      <div className="flex flex-row   justify-center flex-wrap">
        {teamMembers.map((member) => {
          return (
            <TeamCard
              key={member.name}
              name={member.name}
              github={member.github}
              linkedin={member.linkedin}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamSection;
