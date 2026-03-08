import ScrollReveal from "../ScrollReveal";
import ContactModal from "../ContactModal";
import { Play, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface VideoSlot {
  title: string;
  youtubeId: string;
}

const videos: VideoSlot[] = [
  { title: "Power Bank Rental Station", youtubeId: "Y08VPoImhoA" },
  { title: "Smart Locker Vending", youtubeId: "jZk6Zv-q-zw" },
  { title: "Snack Vending Demo", youtubeId: "4835onrVx34" },
  { title: "Snack Machine Assembly", youtubeId: "chWoJsI6XgY" },
  { title: "Vending Operations", youtubeId: "RlywkUl-TCg" },
  { title: "Smart Fridge Overview", youtubeId: "o8ahmgEQtZU" },
  { title: "Claw Machine Gameplay", youtubeId: "IOxUbO_gcYE" },
];

const VideoShowcaseSection = () => {
  return (
    <section id="video-showcase" className="section-padding section-alt">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-badge">See It In Action</span>
            <h2 className="heading-section">Real Machines. Real Deployments.</h2>
            <p className="body-large mt-4">Not renders. Not concepts. Watch our machines operating in the field.</p>
          </div>
        </ScrollReveal>

        {/* Video Carousel */}
        <ScrollReveal delay={0.1}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={video.youtubeId} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="group">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-2xl overflow-hidden shadow-lg block hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Thumbnail */}
                        <div className="relative aspect-video bg-muted">
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 text-white fill-current ml-1" />
                            </div>
                          </div>

                          {/* Title Badge */}
                          <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-r from-accent to-accent/80 backdrop-blur-sm rounded px-2 py-1 shadow-lg">
                            <p className="font-semibold text-white text-xs truncate">
                              {video.title}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </ScrollReveal>

        {/* CTA buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <ContactModal>
              <button className="btn-primary group">
                Request a Physical Visit
              </button>
            </ContactModal>
            <a
              href="https://www.youtube.com/playlist?list=PL5gB5kNB2iq31_cOhI2j6I1uXXSnRLmUE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              All Videos
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;