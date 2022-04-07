import TechCard from './TechCard';

function TechSection() {
  const techInfo = [
    {
      name: 'React Js',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    },
    {
      name: 'Tailwind CSS',
      photo: 'https://miro.medium.com/max/712/1*Uu5RnBRw-At-D5Ko0fMf4w.png',
    },
    {
      name: 'Javascript',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    },
  ];

  return (
    <div className="text-center p-4 py-12">
      <h2 className="text-4xl text-[#026FC2] py-6">Technologies We Used</h2>
      <div className="flex flex-row justify-center flex-wrap">
        {techInfo.map((tech) => {
          return (
            <TechCard key={tech.name} name={tech.name} photo={tech.photo} />
          );
        })}
      </div>
    </div>
  );
}

export default TechSection;
