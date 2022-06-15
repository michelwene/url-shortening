import { useState } from "react";
import { Button } from "../Button";
import { ShortenedLink } from "./Shortened-Link";
import { api } from "../../services/api";

export function ShortenLink() {
  const [link, setLink] = useState("");
  const [shortenedLink, setshortenedLink] = useState([]);

  const handleSubmit = async () => {
    try {
      const { data } = await api.get(`/shorten?url=${link}`);

      setshortenedLink((prevState) => [...prevState, data.result]);
    } catch (err) {
      console.log(err);
    }
  };
  const newShortenedLink = shortenedLink.filter(
    (element, index) =>
      index ===
      shortenedLink.findIndex(
        (elem) =>
          elem.code === element.code &&
          elem.original_link === element.original_link
      )
  );
  return (
    <>
      <div className=" h-32 mx-auto bg-[url('/public/images/bg-shorten-desktop.svg')] bg-no-repeat bg-center bg-cover bg-[#3A3054] rounded-md">
        <div className="w-4/5 h-full mx-auto flex items-center justify-center gap-x-4">
          <input
            type="text"
            className="flex-1 h-12 rounded-md px-4  placeholder:text-zinc-400 focus:outline-none focus:ring focus:rign-purple-500 focus:shadow-outline-purple"
            placeholder="Shorten a link here..."
            onChange={(e) => setLink(e.target.value)}
          />
          <Button
            onClick={() => handleSubmit()}
            type="submit"
            className="h-12 px-8 py-2.5 bg-teal-500 text-white rounded-md font-bold hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:rign-teal-700 focus:shadow-outline-teal"
          >
            Shorten It!
          </Button>
        </div>
      </div>
      {newShortenedLink?.map((link) => (
        <ShortenedLink originalLink={link} key={link.code} />
      ))}
    </>
  );
}
