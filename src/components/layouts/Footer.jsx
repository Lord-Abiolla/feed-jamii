function Footer() {
    return (
        <>
            <div className="bg-[#1C3C25] text-white flex flex-col md:flex-row gap-10 md:gap-20 p-9 justify-center items-center overflow-x-hidden">
                <div className="m-4">
                    <h1 className="font-merienda text-5xl font-semibold text-center">
                        feed-Jamii
                    </h1>
                </div>
                <div className="m-4">
                    <h1 className="font-merienda text-3xl font-semibold text-center mt-7">
                        Contact Us
                    </h1>
                    <ul className="mt-7 space-y-2 text-center">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">X</a></li>
                    </ul>
                </div>
                <div className="m-4">
                    <h1 className="font-merienda text-3xl font-semibold text-center mt-7">
                        Who uses feed-Jamii
                    </h1>
                    <ul className="mt-7 space-y-2 text-center">
                        <li>Food Pantries</li>
                        <li>Events and Parties</li>
                        <li>Hotels and Restaurants</li>
                        <li>Governments and NGOs</li>
                    </ul>
                </div>
            </div>
            <hr className="border-white" />
            <div className="bg-[#173A21] p-7 items-center text-center text-sm text-white">
                <p>@2025 All rights reserved</p>
            </div>
        </>
    );
}

export default Footer;
