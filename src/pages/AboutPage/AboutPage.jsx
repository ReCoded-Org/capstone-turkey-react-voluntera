import './AboutPage.css';
import TechSection from '../../components/TechSection';

function AboutPage() {
  return (
    <>
      <div className="flex flex-col justify-around items-center about-hero bg-cover p-4 pb-44">
        <h1 className="text-6xl text-[#4192d1] font-[400] leading-[63px] text-center tracking-[-1px]">
          Voluntera
        </h1>
        <p className="md:w-2/5 text-center py-2 text-[#21567e] font-[400] text-2xl  tracking-[-0.5px] leading-[26px] ">
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
      <TechSection />
    </>
  );
}

export default AboutPage;
