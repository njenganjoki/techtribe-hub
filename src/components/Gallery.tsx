import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import gallery images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: gallery1,
    alt: "Students working on tech projects",
    caption: "Collaborative coding sessions in our modern classroom"
  },
  {
    src: gallery2,
    alt: "Online tech class participation",
    caption: "Engaging virtual learning experiences"
  },
  {
    src: gallery3,
    alt: "Students celebrating achievements",
    caption: "Celebrating our students' incredible achievements"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Our Learning Community
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See our students in action! From coding sessions to creative projects, 
          witness the exciting journey of young tech enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 border-0">
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white rounded-b-lg">
                  <p className="text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-6">
          Want to see more? Follow us on social media for daily updates from our tech community!
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="hover:bg-tech-purple hover:text-white hover:border-tech-purple">
            Instagram
          </Button>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Facebook
          </Button>
          <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            YouTube
          </Button>
        </div>
      </div>
    </div>
  );
}