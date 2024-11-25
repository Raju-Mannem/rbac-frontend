import React,{useState} from "react";
import { Link } from "react-router-dom";
import './index.css'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="shadow-xl w-full h-16 z-10 text-xl sticky top-0 bg-white">
  <ul className="w-full flex justify-evenly items-center py-4 px-24" id="nav-ul">
    <li>
      <p className="text-2xl font-bold">VRV RBAC</p>
    </li>
    <li className="group">
      <Link to="/" className="relative inline-block text-lg font-semibold">
        Home
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
    <li className="group">
      <Link to="/dashboard" className="relative inline-block text-lg font-semibold">
        Dashboard
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  </ul>
</div>

  );
};

export default Navbar;
