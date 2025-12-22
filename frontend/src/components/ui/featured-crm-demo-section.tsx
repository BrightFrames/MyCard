import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { PlayCircle, Building2, Rocket, Palette, Briefcase, Heart, DollarSign, GraduationCap, Utensils } from "lucide-react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

export default function FeaturedCrmDemoSection() {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const industryTimeline = [
    {
      id: 1,
      title: "Real Estate",
      date: "Est. 2020",
      content: "Property professionals and realtors using digital cards to connect with clients instantly and share property listings seamlessly.",
      category: "Property",
      icon: Building2,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Tech Startups",
      date: "Est. 2021",
      content: "Innovation leaders and entrepreneurs networking at tech events, sharing portfolios and building connections in the startup ecosystem.",
      category: "Technology",
      icon: Rocket,
      relatedIds: [1, 3, 5],
      status: "completed" as const,
      energy: 98,
    },
    {
      id: 3,
      title: "Creative Agencies",
      date: "Est. 2021",
      content: "Design and marketing professionals showcasing their portfolios with stunning visual cards that reflect their creative brand identity.",
      category: "Design",
      icon: Palette,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 88,
    },
    {
      id: 4,
      title: "Consultants",
      date: "Est. 2022",
      content: "Business advisors and independent consultants sharing expertise and building professional networks with customizable digital business cards.",
      category: "Business",
      icon: Briefcase,
      relatedIds: [1, 3, 6],
      status: "completed" as const,
      energy: 92,
    },
    {
      id: 5,
      title: "Healthcare",
      date: "Est. 2022",
      content: "Medical professionals providing contactless sharing of credentials, practice information, and appointment booking through digital cards.",
      category: "Medical",
      icon: Heart,
      relatedIds: [2, 6],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 6,
      title: "Finance",
      date: "Est. 2023",
      content: "Financial advisors and banking professionals maintaining secure, professional connections with clients through encrypted digital cards.",
      category: "Finance",
      icon: DollarSign,
      relatedIds: [4, 5, 7],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 7,
      title: "Education",
      date: "Est. 2023",
      content: "Teachers, professors, and coaches connecting with students and parents while sharing resources and contact information efficiently.",
      category: "Education",
      icon: GraduationCap,
      relatedIds: [6, 8],
      status: "pending" as const,
      energy: 78,
    },
    {
      id: 8,
      title: "Hospitality",
      date: "Est. 2024",
      content: "Service industry professionals in hotels, restaurants, and tourism using digital cards for guest experiences and networking.",
      category: "Service",
      icon: Utensils,
      relatedIds: [7, 1],
      status: "pending" as const,
      energy: 72,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-white text-black dark:bg-zinc-900 dark:text-white px-4">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Networking Made <span className="text-indigo-600">Effortless</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
          Experience the future of professional networking with our intelligent digital business card platform
        </p>
      </header>

      {/* Templates Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full mb-12">
        {/* Main video/image card */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 p-3 overflow-hidden relative mb-4 lg:mb-0 flex flex-col min-h-[400px] sm:min-h-[500px] border-2 border-indigo-200 dark:border-indigo-900">
          <CardContent 
            className="p-0 relative flex-grow group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Always render video, control visibility */}
            <video
              ref={videoRef}
              src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4"
              muted
              loop
              playsInline
              className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            />
            
            {/* Thumbnail image - shown when not hovering */}
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
              alt="Digital Business Card Demo"
              className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Play button overlay - hidden on hover */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/20 rounded-xl ${isHovering ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform transition-transform group-hover:scale-110">
                <PlayCircle className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature cards */}
        <FeaturesSectionWithHoverEffects />
      </section>

      {/* Orbital Timeline - Industries Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white px-4">
          Trusted by professionals across industries
        </h2>
        <p className="text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-2 max-w-2xl mx-auto px-4">
          Click any industry to explore how professionals use digital business cards
        </p>
        <RadialOrbitalTimeline timelineData={industryTimeline} />
      </section>
    </div>
  );
}
