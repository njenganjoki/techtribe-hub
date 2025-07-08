import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function RegistrationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    parentPhone: '',
    email: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Thank you for joining TechTribe! We'll contact you soon.",
    });
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      parentPhone: '',
      email: '',
      course: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-card border-0 shadow-glow">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Join TechTribe Today!
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Start your tech journey with us. Fill out the form below to enroll.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input
                id="age"
                type="number"
                min="8"
                max="25"
                value={formData.age}
                onChange={(e) => handleChange('age', e.target.value)}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="parentPhone">Parent/Guardian Phone *</Label>
              <Input
                id="parentPhone"
                type="tel"
                value={formData.parentPhone}
                onChange={(e) => handleChange('parentPhone', e.target.value)}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course of Interest *</Label>
            <Select onValueChange={(value) => handleChange('course', value)}>
              <SelectTrigger className="border-border/50 focus:border-primary">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coding">Coding (HTML, CSS, JavaScript, Python)</SelectItem>
                <SelectItem value="design">Graphic Design (Canva, Photoshop)</SelectItem>
                <SelectItem value="video">Video Editing</SelectItem>
                <SelectItem value="web">Website Creation</SelectItem>
                <SelectItem value="it">IT Skills</SelectItem>
                <SelectItem value="marketing">Digital Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your tech interests or ask any questions..."
              className="border-border/50 focus:border-primary min-h-[100px]"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Join TechTribe Now!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}