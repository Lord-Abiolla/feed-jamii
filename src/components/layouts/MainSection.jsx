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
        </>
    );
}


export default MainSection;