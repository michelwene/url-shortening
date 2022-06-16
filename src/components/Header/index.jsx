import { Logo } from "../Logo/index.jsx";
import { Button } from "../Button/index.jsx";
export default function Header() {
  return (
    <div className="flex h-20 w-full justify-between">
      <div className="flex gap-x-8 ">
        <Logo />
        <ul className="flex items-center gap-x-4 font-bold text-zinc-400 sm:hidden md:flex">
          <li>
            <a href="/" className="hover:text-gray-700 hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-700 hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-700 hover:underline">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center sm:gap-x-4 md:gap-x-8">
        <Button
          type="button"
          className="bg-transparent font-bold text-zinc-400"
        >
          Login
        </Button>
        <Button
          type="button"
          className="bg-teal-500 sm:font-semibold md:font-bold text-white rounded-3xl py-1  sm:px-2 md:px-6 h-10 hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-500 focus:shadow-outline-teal"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
