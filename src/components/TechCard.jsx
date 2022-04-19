import PropTypes from 'prop-types';

function TechCard({ name, photo, link, version }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:-translate-y-1.5 transition-all ease-in-out"
    >
      <div className="max-w-xs  rounded-md   shadow-xl px-2 pb-3">
        <div className=" rounded-full border-b-2 drop-shadow-lg shadow-xl ">
          {' '}
          <img className="h-440 w-44 rounded-full" src={photo} alt="" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-700 ">
            {name}
          </h5>
        </div>
        <span className="text-slate-500">Version: {version}</span>
      </div>
    </a>
  );
}

export default TechCard;

TechCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  link: PropTypes.string,
  version: PropTypes.string,
};

TechCard.defaultProps = {
  name: 'React',
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
  link: '',
  version: '',
};
