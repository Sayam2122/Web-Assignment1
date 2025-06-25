import { Link } from "react-router-dom";
function Navbar({ watchLaterCount }) {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/">Mini YouTube</Link>
      <input type="text" placeholder="Search..." className="px-2" />
      <Link to="/watchlater">Watch Later ({watchLaterCount})</Link>
    </nav>
  );
}
export default Navbar;