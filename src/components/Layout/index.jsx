import Header from "../Header";
import { Main } from "../Main";

export default function Layout() {
  return (
    <div className="flex items-center w-5/6 h-screen mx-auto flex-col overflow-x-hidden">
      <Header />
      <Main />
    </div>
  );
}
