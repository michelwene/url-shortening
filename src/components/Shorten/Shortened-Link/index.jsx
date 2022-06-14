import { Button } from "../../Button";

export function ShortenedLink() {
  return (
    <div className="w-full  mt-6">
      <div className="flex items-center justify-between bg-white py-4 px-6 rounded-md">
        <div>
          <p className="text-zinc-600 font-bold">
            https://www.frontendmentor.io
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="text-teal-400 font-bold">https://rel.ink/k4lKyk</p>
          <Button className="text-white font-bold bg-teal-400 py-2 px-8 rounded-md hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:rign-teal-700 focus:shadow-outline-teal">
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}
