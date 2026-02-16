import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustryStats from "@/components/IndustryStats";
import WhyChoose from "@/components/WhyChoose";
import Curriculum from "@/components/Curriculum";
import WhoCanApply from "@/components/WhoCanApply";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <IndustryStats />
    <WhyChoose />
    <Curriculum />
    <WhoCanApply />
    <LeadForm />
    <Footer />
  </main>
);

export default Index;
