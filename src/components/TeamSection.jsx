import teamMembers from '../team.json';
import TeamCard from './TeamCard';

function TeamSection() {
  console.log(teamMembers);
  return (
    <div className="text-center p-4 pt-12 shadow-inner">
      <h2 className="text-4xl text-[#026FC2] py-6">Team</h2>
      <div className="flex flex-row md:justify-start  justify-center flex-wrap">
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
