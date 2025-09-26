import party from '../../assets/fparty1.jpg';

function MainSection() {
    return (
        <>
            <div className="mt-3 p-4 bg-white flex flex-col items-center overflow-x-hidden">
                <h1 className="text-3xl sm:text-4xl font-bold font-merienda p-7 text-center">
                    How we help surplus food producers
                </h1>
                <div className="flex flex-col md:flex-row gap-10 p-7 items-center max-w-full">
                    <div className="flex-1 flex justify-center items-center">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words text-center md:text-left max-w-md">
                            Reducing food waste ensures that more resources are used efficiently,
                            while redirecting surplus food provides nourishment to those who need it most.
                            This strengthens community support systems, promotes social equity, and alleviates
                            hunger without additional production costs. It also reduces the environmental impact
                            of discarded food, lowering greenhouse gas emissions and conserving resources such as
                            water and energy. Ultimately, it fosters a culture of care, sustainability, and shared
                            responsibility within society.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            className="rounded-4xl max-w-[90%] md:max-w-md h-auto"
                            src={party}
                            alt="food party"
                        />
                    </div>
                </div>
            </div>
            <div className='mt-4 p-7 flex-col items-center overflow-x-hidden text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold font-merienda p-7 text-center'>
                    Trusted by food vendors countrywide
                </h1>
                <p className='text-gray-700 leading-relaxed text-center p-4'>
                    Our partners rely on us to streamline operations, and strengthen funding applications. <br />
                    We're here to help your pantry thrive and feed your community faster.
                </p>
                <p className='text-gray-700 leading-relaxed p-4'>
                    Food vendors benefit in many ways by redirecting their surplus food through such a platform.
                    They strengthen community ties by helping local people in need while also cutting disposal
                    costs since less food ends up as waste. In some regions, they can even access tax and legal
                    incentives for donating excess food. Beyond the financial advantages, vendors differentiate
                    themselves from competitors with a unique value-add, attract conscious customers who prefer
                    to support socially responsible businesses, and boost staff morale as employees feel proud
                    to be part of a meaningful cause. The platform also simplifies logistics by providing a
                    streamlined process, removing the hassle of manually finding where to send surplus food.
                </p>
            </div>
        </>
    );
}


export default MainSection;