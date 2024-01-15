import { FaBars } from 'react-icons/fa';
import { Bs4CircleFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
    return (
        <header className="bg-gray-900 p-4">
            <div className="container flex h-72px">                
           
            <div className="text-white text-2xl mr-5 p-1">
                    <FaBars />
                </div>
                <div className="text-white text-2xl mr-1">SUA</div>
                <div className="text-orange-500 text-2xl font-bold">LOGO</div>
                {/* Navigation Links */}
              
                <nav className="ml-auto lg:ml-auto lg:relative lg:left-20 2xl:left-40 flex">
                    <div className="text-gray-600 mr-4 p-1 text-2xl">
                    <Bs4CircleFill />
                    </div>
                    <a href="#" className="text-white text-sm mr-1 p-1 font-light ">Fabio C Pinto</a>
                    <div className="text-white ml-2 text-sm p-2">
                    <AiFillCaretDown />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header