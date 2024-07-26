import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

const routes = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/product", name: "Product", icon: <FaUser /> },
    { path: "/downloadPolicy", name: "Download Your Policy", icon: <MdMessage /> },
    { path: "/grievance", name: "Grievance", icon: <BiAnalyse /> },
    { path: "/login", name: "Login", icon: <BsCartCheck /> },
    { path: "/lodgeClaim", name: "Lodge Claim", icon: <AiFillHeart /> },
];

const SidebarHorizontal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const animations = {
        container: { 
            width: isOpen ? '200px' : '60px', 
            transition: { duration: 0.5, type: 'spring', damping: 10 }, 
            height: '100vh' 
        },
        input: { 
            hidden: { width: 0, padding: 0, transition: { duration: 0.2 } }, 
            show: { width: '140px', padding: '5px 15px', transition: { duration: 0.2 } } 
        },
        content: { 
            hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } }, 
            show: { opacity: 1, width: 'auto', transition: { duration: 0.5 } } 
        }
    };

    return (
        <div className="flex h-full">
            <motion.div animate={animations.container} className="bg-blue-900 text-white h-screen">
                <div className="flex items-center justify-between p-4">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h1 variants={animations.content} initial="hidden" animate="show" exit="hidden" className="text-xl font-bold">
                                M N N L R
                            </motion.h1>
                        )}
                    </AnimatePresence>
                    <FaBars onClick={toggle} className="text-2xl cursor-pointer" />
                </div>
                <div className="search flex items-center p-4">
                    <BiSearch className="text-4xl" />
                    <AnimatePresence>
                        {isOpen && (
                            <motion.input
                                variants={animations.input}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                type="text"
                                placeholder="Search"
                                className="ml-4 p-2 bg-gray-200 rounded border-none w-full text-black"
                            />
                        )}
                    </AnimatePresence>
                </div>
                <nav>
                    {routes.map((route, index) => (
                        <NavLink
                            to={route.path}
                            key={index}
                            className="flex items-center gap-2 p-4 text-white hover:bg-blue-800 transition-colors duration-200"
                            activeClassName="bg-blue-800"
                        >
                            <div className="text-2xl">{route.icon}</div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={animations.content}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="text-sm"
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </nav>
            </motion.div>
            <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
    );
};

export default SidebarHorizontal;
