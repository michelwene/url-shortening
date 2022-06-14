import Header from "../Header";
import { Main } from "../Main";
import { ShortenLink } from "../Shorten";

export default function Layout() {
  return (
    <div className="flex items-center w-5/6 h-screen mx-auto flex-col overflow-x-hidden">
      <Header />
      <Main />
      <ShortenLink />
    </div>
  );
}
