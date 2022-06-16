import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
} from "../../assets/icons.jsx";
import { Logo } from "../Logo/index.jsx";

export function Footer() {
  return (
    <footer className="bg-[#222026] h-auto sm:w-screen md:w-full">
      <div className="sm:w-full md:w-11/12 lg:w-5/6 mx-auto flex items-start justify-between sm:items-center md:items-start py-16 sm:flex-col md:flex-row sm:gap-y-8 md:gap-y-0">
        <Logo fill="#fff" />
        <div className="flex text-white gap-x-16 sm:flex-col md:flex-row sm:gap-y-8 md:gap-y-0 sm:text-center md:text-left">
          <div>
            <h5 className="font-bold mb-4">Features</h5>
            <div className="flex flex-col gap-y-2">
              <a href="/" className="hover:text-teal-500">
                Link Shortening
              </a>
              <a href="/" className="hover:text-teal-500">
                Branded Links
              </a>
              <a href="/" className="hover:text-teal-500">
                Analytics
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-4">Resources</h5>
            <div className="flex flex-col gap-y-2">
              <a href="/" className="hover:text-teal-500">
                Blog
              </a>
              <a href="/" className="hover:text-teal-500">
                Developers
              </a>
              <a href="/" className="hover:text-teal-500">
                Support
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <div className="flex flex-col gap-y-2">
              <a href="/" className="hover:text-teal-500">
                About
              </a>
              <a href="/" className="hover:text-teal-500">
                Our Team
              </a>
              <a href="/" className="hover:text-teal-500">
                Careers
              </a>
              <a href="/" className="hover:text-teal-500">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4">
          <IconFacebook />
          <IconTwitter />
          <IconPinterest />
          <IconInstagram />
        </div>
      </div>
    </footer>
  );
}
