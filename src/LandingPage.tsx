import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { ArrowRight, CheckCircle, Users, TrendingUp, Briefcase } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">ConsultPro</div>
      <div className="space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Empowering Your Business Success</h1>
      <p className="text-xl text-gray-600 mb-8">Strategic consulting solutions for the modern enterprise</p>
      <Button size="lg">Get Started <ArrowRight className="ml-2" /></Button>
    </div>
  </section>
);

const Services = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Strategy Consulting", icon: TrendingUp, description: "Develop winning strategies for your business" },
          { title: "Operations Management", icon: Briefcase, description: "Optimize your business operations for efficiency" },
          { title: "Change Management", icon: Users, description: "Navigate organizational changes seamlessly" }
        ].map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className="mr-2" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-10">
          <p className="text-xl italic mb-4">"ConsultPro transformed our business strategy, leading to a 200% increase in revenue within the first year."</p>
          <p className="font-semibold">Jane Doe, CEO of TechInnovate</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">ConsultPro</h3>
          <p className="text-gray-400">Empowering businesses since 2010</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-400">123 Business Ave, Suite 100<br />New York, NY 10001<br />contact@consultpro.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 ConsultPro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Hero />
      <Services />
      <Testimonial />
    </main>
    <Footer />
  </div>
);

export default LandingPage;