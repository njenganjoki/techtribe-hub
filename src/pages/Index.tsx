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
      title: "Coding",
      description: "Learn HTML, CSS, JavaScript, and Python through fun, interactive projects.",
      icon: Code,
      color: "bg-tech-cyan"
    },
    {
      title: "Graphic Design",
      description: "Master Canva and Photoshop basics to create stunning visual content.",
      icon: Palette,
      color: "bg-tech-purple"
    },
    {
      title: "Video Editing",
      description: "From beginner to intermediate video editing skills for content creation.",
      icon: Video,
      color: "bg-tech-pink"
    },
    {
      title: "Website Creation",
      description: "Build amazing websites using WordPress and modern web technologies.",
      icon: Globe,
      color: "bg-primary"
    },
    {
      title: "IT Skills",
      description: "Computer basics, typing, troubleshooting, and essential digital literacy.",
      icon: Monitor,
      color: "bg-tech-orange"
    },
    {
      title: "Digital Marketing",
      description: "Social media, content creation, and branding basics for the digital age.",
      icon: TrendingUp,
      color: "bg-accent"
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
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
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
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Join Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Explore Our Courses
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
          <RegistrationForm />
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
                        <p className="text-muted-foreground">hello@techtribe.learning</p>
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
                        <p className="text-muted-foreground">+1 (555) 123-TECH</p>
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
                    <Button variant="outline" className="h-16 flex-col gap-2 hover:bg-tech-pink hover:text-white hover:border-tech-pink">
                      <Instagram className="w-6 h-6" />
                      <span>Instagram</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col gap-2 hover:bg-primary hover:text-primary-foreground">
                      <Facebook className="w-6 h-6" />
                      <span>Facebook</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col gap-2 hover:bg-accent hover:text-accent-foreground">
                      <Youtube className="w-6 h-6" />
                      <span>YouTube</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col gap-2 hover:bg-tech-cyan hover:text-white hover:border-tech-cyan">
                      <Phone className="w-6 h-6" />
                      <span>WhatsApp</span>
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
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">TechTribe Learning Hub</span>
          </div>
          <p className="text-background/80 mb-4">
            Where Passion Meets Technology
          </p>
          <p className="text-background/60 text-sm">
            © 2024 TechTribe Learning Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
