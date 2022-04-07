import PropTypes from 'prop-types';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function TeamCard({ name, github, linkedin }) {
  return (
    <div className="md:basis-1/3  p-4 text-center flex flex-col align-center items-center">
      <p>{name}</p>
      <div className="flex flex-row">
        <a href={github} rel="noopener noreferrer" className="p-2">
          <BsGithub size={30} />
        </a>
        <a href={linkedin} rel="noopener noreferrer" className="p-2">
          <BsLinkedin size={30} />
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
};

TeamCard.defaultProps = {
  name: 'Team Member',
  github: 'github link',
  linkedin: 'linkedin link',
};
