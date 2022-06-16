export function Details() {
  return (
    <div className="w-5/6 mx-auto mt-28 flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h3 className="font-extrabold text-zinc-700 text-3xl sm:text-center">
          Advanced Statistics
        </h3>
        <p className="text-zinc-400 text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex gap-x-4 mt-16 h-auto max-h-80 justify-center flex-wrap sm:gap-y-16">
        <div className="bg-white rounded-md px-8 h-full pb-4 max-w-sm">
          <div className="w-20 h-20 rounded-full p-4 bg-[#222026] flex items-center justify-center bg-[url('/public/images/icon-brand-recognition.svg')] bg-center bg-no-repeat bg-auto relative -top-8" />
          <h4 className="text-zinc-700 font-extrabold text-lg my-4">
            Brand Recognition
          </h4>
          <p className="text-zinc-400 font-normal my-4">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white rounded-md px-8 min-h-min pb-4 max-w-sm">
          <div className="w-20 h-20 rounded-full p-4 bg-[#222026] flex items-center justify-center bg-[url('/public/images/icon-detailed-records.svg')] bg-center bg-no-repeat bg-auto relative -top-8" />
          <h4 className="text-zinc-700 font-extrabold text-lg my-4">
            Detailed Records
          </h4>
          <p className="text-zinc-400 font-normal">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white rounded-md px-8 min-h-min pb-4 max-w-sm">
          <div className="w-20 h-20 rounded-full p-4 bg-[#222026] flex items-center justify-center bg-[url('/public/images/icon-fully-customizable.svg')] bg-center bg-no-repeat bg-auto relative -top-8" />
          <h4 className="text-zinc-700 font-extrabold text-lg my-4">
            Fully Customizable
          </h4>
          <p className="text-zinc-400 font-normal">
            Improve brand awareness and content discoberability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
