import { useEffect, useState } from "react";
import { Button } from "../../Button";

export function ShortenedLink({ originalLink }) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(originalLink.full_short_link);
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 1000);
  }, [copied]);

  return (
    <div className="w-full  mt-4 sm:h-auto">
      <div className="flex items-center justify-between bg-white py-4 px-6 sm:px-2 md:px-6 rounded-md sm:flex-col md:flex-row sm:gap-y-4 md:gap-y-0">
        <div>
          <p className="text-zinc-600 font-bold">
            {originalLink.original_link}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <a
            href={originalLink.full_short_link}
            className="text-teal-400 font-bold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {originalLink.full_short_link}
          </a>
          {copied ? (
            <Button className="text-white font-bold bg-[#3A3054] py-2 sm:px-2 md:px-8 rounded-md cursor-not-allowed ">
              Copied!
            </Button>
          ) : (
            <Button
              onClick={copyText}
              className="text-white font-bold bg-teal-400 py-2 sm:px-4 md:px-8 rounded-md hover:opacity-70 active:bg-teal-700 focus:outline-none focus:ring focus:rign-teal-700 focus:shadow-outline-teal"
            >
              Copy
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
