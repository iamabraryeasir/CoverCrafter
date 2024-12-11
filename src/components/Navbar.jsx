import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center py-2 px-2 bg-gray-100 rounded-lg mt-3">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/printer.png" alt="CoverCrafter" className="w-8 h-8" />
            <span>
              Cover<span className="text-blue-500">Crafter</span>
            </span>
          </NavLink>
        </div>
        <a
          href="https://github.com/iamabraryeasir/CoverCrafter"
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Navbar;
