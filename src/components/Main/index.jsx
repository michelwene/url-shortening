import { Button } from "../Button";

export function Main() {
  return (
    <main className="flex items-center w-full h-[35rem]">
      <div className="w-1/2 h-full flex flex-col items-start justify-center gap-y-4 pl-1">
        <h1 className="font-extrabold text-6xl text-zinc-800">
          More than just shorter links
        </h1>
        <p className="font-medium text-zinc-400">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button className="px-8 py-2.5 bg-teal-500 text-white rounded-full font-bold hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:rign-teal-700 focus:shadow-outline-teal">
          Get Started
        </Button>
      </div>
      <div className="w-1/2 h-full ">
        <div className="h-5/6 w-5/6 bg-[url('/public/images/illustration-working.svg')] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </main>
  );
}
