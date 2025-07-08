import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import hero images
import heroStudentsCoding from '@/assets/hero-students-coding.jpg';
import heroKidsDesigning from '@/assets/hero-kids-designing.jpg';
import heroVirtualClass from '@/assets/hero-virtual-class.jpg';
import heroHandsOnProjects from '@/assets/hero-hands-on-projects.jpg';
import heroCelebratingSuccess from '@/assets/hero-celebrating-success.jpg';

interface CarouselSlide {
  image: string;
  caption: string;
  title: string;
}

const slides: CarouselSlide[] = [
  {
    image: heroStudentsCoding,
    caption: "Building Future Creators",
    title: "Students Learning to Code"
  },
  {
    image: heroKidsDesigning,
    caption: "Tech Made Simple",
    title: "Creative Design Sessions"
  },
  {
    image: heroVirtualClass,
    caption: "Learning From Anywhere",
    title: "Interactive Online Classes"
  },
  {
    image: heroHandsOnProjects,
    caption: "Empowering Young Innovators",
    title: "Hands-On Tech Projects"
  },
  {
    image: heroCelebratingSuccess,
    caption: "Celebrating Every Achievement",
    title: "Success Stories"
  }
];

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-2xl shadow-glow">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-2 animate-fade-in">
                {slide.caption}
              </h3>
              <p className="text-lg md:text-xl opacity-90 animate-fade-in">
                {slide.title}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 rounded-full w-12 h-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 rounded-full w-12 h-12"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}