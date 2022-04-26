import landing from '../assets/images/volunteer.jpg';

export default function HomeHero() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255,255,255,1),transparent), url(${landing})`,
        height: '45vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center top ',
        backgroundSize: 'cover',
        objectFit: 'fill',
        objectPosition: 'center top',
      }}
    />
  );
}
