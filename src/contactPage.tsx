import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => (
  <form className="space-y-4">
    <Input placeholder="Your Name" />
    <Input type="email" placeholder="Your Email" />
    <Input placeholder="Subject" />
    <Textarea placeholder="Your Message" />
    <Button type="submit" className="w-full">Send Message</Button>
  </form>
);

const ContactInfo: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-center">
      <MapPin className="mr-2" />
      <p>101, Sitaram Mansion, 718/21, Joshi Road, Karol Bagh, New Delhi-110005</p>
    </div>
    <div className="flex items-center">
      <Phone className="mr-2" />
      <p><a href="tel:+911123549822">+91-1123549822</a>, <a href="tel:+919711603579">+91-9711603579</a>, <a href="tel:+919643895444">+91-9643895444</a></p>
    </div>
    <div className="flex items-center">
      <Mail className="mr-2" />
      <p>atgco.cs@gmail.com</p>
    </div>
    <div className="flex items-center">
      <Linkedin className="mr-2" />
      <a href="/contact" className="text-blue-600 hover:underline">LinkedIn</a>
    </div>
    <div className="flex items-center">
      <Twitter className="mr-2" />
      <a href="/contact" className="text-blue-400 hover:underline">X (Formerly Twitter)</a>
    </div>
  </div>
);

const ContactPage: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    
    <main className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactInfo />
            </CardContent>
          </Card>
        
          <Link to="https://www.google.com/maps/place/718,+Joshi+Rd,+Block+A,+Karol+Bagh,+New+Delhi,+Delhi,+110005/@28.6499802,77.1984259,19z/" className="block mb-8 no-underline">
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                  <img 
                      src="/location.png" 
                      alt="Map of ATG&Co location" 
                      className="w-full h-64 object-cover rounded-lg"
                  />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default ContactPage;