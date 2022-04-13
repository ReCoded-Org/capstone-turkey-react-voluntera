import PropTypes from 'prop-types';

function TechCard({ name, photo }) {
  return (
    <div className="md:basis-1/3  p-4 text-center flex flex-col align-center items-center">
      <p className="text-2xl pb-2 text-center">{name}</p>
      <img
        src={photo}
        alt={name}
        className="w-80 h-80 lg:rounded-full object-contain"
      />
    </div>
  );
}

export default TechCard;

TechCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
};

TechCard.defaultProps = {
  name: 'React',
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
};
