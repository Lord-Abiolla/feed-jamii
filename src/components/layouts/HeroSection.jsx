import { Link } from 'react-router-dom';
import map from '../../assets/map.jpg';

function HeroSection() {
    return (
        <div className='relative w-full h-[700px] mt-12'>
            <img src={map} alt="map" className="absolute object-cover w-full h-[750px] blur-[1.5px]" />

            {/* Overlay card */}
            <div className='relative flex items-center justify-center h-full'>
                <div className="absolute flex flex-col items-center justify-center text-center z-10">
                    <h2 className='font-merienda text-[60px] font-bold text-green-700 [text-shadow:_7px_7px_0_#1C3C25]'>
                        feed-Jamii
                    </h2>
                    <p className='font-merienda text-green-900 font-bold text-[30px] mt-9'>
                        A community-driven web app that connects individuals, <br />
                        organizations, and donors to fight hunger by sharing <br />
                        food and essential resources within<br />
                        local communities.
                    </p>
                    <Link to={"/signup"}>
                        <button className='font-merienda bg-white border-2 border-[#1C3C25] text-[#1C3C25] text-2xl font-bold px-14 py-5 cursor-pointer mt-9 rounded-full hover:bg-[#1C3C25] hover:text-white'>
                            Get started here
                        </button>
                    </Link>
                    <p className='mt-9 text-gray-700 text-lg font-bold'>Your information is private and secure</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;