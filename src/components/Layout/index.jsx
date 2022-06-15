import { Details } from "../Details";
import { Footer } from "../Footer";
import Header from "../Header";
import { Main } from "../Main";
import { Promotion } from "../Promotion";
import { ShortenLink } from "../Shorten";

export default function Layout() {
  return (
    <>
      <section className="flex items-center w-5/6 h-auto mx-auto flex-col overflow-x-hidden bg-white relative z-10">
        <Header />
        <Main />
      </section>
      <section className="h-auto overflow-x-hidden bg-gray-100 pb-32">
        <div className="w-5/6 mx-auto">
          <ShortenLink />
        </div>
        <Details />
      </section>
      <Promotion />
      <Footer />
    </>
  );
}
