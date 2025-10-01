import Header from "../../components/layouts/Header";
import HeroSection from "../../components/layouts/HeroSection";
import MainSection from "../../components/layouts/MainSection";
import Footer from "../../components/layouts/Footer";


function HomePage() {
    return (
        <div className="bg-[#EFF5E9] min-h-screen">
            <Header />
            <HeroSection />
            <MainSection />
            <Footer />
        </div>
    )
}

export default HomePage;