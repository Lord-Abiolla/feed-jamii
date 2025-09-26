import map from '../../assets/map.jpg';

function HeroSection() {
    return (
        <div className='relative w-full h-[700px]'>
            {/* Background image */}
            <img src={map} alt="map" className="absolute object-cover w-full h-[700px] p-6 rounded-[7rem]" />

            {/* Overlay card */}
            <div className='relative flex items-center justify-center h-full'>
                <div className="absolute bg-[#C3D9AC]/65 flex flex-col p-9 rounded-4xl items-center justify-center text-center w-[90%] sm:w-[60%] md:w-[40%] h-80 z-10">
                    <h2 className='font-merienda text-2xl sm:text-3xl md:text-4xl'>
                        Do you have surplus food <br />
                        and somebody lacks?
                    </h2>
                    <button className='font-merienda bg-[#1C3C25] text-white px-5 py-2 cursor-pointer mt-9 rounded-2xl'>
                        Connect here
                    </button>
                    <p className='mt-9 text-gray-700 text-sm'>Your information is private and secure</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;