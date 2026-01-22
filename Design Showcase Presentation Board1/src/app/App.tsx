// Import all screenshots
import heroImage from "figma:asset/76aaf2bc0ab57936e8777b28341093964311a329.png";
import missionImage from "figma:asset/2d7f2dab12431ffce82f6fc913920241c7037023.png";
import statsImage from "figma:asset/652e5616739fcc3b069dd092e86b80e577591e94.png";
import eventsImage from "figma:asset/aa3c377a8393450a39452ddbb772ef770e2cbd58.png";
import partnersImage from "figma:asset/4a6122a5a2d7f4162bb34bc456925a7b6c28478e.png";
import testimonialsImage from "figma:asset/df82cfd7cb78e1f2a79960ea1e23f5410dfe76ea.png";
import faqImage from "figma:asset/b59a5b1115ab61ceb382c67971c0bf51a75639b0.png";
import ctaImage from "figma:asset/58d6fcd8d1e77da16c89c3040270d7aebc33c58c.png";
import footerImage from "figma:asset/c54cd549019531caf94f9b16726eb54ec0ab4ec1.png";
import membersImage from "figma:asset/4b2dbe60afcdd55dbedaa364f065e51abce3ecad.png";

interface Section {
  title: string;
  image: string;
}

export default function App() {
  // Ordered sections as requested: Hero, Mission, Stats, Pillars, Events, Trusted By, Testimonials, FAQ, CTA, Footer, Members Directory
  const sections: Section[] = [
    {
      title: "Hero Section",
      image: heroImage
    },
    {
      title: "Mission",
      image: missionImage
    },
    {
      title: "Stats",
      image: statsImage
    },
    {
      title: "Pillars",
      image: statsImage
    },
    {
      title: "Events",
      image: eventsImage
    },
    {
      title: "Trusted By",
      image: partnersImage
    },
    {
      title: "Testimonials",
      image: testimonialsImage
    },
    {
      title: "FAQ",
      image: faqImage
    },
    {
      title: "CTA",
      image: ctaImage
    },
    {
      title: "Footer",
      image: footerImage
    },
    {
      title: "Members Directory",
      image: membersImage
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0d14]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-2xl bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Superteam Brazil - UX/UI Submission
          </h1>
        </div>
      </header>

      {/* Main Content - Vertical Scrollable Layout */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
          {sections.map((section, index) => (
            <section
              key={index}
              className="space-y-4"
            >
              {/* Section Label */}
              <div className="flex items-center gap-4">
                <div className="text-gray-500 text-sm font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-xl text-white">{section.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Screenshot */}
              <div className="bg-[#151921] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto"
                />
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0d14]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Designed by <span className="text-white font-medium">MD iktiar</span>
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Superteam Brazil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
