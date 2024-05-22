import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-sky-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Next Log
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/mohsen-zamani-developer/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/moshinzamani"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
