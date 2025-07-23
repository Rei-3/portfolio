import Summary from "@/components/custom/summary";
import Header from "@/components/layout/header";
import Discover from "@/components/custom/discover";
import Projects from "@/components/custom/projects";
import Skills from "@/components/custom/skills";
import EducationExperience from "@/components/custom/education-experience";
import Footer from "@/components/layout/footer";
import { ParallaxText } from "@/components/ui/parallax-text";

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

        {/* NERV Parallax Separator 1 */}
          {/* <ParallaxText baseVelocity={-2} className="text-red-600 bg-black">
             NERV ONLY
          </ParallaxText> */}
          <ParallaxText baseVelocity={5} className="text-red-600 bg-black ">
             NERV ONLY | NERV ONLY | NERV ONLY | NERV ONLY
          </ParallaxText>
           <ParallaxText baseVelocity={-2} className="text-red-600 bg-black ">
             関係者以外ノ所持、使用及ビ分解ヲ堅ク禁ズ
            拾得セシ場合ハ速ヤカニ届出ノコト
          </ParallaxText>


        {/* Education & Experience Section - DARKEST with CYAN theme */}
        <div 
        id="education-experience"
        className="relative bg-zinc-950 overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 opacity-25">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                  linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px, 60px 60px, 15px 15px, 15px 15px'
              }}
            />
          </div>
          <EducationExperience />
        </div>

        {/* NERV Parallax Separator 2 */}
     <ParallaxText baseVelocity={5} className="text-red-600 bg-black ">
             NERV ONLY | NERV ONLY | NERV ONLY | NERV ONLY
          </ParallaxText>
           <ParallaxText baseVelocity={-2} className="text-red-600 bg-black ">
             関係者以外ノ所持、使用及ビ分解ヲ堅ク禁ズ
            拾得セシ場合ハ速ヤカニ届出ノコト
          </ParallaxText>

        
        {/* Skills Section - DARKER with PURPLE theme */}
        <div 
        id="skills"
        className="relative bg-black overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 opacity-25">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                  linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '45px 45px, 45px 45px, 12px 12px, 12px 12px'
              }}
            />
          </div>
          <Skills />
        </div>

        {/* NERV Parallax Separator 3 */}
          <ParallaxText baseVelocity={5} className="text-red-600 bg-black ">
             NERV ONLY | NERV ONLY | NERV ONLY | NERV ONLY
          </ParallaxText>
           <ParallaxText baseVelocity={-2} className="text-red-600 bg-black ">
             関係者以外ノ所持、使用及ビ分解ヲ堅ク禁ズ
            拾得セシ場合ハ速ヤカニ届出ノコト
          </ParallaxText>

        {/* Projects Section - MEDIUM */}
        <div 
        id="projects"
        className="relative bg-slate-950 overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 opacity-15">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 0, 0, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 0, 0.2) 1px, transparent 1px),
                  linear-gradient(rgba(0, 255, 0, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 0, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '55px 55px, 55px 55px, 18px 18px, 18px 18px'
              }}
            />
          </div>
          <Projects />
        </div>

        {/* NERV Section Separator 4 */}
         <ParallaxText baseVelocity={5} className="text-red-600 bg-black ">
             NERV ONLY | NERV ONLY | NERV ONLY | NERV ONLY
          </ParallaxText>
           <ParallaxText baseVelocity={-2} className="text-red-600 bg-black ">
             関係者以外ノ所持、使用及ビ分解ヲ堅ク禁ズ
            拾得セシ場合ハ速ヤカニ届出ノコト
          </ParallaxText>
       
        {/* About Section - LIGHTEST */}
        <div
        id="about"
        className="relative bg-zinc-950 overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 opacity-18">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
                  linear-gradient(rgba(255, 0, 255, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px'
              }}
            />
          </div>
          <Discover />
        </div>

        {/* NERV Final Separator */}
         <ParallaxText baseVelocity={5} className="text-red-600 bg-black ">
             NERV ONLY | NERV ONLY | NERV ONLY | NERV ONLY
          </ParallaxText>
           <ParallaxText baseVelocity={-2} className="text-red-600 bg-black ">
             関係者以外ノ所持、使用及ビ分解ヲ堅ク禁ズ
            拾得セシ場合ハ速ヤカニ届出ノコト
          </ParallaxText>
      </main>
      
      <Footer />
    </>
  );
}
