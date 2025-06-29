'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Waves, 
  Users, 
  Calendar, 
  Trophy, 
  Heart, 
  Shield,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Dive Into Excellence',
    subtitle: 'World-Class Swimming Facilities',
    description: 'Experience premium aquatic fitness with our state-of-the-art pools and expert trainers.',
    cta: 'Start Your Journey',
    ctaLink: '/login'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'AI-Powered Fitness',
    subtitle: 'Smart Training Solutions',
    description: 'Revolutionary AI form analysis helps perfect your technique and maximize results.',
    cta: 'Explore AI Training',
    ctaLink: '/workouts'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Family Fitness Fun',
    subtitle: 'Programs for All Ages',
    description: 'From kids to seniors, our inclusive programs bring families together through fitness.',
    cta: 'Family Programs',
    ctaLink: '/family'
  }
];

const services = [
  {
    icon: Waves,
    title: 'Swimming Lessons',
    description: 'Professional instruction for all skill levels, from beginners to competitive swimmers.',
    features: ['Certified Instructors', 'Small Class Sizes', 'Flexible Scheduling'],
    color: 'bg-teal-500'
  },
  {
    icon: Trophy,
    title: 'Personal Training',
    description: 'One-on-one coaching with expert trainers to achieve your specific fitness goals.',
    features: ['Customized Programs', 'Progress Tracking', 'Nutrition Guidance'],
    color: 'bg-emerald-500'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Energizing group fitness sessions including water aerobics and aqua fitness.',
    features: ['Water Aerobics', 'Aqua Zumba', 'Senior Programs'],
    color: 'bg-cyan-500'
  },
  {
    icon: Heart,
    title: 'Aqua Therapy',
    description: 'Therapeutic water exercises for rehabilitation and injury recovery.',
    features: ['Physical Therapy', 'Injury Recovery', 'Pain Management'],
    color: 'bg-teal-600'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy online booking system with real-time availability and instant confirmation.',
    features: ['24/7 Booking', 'Mobile App', 'Instant Confirmation'],
    color: 'bg-emerald-600'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Comprehensive safety protocols and certified lifeguards on duty at all times.',
    features: ['Certified Lifeguards', 'Safety Training', 'Emergency Protocols'],
    color: 'bg-cyan-600'
  }
];

const stats = [
  { number: '10,000+', label: 'Happy Members' },
  { number: '50+', label: 'Expert Trainers' },
  { number: '15', label: 'Pool Facilities' },
  { number: '98%', label: 'Satisfaction Rate' }
];

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600" />
      </div>
    );
  }

  if (user) {
    return null; // Will redirect to dashboard
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AquaFit</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost">
                <Link href="#services">Services</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="#about">About</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="mb-6">
                <Badge className="bg-teal-600/20 text-teal-100 border-teal-400/30 mb-4">
                  {heroSlides[currentSlide].subtitle}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href={heroSlides[currentSlide].ctaLink}>
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="text-teal-600"> Aquatic Fitness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner swimming lessons to advanced training programs, we offer comprehensive 
              aquatic fitness solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 group-hover:bg-teal-600 transition-colors" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-teal-100 text-teal-800 mb-4">Why Choose AquaFit</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Future of
                <span className="text-teal-600"> Aquatic Fitness</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience cutting-edge technology combined with world-class facilities and expert instruction.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 rounded-lg p-2 flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI-Powered Form Analysis</h3>
                    <p className="text-gray-600">Real-time feedback on your swimming technique and workout form.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 rounded-lg p-2 flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Online Booking</h3>
                    <p className="text-gray-600">Book sessions anytime with our intelligent scheduling system.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 rounded-lg p-2 flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Instructors</h3>
                    <p className="text-gray-600">Learn from certified professionals with years of experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern swimming facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">98% Success Rate</p>
                    <p className="text-sm text-gray-600">Member satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Dive In?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of members who have transformed their fitness journey with AquaFit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/login">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AquaFit</span>
              </div>
              <p className="text-gray-400">
                Transform your fitness journey with our world-class aquatic facilities and AI-powered training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Swimming Lessons</li>
                <li>Personal Training</li>
                <li>Group Classes</li>
                <li>Aqua Therapy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Safety Guidelines</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AquaFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}