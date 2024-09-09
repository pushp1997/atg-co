import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { Badge } from './components/ui/badge';
import Footer from './Footer';
import Header from './Header';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  qualifications: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "FCS Pooja Anand",
    position: "Founder",
    description: "Ms. Pooja Anand is a distinguished professional with over 20 years of experience in\
      Company Law, Capital Markets, Corporate Restructuring, and Transaction Advisory.\
      As the Founder of ATG & Co., she has established a legacy of excellence, guiding a team of dedicated,\
      research-oriented professionals who deliver innovative and value-added techno-legal business solutions\
      through a unique model of integrated legal and financial consulting services.\
      Academically, Ms. Anand is a qualified lawyer and a Fellow Member of the Institute of Company Secretaries of India.\
      She has recently achieved a significant milestone by qualifying as an Australian Chartered Secretary and is now a\
      distinguished member of the Governance Institute of Australia and the Chartered Governance Institute of the\
      UK and Ireland.",
    qualifications: ["Lawyer", "Fellow Member ICSI", "Australian Chartered Secretary"]
  },
  {
    name: "FCS Mukul Tyagi",
    position: "Managing Partner",
    description: "Mukul Tyagi is a seasoned professional with over 10 years of\
      experience in corporate advisory and audit services, both in India\
      and internationally. He holds a Bachelor's degree in Law and\
      Commerce and is a Fellow Member of the Institute of Company\
      Secretaries of India (ICSI). His expertise spans a wide range of\
      areas, including Corporate Laws, Due Diligence, Acquisitions, IPOs,\
      Corporate Governance, and Foreign Exchange laws.\
      Mukul also holds a Certificate in Financial Modelling and Securities\
      Valuation from The Wall Street School and a Postgraduate Diploma\
      in Intellectual Property Rights from the Indian Law Institute, New\
      Delhi.\
      He has successfully led teams in various international supply chain\
      audits across Turkey, Thailand, and Indonesia, demonstrating his\
      strong leadership and global outlook. As the head of the Corporate\
      Affairs & Compliance Team, Mukul plays a pivotal role in delivering\
      value-added services to a diverse portfolio of listed and unlisted\
      clients, ensuring their compliance and governance standards are\
      met.",
    qualifications: ["Fellow Member ICSI", "Bachelor in Law and Commerce", "Financial Modelling and Securities Valuation Certificate", "PG Diploma in Intellectual Property Rights"]
  },
  {
    name: "ACS Deepak Gupta",
    position: "Partner",
    description: "Mr. Deepak Gupta is a graduate of Commerce and an Associate\
      member of the Institute of Company Secretaries of India and\
      possesses more than 5 years of experience in Corporate Laws\
      Compliance & Management Services.\
      Before Joining, ATG & Co., as a partner, he worked as Assistant\
      Company Secretary with Security Printing and Minting Corporation\
      of India Limited (SPMCIL), a wholly owned Schedule 'A' Miniratna\
      Category-I Company of the Government of India, for more than 4\
      years and Vayam Technologies Limited as an Company Secretary.\
      He has a vast experience in Secretarial Audit, Due Diligence, Legal\
      Compliance Management, and Corporate Governance.",
    qualifications: ["Associate Member ICSI", "Commerce Graduate"]
  },
  {
    name: "FCS Nitin Kumar",
    position: "Strategic Consulting Team",
    description: "Nitin Kumar is a Fellow Member of The Institute of Company Secretaries of India (ICSI)\
      with over 11 years of experience in\
      corporate legal and compliance. He holds a\
      Bachelor's degree in Commerce and has\
      completed a Certificate course in Investment\
      Analysis from NSE Academy. Currently, he is\
      pursuing a Chartered Secretary qualification\
      from the Governance Institute of Australia.\
      Nitin has a proven track record of\
      representing clients before regulatory bodies,\
      including the NCLT, SEBI, and RBI. His\
      expertise in the Insolvency and Bankruptcy\
      Code (IBC) is noteworthy, particularly in\
      preparing Resolution Plans under CIRP.\
      Previously, he served as the Compliance\
      Officer at JTL Industries, where he was\
      instrumental in the company's direct listing\
      on BSE in 2012. His leadership roles include\
      serving as Chairman of the Chandigarh\
      Chapter of NIRC of ICSI in 2018, Vice\
      Chairman in 2017, Secretary in 2016, and\
      Treasurer in 2015.",
    qualifications: ["Fellow Member ICSI", "Bachelor in Commerce", "Certificate in Investment Analysis", "Pursuing Chartered Secretary qualification from Governance Institute of Australia"]
  },
  {
    name: "CA Arti",
    position: "Strategic Consulting Team",
    description: "Arti is a Chartered Accountant and an\
      associate member of the Institute of\
      Chartered Accountants of India (ICAI). She\
      holds a Master's Degree in Management and\
      Accounting, further enhancing her expertise\
      in the financial domain. Arti has specialized in\
      financial analysis by completing a course in\
      “Financial Modelling and Valuation” from\
      Grant Thornton, with a focus on equity and\
      securities valuation.\
      Arti brings a comprehensive understanding\
      of both direct and indirect taxation, including\
      Income Tax and GST. She is experienced in\
      handling complex tax matters and regularly\
      represents clients before quasi-judicial\
      bodies, ensuring favorable outcomes in tax\
      disputes. Her expertise in financial modeling\
      and securities valuation supports strategic\
      decision-making for businesses, particularly\
      in areas like investments, mergers, and\
      acquisitions. Known for her analytical\
      acumen and attention to detail, Arti provides\
      precise, actionable insights, making her an\
      invaluable asset in financial consulting and\
      taxation services.",
    qualifications: ["Chartered Accountant", "Master's Degree in Management and Accounting", "Financial Modelling and Valuation Course"]
  },
  {
    name: "Shalini Vasishtha",
    position: "Strategic Consulting Team",
    description: "Shalini Vasishtha is a distinguished trainee of\
      the Post Graduate Insolvency Programme\
      (PGIP) of the Indian Institute of Corporate\
      Affairs. She has gained extensive expertise in\
      the Insolvency and Bankruptcy Code (IBC).\
      She has developed strong skills in drafting legal\
      documents and managing compliance for\
      insolvency cases and successfully led\
      significant receivable recovery for corporate\
      debtors, drafted legal applications, and\
      contributed to marketing and sales efforts.\
      Additionally, she provides research assistance\
      related to insolvency. Her experience\
      encompasses Corporate Insolvency Resolution\
      Processes (CIRPs), liquidations, and individual\
      insolvency processes, giving her a\
      comprehensive understanding of insolvency\
      law and regulatory compliance.\
      Her academic foundation is robust, holding a\
      B.A. LLB. (Hons.), which complements her\
      practical experience. Shalini has worked as a\
      Legal Review Specialist for eighteen months,\
      contributing significantly to legal reviews and\
      analyses. With a solid foundation in Insolvency\
      and Restructuring, along with hands-on\
      experience in managing CIRPs, liquidations,\
      and individual insolvency matters. She is\
      recognized for her exemplary work ethic and\
      commitment to excellence in her field.",
    qualifications: ["B.A. LLB. (Hons.)", "Post Graduate Insolvency Programme trainee"]
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <div className="flex items-center space-x-6">
        <Avatar className="w-24 h-24">
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold text-purple-600">{member.name}</CardTitle>
          <CardDescription className="text-lg">{member.position}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="mb-4 text-gray-700">
        {member.description}
      </div>
      <div className="flex flex-wrap gap-2">
        {member.qualifications.map((qual, index) => (
          <Badge key={index} className="text-sm bg-purple-100 text-black hover:text-gray-100">
            {qual}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const TeamPage: React.FC = () => (
  <div className="min-h-screen bg-gray-100 bg-repeat-x bg-top">
    <Header />
    
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h2>
      <p className="mb-12 text-xl text-gray-600 text-center">
        At ATG&Co, our team of experienced professionals is dedicated to providing excellence in corporate services.
        Each member brings unique expertise and a wealth of experience to serve our clients' needs.
      </p>
      
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </main>

    <Footer />
  </div>
);

export default TeamPage;