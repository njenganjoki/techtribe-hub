import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageCarousel } from '@/components/ImageCarousel';
import { CourseCard } from '@/components/CourseCard';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Gallery } from '@/components/Gallery';
import { 
  Code, 
  Palette, 
  Video, 
  Globe, 
  Monitor, 
  TrendingUp,
  Users,
  Clock,
  Award,
  Heart,
  Star,
  Zap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const Index = () => {
  const courses = [
    {
      title: "HTML & CSS for Beginners",
      description: "Start your web development journey with the fundamentals of HTML and CSS.",
      icon: Code,
      color: "bg-primary"
    },
    {
      title: "JavaScript Essentials",
      description: "Learn the programming language that powers the modern web.",
      icon: Zap,
      color: "bg-tech-cyan"
    },
    {
      title: "Python Programming for Kids",
      description: "Introduction to programming with Python through games and creative projects.",
      icon: Users,
      color: "bg-tech-purple"
    },
    {
      title: "Graphic Design with Canva & Photoshop",
      description: "Create stunning visuals with industry-standard design tools.",
      icon: Palette,
      color: "bg-tech-pink"
    },
    {
      title: "Video Editing Basics",
      description: "Master CapCut, Canva, and Filmora for professional video content creation.",
      icon: Video,
      color: "bg-tech-orange"
    },
    {
      title: "WordPress Website Creation",
      description: "Build professional websites without coding using WordPress.",
      icon: Globe,
      color: "bg-accent"
    },
    {
      title: "IT Skills for Beginners",
      description: "Computer basics, typing skills, and essential troubleshooting techniques.",
      icon: Monitor,
      color: "bg-primary"
    },
    {
      title: "Digital Marketing Fundamentals",
      description: "Social media marketing, content creation, and digital branding strategies.",
      icon: TrendingUp,
      color: "bg-tech-cyan"
    },
    {
      title: "Google Workspace Essentials",
      description: "Master Google Docs, Sheets, Slides, and collaborative productivity tools.",
      icon: Users,
      color: "bg-tech-purple"
    },
    {
      title: "Robotics & Electronics Basics",
      icon: Monitor,
      description: "Introduction to robotics, circuits, and basic electronics for young innovators.",
      color: "bg-tech-pink"
    },
    {
      title: "Mobile App Development",
      description: "Create your first mobile apps using beginner-friendly development tools.",
      icon: Users,
      color: "bg-tech-orange"
    },
    {
      title: "Cybersecurity Awareness",
      description: "Learn digital safety, password security, and online protection fundamentals.",
      icon: Users,
      color: "bg-accent"
    },
    {
      title: "AI & Chatbot Creation Basics",
      description: "Explore artificial intelligence and build your own simple chatbots.",
      icon: Zap,
      color: "bg-primary"
    },
    {
      title: "Gaming & Scratch Programming",
      description: "Create interactive games and animations using Scratch programming.",
      icon: Users,
      color: "bg-tech-cyan"
    },
    {
      title: "Presentation & Public Speaking with Technology",
      description: "Enhance presentation skills using digital tools and modern techniques.",
      icon: Users,
      color: "bg-tech-purple"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Fun, Interactive Learning",
      description: "Engaging activities that make technology exciting and accessible for everyone."
    },
    {
      icon: Clock,
      title: "Online Weekend Classes",
      description: "Convenient Zoom sessions that fit perfectly into your weekend schedule."
    },
    {
      icon: Award,
      title: "Hands-On Projects",
      description: "Build real projects that showcase your skills and boost your confidence."
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Connect with like-minded peers and passionate instructors who care about your growth."
    },
    {
      icon: Star,
      title: "Expert Trainers",
      description: "Learn from experienced professionals who love sharing their knowledge."
    },
    {
      icon: Zap,
      title: "Real-World Skills",
      description: "Gain practical skills that are highly valued in today's digital world."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/26d6c9c8-2050-4e86-bc41-fb0e438d93e2.png" 
              alt="TechTribe Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TechTribe
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="hero" size="sm">
            Join Now
          </Button>
        </div>
      </header>

      {/* Welcome Banner Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to TechTribe Learning Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in max-w-3xl mx-auto">
            Where Passion Meets Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://forms.gle/pf1ogyFW8mthdkHQA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="#courses">
                Explore Our Courses
              </a>
            </Button>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Hero Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ImageCarousel />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              About TechTribe
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              TechTribe is a vibrant community-driven learning hub designed specifically for youth passionate about technology. 
              We believe that learning should be fun, practical, and accessible to everyone, regardless of their background or experience level.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our teaching approach combines creativity, teamwork, and empowerment to help young minds discover their potential 
              in the digital world. Through hands-on projects and supportive mentorship, we're building the next generation of tech innovators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creativity</h3>
                <p className="text-muted-foreground">Fostering innovative thinking and creative problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
                <p className="text-muted-foreground">Building strong collaborative skills for the future</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
                <p className="text-muted-foreground">Giving young people the tools to shape their digital future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Why Join TechTribe?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our learning hub the perfect place to start your tech journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Our Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our exciting range of technology courses designed to inspire and educate the next generation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Join TechTribe Today!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your tech journey with us. Fill out the form below to enroll.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a 
                href="https://forms.gle/pf1ogyFW8mthdkHQA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join TechTribe Now!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your tech journey? Contact us today!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">techtribe3649@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-tech-orange rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+254 799 842 714</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Online Classes</h3>
                        <p className="text-muted-foreground">Virtual learning from anywhere</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Follow Our Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with our community and see daily updates from our amazing students!
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-16 flex-col gap-2 hover:bg-tech-pink hover:text-white hover:border-tech-pink"
                      asChild
                    >
                      <a 
                        href="https://www.instagram.com/tec.htribe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-6 h-6" />
                        <span>Instagram</span>
                      </a>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col gap-2 hover:bg-primary hover:text-primary-foreground">
                      <Facebook className="w-6 h-6" />
                      <span>Facebook</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex-col gap-2 hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a 
                        href="https://www.youtube.com/@techtribe-e3y" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-6 h-6" />
                        <span>YouTube</span>
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-16 flex-col gap-2 hover:bg-tech-cyan hover:text-white hover:border-tech-cyan"
                      asChild
                    >
                      <a 
                        href="https://wa.me/254799842714" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Phone className="w-6 h-6" />
                        <span>WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/26d6c9c8-2050-4e86-bc41-fb0e438d93e2.png" 
              alt="TechTribe Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">TechTribe Learning Hub</span>
          </div>
          <p className="text-background/80 mb-4">
            Where Passion Meets Technology
          </p>
          <p className="text-background/60 text-sm">
            © 2025 TechTribe Learning Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
