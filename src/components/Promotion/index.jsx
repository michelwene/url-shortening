import { Button } from "../Button";

export function Promotion() {
  return (
    <div className="h-48 flex items-center justify-center bg-[url('/public/images/bg-boost-desktop.svg')] bg-center bg-cover bg-no-repeat bg-[#3A3054]">
      <div className="flex flex-col gap-y-6 items-center">
        <h4 className="text-white font-extrabold text-3xl">
          Boost your links today
        </h4>
        <Button className="h-12 px-8 py-2.5 bg-teal-500 text-white rounded-full font-bold hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:rign-teal-700 focus:shadow-outline-teal">
          Get started
        </Button>
      </div>
    </div>
  );
}
