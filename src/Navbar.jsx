import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className="flex wrap justify-end items-center p-4 bg-blue-400">
        <ul className="flex space-x-5">
        <li className="bg-red-300 rounded p-2 text-black"><Link to="/">Signup</Link></li>
        <li className="bg-red-300 rounded p-2 text-black"><Link to="/login">Login</Link></li>
        </ul>
        </div>
    )
}
export default Navbar
