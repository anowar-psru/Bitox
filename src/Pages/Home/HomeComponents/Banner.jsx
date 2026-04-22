import { Link } from 'react-router'
import banner_shape from '../../../assets/images/banner/banner_shape.svg'
import slider_img from '../../../assets/images/banner/h1_banner_img_1.jpg'
import { IoMdPlay } from 'react-icons/io'

const Banner = () => {
    const bannerPoints = ["Financial Planning", "Human Resource", "Organisations", "Research & Analysis", "Risk Management"]
    return (
        <>
            <section>
                {/* Banner Title Text Here */}
                <div className='container'>
                    <div className='py-10 md:py-22.5'>
                        <div className='flex items-center gap-5 lg:gap-7.5'>
                            <h1 className='text-heading font-heading text-5xl sm:text-7xl md:text-8xl xl:text-[190px] xl:leading-40 font-bold uppercase'>business</h1>
                            <img className='w-15 sm:w-20 md:w-auto' src={banner_shape} alt="banner_shape" />
                        </div>
                        <h1 className='text-heading font-heading text-5xl sm:text-7xl md:text-8xl xl:text-[190px] xl:leading-40 uppercase font-light text-end mt-5 lg:mt-10'>Strategy</h1>
                    </div>
                </div>
                {/* Slider Img Here */}
                <div>
                    <div className="container relative hidden md:block">
                        <div className='max-w-117.5 bg-white rounded-md p-9 absolute left-7.5 -top-20 lg:-top-35'>
                            <h2 className='text-heading text-2xl lg:text-5xl lg:leading-14 font-bold'>Building the right foundation of your business</h2>
                            <p className='xl:pt-7.5 2xl:pb-43 pt-5 pb-5 lg:pt-7.5 lg:pb-7.5'>We are <span className='text-heading font-medium'>dedicated to guiding</span> you on your financial journey with expertise integrity and a personalized approach, always.</p>
                            {/* Slider BTN Here */}
                            <div>
                                <Link to='/contact' className='bg-heading rounded-md flex items-center justify-between p-1.25'>
                                    <div className='text-white font-medium pl-6'>Get consultation</div>
                                    <div className='w-12.5 h-12.5 bg-primary rounded-md flex items-center justify-center'>
                                        <IoMdPlay className='text-white text-xl'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src={slider_img} alt="slider_img" />
                </div>
                {/* Banner Points BTN Here */}
                <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 items-center gap-5 mx-5 mt-5'>
                    {
                        bannerPoints.map((item, index) => (
                            <div key={index}>
                                <Link to="/" className='text-heading font-medium border border-[rgba(0,0,0,0.1)] rounded-md flex items-center justify-center py-5'>{item}</Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Banner