import {AiFillCloseCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
function HomeLayout({ children }) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    return (
        <div>
            <Navbar/>
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu 
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4 lg:hidden"
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
                    </label>
                    <ul className="menu min-h-full p-4 w-48 sm:w-80 bg-base-200 text-base-content">
                        <li className="w-fit text-white border z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            { children }

            <Footer />
        </div>
    );
}

export default HomeLayout;