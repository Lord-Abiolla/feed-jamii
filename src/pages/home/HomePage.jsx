import Header from "../../components/layouts/Header";
import HeroSection from "../../components/layouts/HeroSection";
import MainSection from "../../components/layouts/MainSection";
import Footer from "../../components/layouts/Footer";
import Clients from "../../components/layouts/Clients";


function HomePage() {
    return (
        <div className="bg-[#EFF5E9] min-h-screen">
            <Header />
            <HeroSection />
            <Clients />
            <MainSection />
            <Footer />
        </div>
    )
}

export default HomePage;