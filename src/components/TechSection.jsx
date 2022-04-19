import TechCard from './TechCard';

function TechSection() {
  const techInfo = [
    {
      name: 'React Js',
      photo: 'https://www.obg.eu.com/img/technologies/react.png',
      link: 'https://reactjs.org/',
      version: '^17.0.2',
    },
    {
      name: 'Tailwind CSS',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333',
      link: 'https://tailwindcss.com/',
      version: '^3.0.23',
    },
    {
      name: 'Javascript',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
      version: 'ES6 +',
    },
    {
      name: 'Redux',
      photo: 'https://redux.js.org/img/redux.svg',
      link: 'https://redux.js.org/',
      version: '^4.1.2',
    },
    {
      name: 'Github',
      photo:
        'https://icons-for-free.com/iconfiles/png/512/github-1320568266169118061.png',
      link: 'https://github.com/',
      version: '^3.4',
    },
    {
      name: 'Git',
      photo: 'https://gitforwindows.org/img/git_logo.png',
      link: 'https://gitforwindows.org/',
      version: '^2.34.1',
    },
    {
      name: 'EsLint',
      photo:
        'https://seeklogo.com/images/E/eslint-logo-DDFB6EBCF6-seeklogo.com.png',
      link: 'https://eslint.org/',
      version: '^8.11.0',
    },
  ];

  return (
    <div className="text-center p-4 py-12 ">
      <h2 className="text-4xl text-[#026FC2] py-6">Technologies We Used</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {techInfo.map((tech) => {
          return (
            <TechCard
              key={tech.name}
              name={tech.name}
              photo={tech.photo}
              link={tech.link}
              version={tech.version}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechSection;
