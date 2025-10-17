import fp1 from '../../assets/fp1.jpg';
import fp2 from '../../assets/fp2.jpg';
import fp3 from '../../assets/fp3.jpg';
import fp4 from '../../assets/fp4.jpg';

function ServicesCard() {
    return (
        <div className='bg-white flex flex-col items-center justify-center'>
            <h1 className='font-merienda text-4xl text-gray-400 mt-9'>Our Services</h1>
            <div className="flex flex-wrap gap-9 items-center justify-center m-9 p-4">
                <div className="flex">
                    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md">
                        <img src={fp1} alt="" className='w-100 h-70 rounded-2xl' />
                        <h3 className='font-semibold p-2 text-2xl mt-3'>Restaurant & Event Food Rescue</h3>
                        <p className='text-gray-500 mt-2'>
                            Feed-Jamii allows restaurants, catering companies, and event organizers to easily donate
                            leftover but safe-to-eat food after events or daily operations. Instead of throwing it away,
                            they can quickly post it on the app, where nearby charities, pantries, or individuals in
                            need can claim it. <br />
                            <i className='font-normal mt-2'>Everyone wins — less waste, more meals shared.</i>
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md">
                        <img src={fp2} alt="" className='w-100 h-70 rounded-2xl' />
                        <h3 className='font-semibold p-2 text-2xl mt-3'>NGO & Food Pantry Collaboration</h3>
                        <p className='text-gray-500 mt-2'>
                            Non-profits and food pantries use Feed-Jamii to discover available food donations,
                            manage pickup schedules, and connect directly with donors. The platform simplifies
                            coordination between donors and relief centers, making community feeding programs
                            more efficient and transparent.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-wrap gap-9 items-center justify-center m-9 p-4">
                <div className="flex">
                    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md">
                        <img src={fp3} alt="" className='w-100 h-70 rounded-2xl' />
                        <h3 className='font-semibold p-2 text-2xl mt-3'>Government & Community Partnership</h3>
                        <p className='text-gray-500 mt-2'>
                            Local governments and community organizations can use Feed-Jamii to track
                            food distribution, support hunger-relief campaigns, and monitor impact in
                            real time. This partnership strengthens social welfare programs and ensures
                            that food security initiatives reach the right people faster.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md">
                        <img src={fp4} alt="" className='w-100 h-70 rounded-2xl' />
                        <h3 className='font-semibold p-2 text-2xl mt-3'>Support for Families & Individuals in Need</h3>
                        <p className='text-gray-500 mt-2'>
                            Feed-Jamii empowers individuals and families facing food insecurity to find nearby
                            food support with dignity. Users can locate available donations, community kitchens,
                            and feeding programs — receiving help directly from restaurants, events, NGOs, and
                            local donors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServicesCard;