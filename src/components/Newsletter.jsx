function Newsletter() {
  return (
    <div className="text-center p-10 shadow-inner flex flex-col justify-center items-center ">
      <h2 className="text-4xl text-[#0B0C0D] pt-6 pb-2">News & Updates</h2>
      <p className="pb-6">
        Enter your email below to get news and updates from us
      </p>
      <div className="w-1/2	h-28 bg-white p-6 drop-shadow-2xl rounded flex flex-col align-center">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-white border border-slate-300 hover:border-indigo-300 rounded w-8/12 p-2 mx-2 h-14	"
          />
          <button
            type="submit"
            className="w-3/12 bg-[#573C9B] p-2 rounded  text-white drop-shadow-xl mx-2 h-14	"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
