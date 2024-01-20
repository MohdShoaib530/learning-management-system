import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" hidden lg:flex w-full">
      <div className=" bg-gray-400 p-2  fixed flex items-center w-full justify-between">
        {/* Logo */}
        <div className="w-fit">
          <Link to="/" className="text-white text-xl font-bold">
            <div className="avatar online placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span className="text-xl">Edu</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full flex items-center justify-evenly">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link to="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="w-20 xl:w-max p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        />

        {/* Sign Up and Sign In Buttons */}
        <div className=" flex flex-row items-center justify-end gap-x-3  w-full">
          <button className="bg-blue-500 text-white px-2 py-1 lg:px-4 lg:py-1 rounded-md hover:bg-blue-400">
            Sign Up
          </button>
          <button className="bg-green-500 text-white lg:px-4 lg:py-1 rounded-md hover:bg-green-600">
            Sign In
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
