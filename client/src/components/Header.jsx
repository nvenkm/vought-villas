import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center">
            <span className="text-slate-400">Vought</span>
            <span className="text-slate-700">Villas</span>
          </h1>
        </Link>

        <form className=" flex items-center bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 cursor-pointer hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 cursor-pointer hover:underline">
              About
            </li>
          </Link>

          <Link to="/signin">
            <li className="text-slate-700 cursor-pointer hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
