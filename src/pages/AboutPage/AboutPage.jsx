import './AboutPage.css';

function AboutPage() {
  return (
    <div className="flex flex-col justify-around items-center about-hero bg-cover p-4 pb-44">
      <h1 className="text-6xl about-header">Voluntera</h1>
      <p className="w-2/5 about-description">
        Valuntera is a place where volunteers can find their desired
        organization to volunteer as well as companies and organizations can
        promote their projects and events which need volunteers.{' '}
      </p>
      <button
        type="button"
        className="bg-[#573C9B] p-3 rounded px-5 text-white get-started-button"
      >
        Get Started
      </button>
    </div>
  );
}

export default AboutPage;
