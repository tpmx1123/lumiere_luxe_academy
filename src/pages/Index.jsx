import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";


import IndustryStats from "../components/IndustryStats.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Curriculum from "../components/Curriculum.jsx";
import WhoCanApply from "../components/WhoCanApply.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import LeadForm from "../components/LeadForm.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <IndustryStats />
    <WhyChoose />
    <Curriculum />
    <WhoCanApply />
    <PromoBanner />
    <LeadForm />
    <Footer />
  </main>
);

export default Index;
