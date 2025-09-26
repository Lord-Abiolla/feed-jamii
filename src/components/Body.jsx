import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import MainSection from "./layouts/MainSection";


function Body() {
    return (
        <div className="bg-[#EFF5E9] min-h-screen">
            <Header />
            <HeroSection />
            <MainSection />
        </div>
    )
}

export default Body;