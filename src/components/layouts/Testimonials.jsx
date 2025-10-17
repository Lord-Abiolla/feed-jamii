import party from '../../assets/fparty1.jpg';

function MainSection() {
    return (
        <>
            <div className="mt-12 p-4 bg-white flex flex-col items-center overflow-x-hidden">
                <h1 className="font-merienda text-4xl text-gray-400 mt-9">
                    Testimonials
                </h1>
                <p className='text-gray-700 leading-relaxed text-start p-4 mt-7 text-2xl'>
                    “Since joining Feed-Jamii, our community outreach has grown tremendously. <br />
                    The platform gives us the tools we need to connect surplus food with those <br />
                    who need it most.” <br />
                    <i className='font-semibold'>— Mary Achieng, Community Volunteer</i>
                </p>

                <p className='text-gray-700 leading-relaxed text-start p-4 mt-7 text-2xl'>
                    “Feed-Jamii has transformed how we handle leftover food. What used to go to waste<br />
                    now feeds families every day — it’s helped us make a real difference.”<br />
                    <i className='font-semibold'>— Chef Daniel, Urban Eats Restaurant</i>
                </p>

                <p className='text-gray-700 leading-relaxed text-start p-4 mt-7 text-2xl'>
                    “Working with Feed-Jamii has made food sharing seamless. It’s more than an app — <br />
                    it’s a movement that empowers communities to care for each other.” <br />
                    <i className='font-semibold'>— Grace Muriuki, HopeBridge NGO</i>
                </p>

                <p className='text-gray-700 leading-relaxed text-start p-4 mt-7 text-2xl'>
                    “Feed-Jamii makes it easy for us to give back. We’re not just reducing waste — we’re feeding hope.”<br />
                    <i className='font-semibold'>— Kevin Otieno, Event Organizer</i>
                </p>
            </div>
        </>
    );
}


export default MainSection;