import Summary from "@/components/custom/summary";
import Header from "@/components/layout/header";
import Discover from "@/components/custom/discover";
import Projects from "@/components/custom/projects";
import Skills from "@/components/custom/skills";
import EducationExperience from "@/components/custom/education-experience";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-0">
        {/* Home/Hero Section */}
        <section id="home">
          <Summary />
        </section>

         {/* Education & Experience Section */}
        <EducationExperience />
        
        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />
       
         {/* About Section */}
        <Discover />
      </main>
      
      <Footer />
    </>
  );
}
