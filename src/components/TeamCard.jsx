import PropTypes from 'prop-types';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function TeamCard({ name, github, linkedin, profile, role }) {
  return (
    <div className="max-w-xs py-4 px-1 text-center shadow-xl  flex gap-2 flex-col align-center items-center">
      <img
        src={
          profile !== ''
            ? profile
            : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
        }
        alt="profile avatar"
        className="rounded-full h-36 w-auto"
      />
      <span className="text-lg w-48 font-semibold">{name}</span>
      <span className="text-sm w-48 text-slate-500">
        <strong>Role:</strong> {role}
      </span>
      <div className="flex gap-1">
        <a
          href={github}
          rel="noreferrer"
          target="_blank"
          className="p-2 hover:border-b-2 border-b-2 hover:translate-y-0.5 transition-all border-b-white hover:border-b-gray-700"
        >
          <BsGithub size={30} className="text-gray-700" />
        </a>
        <a
          href={linkedin}
          rel="noreferrer"
          target="_blank"
          className="p-2 hover:border-b-2 border-b-2 hover:translate-y-0.5  transition-all border-b-white hover:border-b-blue-500"
        >
          <BsLinkedin size={30} className="text-blue-500" />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;

TeamCard.propTypes = {
  name: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  profile: PropTypes.string,
  role: PropTypes.string,
};

TeamCard.defaultProps = {
  name: 'Team Member',
  github: 'github link',
  linkedin: 'linkedin link',
  profile: 'image link',
  role: 'Contributer',
};
