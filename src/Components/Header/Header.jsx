import { Link, NavLink } from 'react-router'
import header_logo from '../../assets/images/logo/logo.svg'
import { IoChevronDown, IoSearch } from 'react-icons/io5'
import { FiMenu } from 'react-icons/fi'
const Header = () => {
    // navItems array here
    const navItems = [
        {name: "Home", path: "/"},
        {name: "About us", path: "/about"},
        {name: "Services", path: "/service",
            submenu: [
                {name: "Single Service", path: "/service"},
                {name: "Service Details", path: "/service-details"},
            ]
        },  
        {name: "Projects", path: "/project",
            submenu: [
                {name: "Single Project", path: "/project"},
                {name: "Project Details", path: "/project-details"},
            ]
        },  
        {name: "Pages", path: "/",
            submenu: [
                {name: "About us", path: "/about"},
                {name: "Service", path: "/service"},
                {name: "Service Details", path: "/service-details"},
                {name: "Projects", path: "/project"},
                {name: "Project Details", path: "/project-details"},
                {name: "Team", path: "/team"},
                {name: "Blogs", path: "/blog"},
                {name: "Blog Details", path: "/blog-details"},
                {name: "Price", path: "/price"},
                {name: "Faq", path: "/faq"},
                {name: "Contact", path: "contact"},
                {name: "Error", path: "error"},
            ]
        },
        {name: "Contact", path: "/contact"}, 
    ]
    return (
        <>
            <header className='bg-white rounded-md mt-5 mx-5 px-7.5 py-5 lg:py-0'>
                <div className='flex items-center justify-between'>
                    {/* Header Logo Here */}
                    <div className='w-[10%]'>
                        <Link to="/">
                            <img src={header_logo} alt="Header_Logo" />
                        </Link>
                    </div>
                    {/* Header Navmenu Here */}
                    <div className='w-[75%] hidden md:flex items-center justify-end gap-5 xl:gap-12.5 2xl:pr-75'>
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Main Menu */}
                                <NavLink
                                    to={item.path}
                                    className='flex items-center gap-2 text-heading text-lg font-heading font-medium hover:text-primary transition-all duration-300 ease-in-out py-6'
                                >
                                    {item.name}

                                    {/* Dropdown Icon (only if submenu exists) */}
                                    {item.submenu && (
                                        <IoChevronDown
                                            className="
                                                text-lg mt-0.5
                                                transition-transform duration-300
                                                group-hover:rotate-180
                                            "
                                        />
                                    )}
                                </NavLink>

                                {/* Sub Menu */}
                                {item.submenu && (
                                    <ul
                                        className="
                                            absolute left-0 top-full w-56
                                            bg-white shadow-lg rounded-lg
                                            opacity-0 invisible
                                            translate-y-5
                                            transition-all duration-300 ease-out
                                            group-hover:opacity-100
                                            group-hover:visible
                                            group-hover:translate-y-0
                                        "
                                    >
                                        {item.submenu.map((sub, i) => (
                                            <li key={i}>
                                                <NavLink
                                                    to={sub.path}
                                                    className="block px-5 py-2 text-heading hover:bg-primary hover:text-white transition"
                                                >
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Header Right Part Here */}
                    <div className='lg:w-[15%] xl:w-[20%] lg:flex gap-2.5 justify-end hidden'>
                        {/* Header Search here */}
                        <div className='relative w-13 h-13'>
                            <input type="text" className='w-12.5 h-12.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-md outline-0 cursor-pointer'/>
                            <IoSearch className='text-2xl text-heading absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] cursor-pointer'/>
                        </div>
                        {/* Header BTN Here */}
                        <Link to="/contact" className="primary-btn group">
                            <div className="btn-wrapper group">
                                <span className="opacity-0">Let's Talk</span>
                                <span className="btn-back-text">Let's Talk</span>
                                <span className="btn-front-text">Let's Talk</span>
                            </div>
                        </Link>
                    </div>
                    {/* Mobile Menu Bar Here */}
                    <div className='md:hidden group'>
                        <div className='w-13 h-13 border border-[rgba(0,0,0,0.1)] flex items-center justify-center group-hover:bg-primary transition-all duration-300'>
                            <FiMenu className='text-heading text-3xl cursor-pointer group-hover:text-white transition-all duration-300'/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header