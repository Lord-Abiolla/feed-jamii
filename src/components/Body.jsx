import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import MainSection from "./layouts/MainSection";
import Footer from "./layouts/Footer";


function Body() {
    return (
        <div className="bg-[#EFF5E9] min-h-screen">
            <Header />
            <HeroSection />
            <MainSection />
            <Footer />
        </div>
    )
}

export default Body;