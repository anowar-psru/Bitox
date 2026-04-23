import { Link } from 'react-router'
import header_logo from '../../assets/images/logo/logo.svg'
import { IoChevronDown, IoSearch } from 'react-icons/io5'
import { FiMenu } from 'react-icons/fi'

const Header = () => {

    const navItems = [
        {name: "Home", path: "/"},
        {name: "About us", path: "/about"},
        {
            name: "Services",
            submenu: [
                {name: "Single Service", path: "/service"},
                {name: "Service Details", path: "/service-details"},
            ]
        },
        {
            name: "Projects",
            submenu: [
                {name: "Single Project", path: "/project"},
                {name: "Project Details", path: "/project-details"},
            ]
        },
        {
            name: "Pages",
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
                {name: "Contact", path: "/contact"},
                {name: "Error", path: "/error"},
            ]
        },
        {name: "Contact", path: "/contact"},
    ]

    return (
        <header className='bg-white rounded-md mt-5 mx-5 px-7.5 py-5 lg:py-0'>
            <div className='flex items-center justify-between'>

                {/* Logo */}
                <div className='w-[10%]'>
                    <Link to="/">
                        <img src={header_logo} alt="Header_Logo" />
                    </Link>
                </div>

                {/* Menu */}
                <div className='w-[75%] hidden md:flex items-center justify-end gap-5 xl:gap-12.5 2xl:pr-75'>
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">

                            {/* Main Menu */}
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    className="flex items-center gap-2 text-lg font-heading font-medium py-6 text-heading hover:text-primary transition-all duration-300"
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                                    )}
                                </Link>
                            ) : (
                                <span className="flex items-center gap-2 text-lg font-heading font-medium py-6 text-heading cursor-pointer group-hover:text-primary transition-all duration-300">
                                    {item.name}
                                    <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                                </span>
                            )}

                            {/* Submenu */}
                            {item.submenu && (
                                <ul className="
                                    absolute left-0 top-full w-56
                                    bg-white shadow-lg rounded-lg
                                    opacity-0 invisible translate-y-5
                                    transition-all duration-300 ease-out
                                    group-hover:opacity-100
                                    group-hover:visible
                                    group-hover:translate-y-0
                                ">
                                    {item.submenu.map((sub, i) => (
                                        <li key={i}>
                                            <Link
                                                to={sub.path}
                                                className="block px-5 py-2 text-heading hover:bg-primary hover:text-white transition"
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>

                {/* Right */}
                <div className='lg:w-[15%] xl:w-[20%] lg:flex gap-2.5 justify-end hidden'>
                    <div className='relative w-13 h-13'>
                        <input className='w-12.5 h-12.5 border border-[rgba(0,0,0,0.1)] rounded-md outline-0'/>
                        <IoSearch className='text-2xl text-heading absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
                    </div>

                    <Link to="/contact" className="primary-btn group">
                        <div className="btn-wrapper">
                            <span className="opacity-0">Let's Talk</span>
                            <span className="btn-back-text">Let's Talk</span>
                            <span className="btn-front-text">Let's Talk</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile */}
                <div className='md:hidden group'>
                    <div className='w-13 h-13 border flex items-center justify-center group-hover:bg-primary transition'>
                        <FiMenu className='text-3xl group-hover:text-white transition'/>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header