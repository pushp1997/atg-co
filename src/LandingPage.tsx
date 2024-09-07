import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { ArrowRight, CheckCircle, Users, TrendingUp, Briefcase, Globe, Shield, Book } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';


const Hero: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Empowering Sustainable Business Growth</h1>
      <p className="text-xl text-gray-600 mb-8">Specialized corporate services tailored for your business success since 2003</p>
      <Link to="/services"><Button size="lg">Explore Our Services <ArrowRight className="ml-2" /></Button></Link>
    </div>
  </section>
);

const Services: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Corporate Compliance", icon: CheckCircle, description: "Secretarial Audit, Due Diligence, and Certification" },
          { title: "Financial Advisory", icon: TrendingUp, description: "IPO Advisory, Corporate & Financial Restructuring" },
          { title: "Legal Services", icon: Shield, description: "Company Law Management, SEBI & FEMA compliances" },
          { title: "Sustainability Services", icon: Globe, description: "CSR and ESG advisory & implementation" },
          { title: "Corporate Training", icon: Users, description: "Training for Board of Directors & Senior Management" },
          { title: "Specialized Services", icon: Briefcase, description: "Bankruptcy & Insolvency, Asset Reconstruction" }
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

const About: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About ATG&Co</h2>
      <p className="text-lg text-gray-600 mb-6">
        Established in 2003, ATG&Co is a peer-reviewed Practicing Company Secretaries firm based in New Delhi. With over two decades of experience, we have built lasting relationships with clients and authorities alike, including ROC, NCLT, MCA, SEBI, and RBI.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Our team of experienced professionals provides par excellence service across a wide range of corporate services, from IPOs and FDIs to secretarial audits and corporate restructuring.
      </p>
    </div>
  </section>
);

const Team: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "FCS Pooja Anand", role: "Founder", description: "Over 20 years of experience in Company Law, Capital Markets, and Corporate Restructuring." },
          { name: "FCS Mukul Tyagi", role: "Managing Partner", description: "10+ years of experience in corporate advisory and audit services, both in India and internationally." },
          { name: "ACS Deepak Gupta", role: "Partner", description: "5+ years of experience in Corporate Laws Compliance & Management Services." },
          { name: "FCS Nitin Kumar", role: "Strategic Consulting Team", description: "11+ years of experience in corporate legal and compliance." },
          { name: "CA Arti", role: "Strategic Consulting Team", description: "Chartered Accountant specializing in financial analysis and taxation." },
          { name: "Shalini Vasishtha", role: "Strategic Consulting Team", description: "Expert in Insolvency and Bankruptcy Code (IBC) with extensive legal experience." }
        ].map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Our System", icon: Shield, description: "Robust system ensuring utmost confidentiality of client data." },
          { title: "Our Structure", icon: Users, description: "Senior Partner-led team for efficient communication and quick response to pressing matters." },
          { title: "Our Staff", icon: Book, description: "100+ highly qualified professionals with industry-specific expertise." }
        ].map((reason, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <reason.icon className="mr-2" />
                {reason.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{reason.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const LandingPage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Hero />
      <Services />
      <About />
      <Team />
      <WhyUs />
    </main>
    <Footer />
  </div>
);

export default LandingPage;