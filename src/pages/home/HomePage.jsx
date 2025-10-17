import Header from "../../components/layouts/Header";
import HeroSection from "../../components/layouts/HeroSection";
import Testimonials from "../../components/layouts/Testimonials";
import Footer from "../../components/layouts/Footer";
import Clients from "../../components/layouts/Clients";
import ServicesCard from "../../components/layouts/ServicesCard";


function HomePage() {
    return (
        <div className="bg-[#EFF5E9] min-h-screen">
            <Header />
            <HeroSection />
            <Clients />
            <ServicesCard />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default HomePage;