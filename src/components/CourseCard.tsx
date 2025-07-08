import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export function CourseCard({ title, description, icon: Icon, color }: CourseCardProps) {
  return (
    <Card className="group cursor-pointer bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}