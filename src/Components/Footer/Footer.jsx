import { Link } from "react-router"
import footer_logo from '../../assets/images/logo/footer_logo.svg'
const Footer = () => {
    const footerSocial = [
        {id:1, name: "Instagram", path: "/"},
        {id:2, name: "Behance", path: "/"},
        {id:3, name: "Dribble", path: "/"},
        {id:4, name: "Linkedin", path: "/"},
        {id:5, name: "Facebook", path: "/"},
        {id:6, name: "Youtube", path: "/"},
    ]
    return (
        <>
            <footer className="bg-heading px-18.75 pt-22.5">
                {/* Footer Top Part Here */}
                <div className="flex items-end gap-15">
                    <div className="w-[60%]">
                        <Link to="/">
                            <img src={footer_logo} alt="footer_logo" />
                        </Link>
                    </div>
                    <div className="w-[40%]">
                        <div className="flex items-center gap-3.5">
                            {/* Mail Info Here */}
                            <div className="border-color-2 footer-info w-[50%]">
                                <Link to="mailto:infocon@example.com">infocon@example.com</Link>
                            </div>
                            {/* Phone Info Here */}
                            <div className="border-color-2 footer-info w-[50%]">
                                <Link to="tel:123456789">(+00685689696)</Link>
                            </div>
                        </div>
                        {/* Footer Contact Info Here */}
                        <div className="border-color-2 text-white flex items-center justify-center text-xl text-center leading-7.5 font-medium font-heading py-6.25 px-28 mt-3.5 ">
                            <address>
                                2400 Market Street, Suite 1200 Philadelphia, PA 19103, United States
                            </address>
                        </div>
                    </div>
                </div>
                {/* Footer Social Info Here */}
                <div className="grid grid-cols-6 gap-5 my-22.5">
                    {
                        footerSocial.map((item) => (
                            <div key={item.id}>
                                <a href="/" className="text-white font-bold border border-[rgba(256,256,256,0.1)] rounded-full flex items-center justify-center py-2.75">
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </div>
                {/* Footer Bottom Part Here */}
                <div className="flex items-center justify-between border-t border-t-[rgba(256,256,256,0.1)] py-2.5">
                    <div>
                        <p className="text-white">Copyright © 2026 Bitox, All Rights Reserved.</p>
                    </div>
                    <div className="w-15 h-17.5 flex items-center justify-center bg-primary rounded-b-[20px] rounded-t-md">
                        <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6572 9.51453C17.8767 9.30145 18 9.01262 18 8.71147C18 8.41032 17.8767 8.12148 17.6572 7.90841L9.8434 0.332347C9.62363 0.119535 9.32573 0 9.01513 0C8.70453 0 8.40663 0.119535 8.18687 0.332347L0.373044 7.90841C0.257889 8.01245 0.165526 8.13791 0.101466 8.2773C0.0374048 8.4167 0.00295911 8.56718 0.00018241 8.71977C-0.00259429 8.87236 0.026355 9.02392 0.0853041 9.16542C0.144253 9.30693 0.231994 9.43547 0.343292 9.54338C0.45459 9.65129 0.587165 9.73636 0.733109 9.79352C0.879053 9.85067 1.03538 9.87874 1.19275 9.87605C1.35012 9.87336 1.50533 9.83996 1.6491 9.77785C1.79287 9.71574 1.92227 9.62618 2.02958 9.51453L7.84306 3.87794V16.2875C7.84306 17.3679 7.49925 19.0149 6.50065 20.3589C5.54736 21.6438 3.94552 22.7272 1.20131 22.7272C0.890457 22.7272 0.592335 22.8469 0.372529 23.06C0.152722 23.2731 0.0292364 23.5622 0.0292364 23.8636C0.0292364 24.165 0.152722 24.454 0.372529 24.6672C0.592335 24.8803 0.890457 25 1.20131 25C4.70815 25 7.0148 23.5575 8.40409 21.6862C9.74963 19.874 10.1872 17.7315 10.1872 16.2875V3.87794L16.0007 9.51453C16.2205 9.72734 16.5184 9.84688 16.829 9.84688C17.1396 9.84688 17.4375 9.72734 17.6572 9.51453Z" fill="white"/>
                        </svg>
                    </div>
                    <div>
                        <Link className="text-white" to="/"> Privacy Policy</Link>
                        <Link className="text-white" to="/"> Terms and Conditions</Link>
                        <Link className="text-white" to="/"> Support </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer