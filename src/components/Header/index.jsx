import { Logo } from "../Logo/index.jsx";
import { Button } from "../Button/index.jsx";
export default function Header() {
  return (
    <div className="flex h-20 w-full justify-between">
      <div className="flex gap-x-8">
        <Logo />
        <ul className="flex items-center gap-x-4 font-bold text-zinc-400 ">
          <li>
            <a href="/" className="hover:text-gray-500 hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-500 hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-500 hover:underline">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-x-8 items-center">
        <Button
          type="button"
          className="bg-transparent font-bold text-zinc-400"
        >
          Login
        </Button>
        <Button
          type="button"
          className="bg-teal-500 font-bold text-white rounded-3xl px-6 py-1 h-10 hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-500 focus:shadow-outline-teal"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
