import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all screenshots
import heroImage from "figma:asset/76aaf2bc0ab57936e8777b28341093964311a329.png";
import missionImage from "figma:asset/2d7f2dab12431ffce82f6fc913920241c7037023.png";
import featuresImage from "figma:asset/652e5616739fcc3b069dd092e86b80e577591e94.png";
import eventsImage from "figma:asset/aa3c377a8393450a39452ddbb772ef770e2cbd58.png";
import partnersImage from "figma:asset/4a6122a5a2d7f4162bb34bc456925a7b6c28478e.png";
import testimonialsImage from "figma:asset/df82cfd7cb78e1f2a79960ea1e23f5410dfe76ea.png";
import membersImage from "figma:asset/4b2dbe60afcdd55dbedaa364f065e51abce3ecad.png";
import faqImage from "figma:asset/b59a5b1115ab61ceb382c67971c0bf51a75639b0.png";
import ctaImage from "figma:asset/58d6fcd8d1e77da16c89c3040270d7aebc33c58c.png";
import footerImage from "figma:asset/c54cd549019531caf94f9b16726eb54ec0ab4ec1.png";

interface Slide {
  type: "cover" | "screenshot" | "closing";
  title?: string;
  subtitle?: string;
  image?: string;
  description?: string;
}

export default function App() {
  const slides: Slide[] = [
    {
      type: "cover",
      title: "Superteam Brazil",
      subtitle: "Landing Page Design Showcase",
      description: "Web3 Talent Hub - Complete Scroll Flow Presentation"
    },
    {
      type: "screenshot",
      title: "Hero Section",
      description: "Main landing page introducing Superteam Brazil as the Web3 talent hub",
      image: heroImage
    },
    {
      type: "screenshot",
      title: "Mission & Features",
      description: "Core offerings: Builder support, Hackathons, and Web3 job opportunities",
      image: missionImage
    },
    {
      type: "screenshot",
      title: "Additional Features & Stats",
      description: "Bounties, Education, Networking programs with community metrics",
      image: featuresImage
    },
    {
      type: "screenshot",
      title: "Upcoming Events",
      description: "Calendar of upcoming meetups and community gatherings",
      image: eventsImage
    },
    {
      type: "screenshot",
      title: "Trusted Partners",
      description: "Ecosystem builders supporting Solana growth in Brazil",
      image: partnersImage
    },
    {
      type: "screenshot",
      title: "Community Testimonials",
      description: "Member stories and experiences from the community",
      image: testimonialsImage
    },
    {
      type: "screenshot",
      title: "Member Directory",
      description: "Searchable directory of builders, developers, designers, and creators",
      image: membersImage
    },
    {
      type: "screenshot",
      title: "Frequently Asked Questions",
      description: "Common questions about joining and participating in Superteam Brazil",
      image: faqImage
    },
    {
      type: "screenshot",
      title: "Call to Action",
      description: "Join the community through Discord or Twitter",
      image: ctaImage
    },
    {
      type: "screenshot",
      title: "Footer",
      description: "Navigation links and community resources",
      image: footerImage
    },
    {
      type: "closing",
      title: "Thank You",
      subtitle: "Superteam Brazil Design Showcase",
      description: "Building the Future of Web3 in Latin America"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="size-full bg-[#0a0d14] flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Content */}
        <div className="max-w-7xl w-full h-full flex items-center justify-center">
          {slide.type === "cover" && (
            <div className="text-center space-y-6 px-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-4">
                <span className="text-emerald-400 text-sm uppercase tracking-wider">Design Showcase</span>
              </div>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl text-gray-300">{slide.subtitle}</p>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">{slide.description}</p>
              <div className="pt-8">
                <div className="inline-flex items-center gap-2 text-gray-400">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
                  <span className="text-sm">Scroll to explore</span>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500/50"></div>
                </div>
              </div>
            </div>
          )}

          {slide.type === "screenshot" && (
            <div className="w-full h-full flex flex-col items-center gap-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl text-white">{slide.title}</h2>
                <p className="text-gray-400 text-sm max-w-2xl">{slide.description}</p>
              </div>
              <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>
            </div>
          )}

          {slide.type === "closing" && (
            <div className="text-center space-y-6 px-8">
              <div className="space-y-4">
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-3xl text-gray-300">{slide.subtitle}</p>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto pt-4">{slide.description}</p>
              </div>
              <div className="pt-12 space-y-4">
                <div className="flex items-center justify-center gap-8 text-gray-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">2,000+</div>
                    <div className="text-sm">Community Members</div>
                  </div>
                  <div className="w-px h-12 bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm">Events Hosted</div>
                  </div>
                  <div className="w-px h-12 bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">$500k+</div>
                    <div className="text-sm">Bounties Distributed</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-white/10 bg-[#0a0d14]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Slide Counter */}
            <div className="text-gray-400 text-sm">
              Slide {currentSlide + 1} of {slides.length}
            </div>

            {/* Dot Navigation */}
            <div className="flex gap-2 overflow-x-auto max-w-2xl">
              {slides.map((s, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? "w-8 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  title={s.title}
                />
              ))}
            </div>

            {/* Slide Title */}
            <div className="text-gray-400 text-sm text-right min-w-[200px]">
              {slide.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
