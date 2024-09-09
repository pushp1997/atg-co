import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Clock, CheckCircle, Building } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';


const AboutPage: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    
    <main className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About ATG&Co</h2>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-600">
          <Building className="mr-2" />
          Company Overview
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
                M/S. ATG & CO., a Practicing Company Secretaries firm located in New Delhi, established in 2003 is a peer- reviewed firm with more than two
                decades of rendering specialized services and dealing with various authorities like the Registrar of Companies (ROC), National Company Law
                Tribunal (NCLT), Ministry of Company Affairs (MCA), Securities & Exchange Board of India (SEBI), Reserve Bank of India (RBI) and various
                other authorities and institutions, it has established long-lasting and highly valued relationship with clients.
            </p>
            <p className="mb-4">
                The firm has an experienced team of professionals equipped with modern infrastructure providing par excellence service to its
                esteemed clients.
            </p>
            <p>
                The gamut of services specialized the range from successfully handling Initial Public Oering (IPO),
                Further Public Oering (FPO), Private Placements of Securities, Foreign Direct Investments (FDI),
                Overseas Direct Investments (ODI), Bank Due Diligences & other secretarial matters including
                conducting company and board meetings; conducting secretarial audits & due diligence;
                rendering advisory services on legal matters, corporate restructuring &
                company takeover.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-600">
          <Clock className="mr-2" />
          Our Experience
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              With over two decades of experience, ATG&Co has established itself as a leader in corporate secretarial and legal services. We have successfully handled complex cases and transactions across various industries, demonstrating our expertise and commitment to excellence.
            </p>
            <p>
              Our team has worked with diverse sectors including venture capital funds, pharmaceuticals, IT, textiles, financial institutions, real estate, and many more, giving us a broad perspective and deep understanding of various industry-specific challenges and requirements.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-600">
          <CheckCircle className="mr-2" />
          Why Choose Us
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <strong>Our System:</strong> We have a robust system in place which ensures utmost confidentiality of our client's data.
              </li>
              <li className="mb-2">
                <strong>Our Structure:</strong> Our team is led by our Senior Partner, which eases the point of contact for our clients. Our Senior Partner directly reports to our Founding Partners, enabling us to respond to pressing matters on priority and in real-time.
              </li>
              <li className="mb-2">
                <strong>Our Staff:</strong> We are a team of 100+ professionals who are highly qualified and experienced in industry-specific practices. This allows us to take cumulative decisions with experience and exposure.
              </li>
              <li>
                <strong>Dedicated Audit Team:</strong> We have a dedicated team with a minimum of 5 years of experience who carries out Secretarial Audit, Due Diligence, etc. for initial/further public offers and other purposes.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>

    <Footer />
  </div>
);

export default AboutPage;